package com.eliasfb.efw.service.impl;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eliasfb.efw.dto.AddDishToMenuDto;
import com.eliasfb.efw.dto.CreateMenuDto;
import com.eliasfb.efw.dto.FillMenuFromTemplateDto;
import com.eliasfb.efw.dto.MenuSpotFoundDto;
import com.eliasfb.efw.dto.PriceEstimateDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.UpdateDishOnMenuDto;
import com.eliasfb.efw.dto.UserConfigurationsDto;
import com.eliasfb.efw.dto.mapper.MenuToDtoMapper;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.ShoppingListDto;
import com.eliasfb.efw.dto.menu.ShoppingListItemDto;
import com.eliasfb.efw.enums.NutritionalStatEnum;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.model.MenuDisRel;
import com.eliasfb.efw.model.MenuDisRelId;
import com.eliasfb.efw.model.MenuTemplate;
import com.eliasfb.efw.model.UnitAndQuantity;
import com.eliasfb.efw.model.User;
import com.eliasfb.efw.repository.DishRepository;
import com.eliasfb.efw.repository.MenuDisRelRepository;
import com.eliasfb.efw.repository.MenuRepository;
import com.eliasfb.efw.repository.MenuTemplateRepository;
import com.eliasfb.efw.service.MenuService;
import com.eliasfb.efw.service.PriceEstimateService;
import com.eliasfb.efw.service.UserService;

@Service
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuRepository repository;

	@Autowired
	private DishRepository dishRepository;

	@Autowired
	private MenuTemplateRepository menuTemplateRepo;

	@Autowired
	private MenuDisRelRepository menuDisRelRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private PriceEstimateService priceEstimate;

	@Autowired
	private MenuToDtoMapper mapper;

	private static final Long DAYS_IN_WEEK = 7L;

	@Override
	public ResponseDto create(CreateMenuDto dto) {

		createMenuByDto(dto);

		return new ResponseDto(ResponseDto.OK_CODE, "The menu has been created correctly");
	}

	private Menu createMenuByDto(CreateMenuDto dto) {
		// We initialize the menu entity with the data supplied :
		Menu menu = new Menu();
		// user id
		User user = new User();
		user.setId(dto.getUserId());
		menu.setUser(user);
		// start date
		menu.setStartDate(getLastWeekStart(dto.getStartDate()));
		// We persist the entity
		return repository.save(menu);
	}

	@Override
	public Menu delete(int id) {
		Menu menu = findById(id);
		if (menu != null) {
			repository.delete(menu);
		}
		return menu;
	}

	@Override
	@Transactional
	public ResponseDto clearMenu(int id) {
		Menu menu = findById(id);
		if (menu != null) {
			menuDisRelRepository.deleteByMenuId(menu.getId());
		}
		return new ResponseDto(ResponseDto.OK_CODE, "The menu has been cleared correctly");
	}

	@Override
	public MenuDto findUserMenu(int userId, String startDate) {
		Menu userMenu = repository.findByUserIdAndStartDate(userId, getLastWeekStart(startDate));
		if (userMenu != null) {
			MenuDto menuDto = this.mapper.menuToMenuDto(userMenu);
			return menuDto;
		}
		return new MenuDto();
	}

	// Auxiliar method for obtaining the previous Monday from date received
	private String getLastWeekStart(String startDate) {
		return LocalDate.parse(startDate).with(DayOfWeek.MONDAY).toString();
	}

	@Override
	public List<Menu> findAll() {
		return repository.findAll();
	}

	@Override
	public Menu findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public Menu update(Menu menu) {
		return repository.save(menu);
	}

	@Override
	@Transactional
	public ResponseDto addDishToMenu(int menuId, AddDishToMenuDto dto) {
		// We find the corresponding entities
		Menu menu = repository.findOne(menuId);
		Dish dish = dishRepository.findOne(dto.getDishId());
		// We join them on the relationship entity
		MenuDisRelId id = new MenuDisRelId(menu, dish, dto.getDate());
		MenuDisRel menuDisRel = new MenuDisRel(id);
		// We persist the changes
		if (!menu.getDishes().contains(menuDisRel)) {
			menu.getDishes().add(menuDisRel);
			repository.save(menu);
		}
		return new ResponseDto(ResponseDto.OK_CODE, "Dish added to menu correctly");
	}

	@Override
	@Transactional
	public MenuSpotFoundDto addDishToFirstValidSpotOnMenu(int userId, AddDishToMenuDto dto) {
		MenuSpotFoundDto spotDto = new MenuSpotFoundDto();
		String spotFound = null;
		// We find the current user menu
		String startDateForToday = getLastWeekStart(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		Menu menu = repository.findByUserIdAndStartDate(userId, startDateForToday);
		// If the user has no menu on that date, we create it
		if (menu == null) {
			menu = this.createMenuByDto(new CreateMenuDto(userId, startDateForToday));
		}
		// We find the user meals
		Integer mealsInWeek = this.userService.findUserMeals(userId).size();
		// We find the dish
		Dish dish = this.dishRepository.findOne(dto.getDishId());
		// We iterate over the week days
		LocalDateTime startDate = LocalDate.parse(menu.getStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"))
				.atTime(0, 0, 0);
		LocalDateTime endDate = startDate.plusDays(MenuServiceImpl.DAYS_IN_WEEK);
		while (startDate.compareTo(endDate) < 0 && spotFound == null) {
			// We search the first valid spot
			spotFound = findSpotOnDay(menu, dish, startDate, mealsInWeek);
			startDate = startDate.plusDays(1L);
		}
		if (spotFound != null) {
			// We persist the changes
			this.repository.save(menu);
			spotDto.setDate(spotFound);
		}
		return spotDto;
	}

	private String findSpotOnDay(Menu menu, Dish dish, LocalDateTime date, Integer mealsInWeek) {
		String spot = null;
		for (int i = 0; i < mealsInWeek && spot == null; i++) {
			String hourFormatted = date.format(DateTimeFormatter.ofPattern("HH"));
			String dateWithHourFormatted = date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S"));
			// The dish must allow this concrete spot and the menu must have the spot empty
			boolean dishMealsAllowThisSpot = dish.getMeals().stream().map(meal -> meal.getId().getMeal())
					.anyMatch(m -> hourFormatted.equals(m.getHour()));
			boolean menuHasThisSpotOccupied = menu.getDishes().stream().map(d -> d.getId())
					.anyMatch(d -> dateWithHourFormatted.equals(d.getDishDate()));
			if (dishMealsAllowThisSpot && !menuHasThisSpotOccupied) {
				// If this spot is valid, we add the dish to the spot and we stop
				spot = dateWithHourFormatted;
				menu.getDishes().add(new MenuDisRel(new MenuDisRelId(menu, dish, dateWithHourFormatted)));
			} else {
				// If this spot is invalid, we pass to the next spot
				date = date.plusHours(1L);
			}
		}
		return spot;
	}

	@Override
	@Transactional
	public MenuDto updateDishDateOnMenu(int menuId, UpdateDishOnMenuDto dto) {
		MenuDto menuDto = null;
		// We find the corresponding entities
		Menu menu = repository.findOne(menuId);
		Dish dish = dishRepository.findOne(dto.getDishId());
		// We create both of the relationships : the old one and the new one
		MenuDisRelId oldId = new MenuDisRelId(menu, dish, dto.getOldDate());
		MenuDisRel oldMenuDisRel = new MenuDisRel(oldId);
		MenuDisRelId newId = new MenuDisRelId(menu, dish, dto.getNewDate());
		MenuDisRel newMenuDisRel = new MenuDisRel(newId);

		if (menu.getDishes().contains(oldMenuDisRel)) {
			// We remove the old relationship
			menu.getDishes().remove(oldMenuDisRel);
			menuDisRelRepository.deleteOne(menuId, dto.getOldDate(), dto.getDishId());
			// We add the new one
			menu.getDishes().add(newMenuDisRel);
			repository.save(menu);
			menuDto = this.mapper.menuToMenuDto(menu);
		}
		return menuDto;
	}

	@Override
	@Transactional
	public ResponseDto removeDishFromMenu(int menuId, AddDishToMenuDto dto) {
		// We find the corresponding entities
		Menu menu = repository.findOne(menuId);
		Dish dish = dishRepository.findOne(dto.getDishId());
		// We join them on the relationship entity
		MenuDisRelId id = new MenuDisRelId(menu, dish, dto.getDate());
		MenuDisRel menuDisRel = new MenuDisRel(id);
		// We remove it from the list and persist the changes
		if (menu.getDishes().contains(menuDisRel)) {
			menuDisRelRepository.deleteOne(menuId, dto.getDate(), dto.getDishId());
		}

		return new ResponseDto(ResponseDto.OK_CODE, "Dish removed from menu correctly");
	}

	@Override
	public ShoppingListDto getShoppingList(int menuId) {
		Menu menu = repository.findOne(menuId);
		Map<String, UnitAndQuantity> shoppingListItems = menu.getShoppingListItems();
		List<ShoppingListItemDto> dtos = shoppingListItems.entrySet().stream()
				.map(si -> new ShoppingListItemDto(si.getKey(), si.getValue().getUnit(), si.getValue().getQuantity()))
				.collect(Collectors.toList());
		PriceEstimateDto price = this.priceEstimate.estimateShoppingList(dtos);
		return new ShoppingListDto(dtos, price);
	}

	@Override
	@Transactional
	public MenuDto randomGenerateMenu(Integer menuId, Integer userId) {
		// First, we query the necessary info : The menu and the user dishes
		Menu menu = this.repository.findOne(menuId);
		List<Dish> userDishes = this.dishRepository.findUserDishes(userId);
		Integer mealsInWeek = this.userService.findUserMeals(userId).size();
		// Empty the menu dishes
		if (!menu.getDishes().isEmpty()) {
			this.clearMenu(menuId);
			menu.setDishes(new ArrayList<>());
		}
		// We iterate over the week days
		LocalDateTime startDate = LocalDate.parse(menu.getStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"))
				.atTime(0, 0, 0);
		LocalDateTime endDate = startDate.plusDays(MenuServiceImpl.DAYS_IN_WEEK);
		while (startDate.compareTo(endDate) < 0) {
			// We fill each day with every meal
			fillDayWithRandomDishes(menu, userDishes, startDate, mealsInWeek);
			startDate = startDate.plusDays(1L);
		}

		// We persist the changes
		this.repository.save(menu);

		// We return the menu formatted
		return this.mapper.menuToMenuDto(menu);
	}

	private void fillDayWithRandomDishes(Menu menu, List<Dish> userDishes, LocalDateTime date, Integer mealsInWeek) {
		for (int i = 0; i < mealsInWeek; i++) {
			// Select a dish
			Dish randomDish = selectRandomDishWithValidMeal(userDishes, date);
			if (randomDish != null) {
				// Add it to the menu and go to the next hour
				menu.getDishes().add(new MenuDisRel(new MenuDisRelId(menu, randomDish,
						date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S")))));
			}
			date = date.plusHours(1L);
		}
	}

	// We'll try to select a dish whose meals are accord with the date
	// If we can't, we return null
	private Dish selectRandomDishWithValidMeal(List<Dish> userDishes, LocalDateTime date) {
		Dish validDish = null;
		String hourFormatted = date.format(DateTimeFormatter.ofPattern("HH"));
		// We filter the dishes by those with any available meal that matches the date
		List<Dish> validDishes = userDishes.stream().filter(dish -> dish.getMeals().stream()
				.map(meal -> meal.getId().getMeal()).anyMatch(m -> hourFormatted.equals(m.getHour())))
				.collect(Collectors.toList());
		if (!validDishes.isEmpty()) {
			validDish = randomSelectDish(validDishes);
		}
		return validDish;
	}

	private Dish randomSelectDish(List<Dish> userDishes) {
		Random random = new Random();
		Integer randomIndex = random.nextInt((userDishes.size() - 1) - 0 + 1);
		return userDishes.get(randomIndex);
	}

	@Override
	@Transactional
	public MenuDto generateValidMenu(Integer menuId, Integer userId) {
		// First, we query the necessary info : The menu and the user dishes
		Menu menu = this.repository.findOne(menuId);
		List<Dish> userDishes = this.dishRepository.findUserDishes(userId);
		Integer mealsInWeek = this.userService.findUserMeals(userId).size();
		// We get the max stats per week needed for the algorythm
		UserConfigurationsDto confs = this.userService.findConfigurations(userId);
		Map<String, Double> maxStats = getMaxStats(confs);
		Map<String, Double> currentStats = getInitialStats();
		// Empty the menu dishes
		if (!menu.getDishes().isEmpty()) {
			this.clearMenu(menuId);
			menu.setDishes(new ArrayList<>());
		}
		// We iterate over the week days
		LocalDateTime startDate = LocalDate.parse(menu.getStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd"))
				.atTime(0, 0, 0);
		LocalDateTime endDate = startDate.plusDays(MenuServiceImpl.DAYS_IN_WEEK);
		while (startDate.compareTo(endDate) < 0) {
			// We fill each day with every meal -> In case we can't, we stop filling
			if (!fillDayWithValidDishes(menu, userDishes, startDate, currentStats, maxStats, mealsInWeek)) {
				break;
			}
			startDate = startDate.plusDays(1L);
		}

		// We persist the changes
		this.repository.save(menu);

		// We return the menu formatted
		return this.mapper.menuToMenuDto(menu);
	}

	private Map<String, Double> getInitialStats() {
		Map<String, Double> maxStats = new HashMap<>();
		maxStats.put(NutritionalStatEnum.CALORIES.getName(), 0d);
		maxStats.put(NutritionalStatEnum.FATS.getName(), 0d);
		maxStats.put(NutritionalStatEnum.CARBOHYDRATES.getName(), 0d);
		maxStats.put(NutritionalStatEnum.PROTEINS.getName(), 0d);
		return maxStats;
	}

	private Map<String, Double> getMaxStats(UserConfigurationsDto confs) {
		Map<String, Double> maxStats = new HashMap<>();
		maxStats.put(NutritionalStatEnum.CALORIES.getName(), confs.getMaxCaloriesPerWeek());
		maxStats.put(NutritionalStatEnum.FATS.getName(), confs.getMaxFatsPerWeek());
		maxStats.put(NutritionalStatEnum.CARBOHYDRATES.getName(), confs.getMaxCarbohydratesPerWeek());
		maxStats.put(NutritionalStatEnum.PROTEINS.getName(), confs.getMaxProteinsPerWeek());
		return maxStats;
	}

	private boolean fillDayWithValidDishes(Menu menu, List<Dish> userDishes, LocalDateTime date,
			Map<String, Double> currentValues, Map<String, Double> maxValues, Integer mealsInWeek) {
		boolean result = true;
		for (int i = 0; i < mealsInWeek && result; i++) {
			// We add a valid dish to the menu
			result = selectValidDishWithValidMeal(menu, userDishes, currentValues, maxValues, date);
			if (result) {
				// If we can, we continue
				date = date.plusHours(1L);
			}
		}
		return result;
	}

	// We'll try to select a dish whose meals are accord with the date
	// If we can't, we return null
	private boolean selectValidDishWithValidMeal(Menu menu, List<Dish> userDishes, Map<String, Double> currentValues,
			Map<String, Double> maxValues, LocalDateTime date) {
		Boolean canWeContinue = true;
		String hourFormatted = date.format(DateTimeFormatter.ofPattern("HH"));
		// We filter the dishes by those with any available meal that matches the date
		List<Dish> validDishes = userDishes.stream().filter(dish -> dish.getMeals().stream()
				.map(meal -> meal.getId().getMeal()).anyMatch(m -> hourFormatted.equals(m.getHour())))
				.collect(Collectors.toList());
		if (!validDishes.isEmpty()) {
			// If there are valid dishes we select one from those
			canWeContinue = selectValidDish(menu, validDishes, currentValues, maxValues, date);
		}
		return canWeContinue;
	}

	private boolean selectValidDish(Menu menu, List<Dish> userDishes, Map<String, Double> currentValues,
			Map<String, Double> maxValues, LocalDateTime date) {
		Dish dishSelected = null;
		// We select the first dish that is valid i.e. it is within the ranges in ALL of
		// its stats
		List<Dish> validDishes = new ArrayList<>();
		for (Dish d : userDishes) {
			if (isValidDish(d, currentValues, maxValues)) {
				dishSelected = d;
				validDishes.add(dishSelected);
				// We prioritize those dishes that are not contained already within the menu
				if (!menu.containsDish(d)) {
					validDishes = new ArrayList<>();
					break;
				}
			}
		}
		// If we could obtain a valid dish, we add it to the menu
		if (dishSelected != null) {
			if (!validDishes.isEmpty()) {
				// If we have several valid dishes, we randomly select one
				dishSelected = randomSelectDish(validDishes);
			}
			menu.getDishes().add(new MenuDisRel(new MenuDisRelId(menu, dishSelected,
					date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S")))));
			addDishStats(dishSelected, currentValues);
		}

		return dishSelected != null;
	}

	private void addDishStats(Dish dish, Map<String, Double> currentValues) {
		currentValues.put(NutritionalStatEnum.CALORIES.getName(),
				currentValues.get(NutritionalStatEnum.CALORIES.getName()) + dish.getCalories());
		currentValues.put(NutritionalStatEnum.FATS.getName(),
				currentValues.get(NutritionalStatEnum.FATS.getName()) + dish.getFats());
		currentValues.put(NutritionalStatEnum.PROTEINS.getName(),
				currentValues.get(NutritionalStatEnum.PROTEINS.getName()) + dish.getProteins());
		currentValues.put(NutritionalStatEnum.CARBOHYDRATES.getName(),
				currentValues.get(NutritionalStatEnum.CARBOHYDRATES.getName()) + dish.getCarbohydrates());
	}

	private boolean isValidDish(Dish dish, Map<String, Double> currentValues, Map<String, Double> maxValues) {
		return ((currentValues.get(NutritionalStatEnum.CALORIES.getName()) + dish.getCalories()) < maxValues
				.get(NutritionalStatEnum.CALORIES.getName()))
				&& ((currentValues.get(NutritionalStatEnum.FATS.getName()) + dish.getFats()) < maxValues
						.get(NutritionalStatEnum.FATS.getName()))
				&& (currentValues.get(NutritionalStatEnum.PROTEINS.getName()) + dish.getProteins()) < maxValues
						.get(NutritionalStatEnum.PROTEINS.getName())
				&& (currentValues.get(NutritionalStatEnum.CARBOHYDRATES.getName())
						+ dish.getCarbohydrates()) < maxValues.get(NutritionalStatEnum.CARBOHYDRATES.getName());
	}

	@Override
	@Transactional
	public MenuDto fillMenuFromTemplate(int menuId, FillMenuFromTemplateDto dto) {
		// Find corresponding entities : Menu and template
		Menu menuToBeUpdated = this.repository.findOne(menuId);
		MenuTemplate menuTemplate = this.menuTemplateRepo.findOne(dto.getTemplateId());
		Menu menuFromTemplate = menuTemplate.getMenu();
		// Empty the menu dishes
		if (!menuToBeUpdated.getDishes().isEmpty()) {
			this.clearMenu(menuId);
			menuToBeUpdated.setDishes(new ArrayList<>());
		}
		Integer mealsInWeek = this.userService.findUserMeals(dto.getUserId()).size();
		LocalDateTime startDate = LocalDate
				.parse(menuToBeUpdated.getStartDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")).atTime(0, 0, 0);
		LocalDateTime endDate = startDate.plusDays(MenuServiceImpl.DAYS_IN_WEEK);
		Integer daysFromStartDate = 0;
		while (startDate.compareTo(endDate) < 0) {
			// We fill each day with every meal -> In case we can't, we stop filling
			LocalDateTime date = startDate;
			for (int i = 0; i < mealsInWeek; i++) {
				// We add a valid dish to the menu
				List<Dish> dishesForDate = menuFromTemplate.getDishesFromDaysOffsetAndHour(daysFromStartDate, date);
				final LocalDateTime dateToInsert = date;
				dishesForDate.stream().forEach(d -> {
					menuToBeUpdated.getDishes().add(new MenuDisRel(new MenuDisRelId(menuToBeUpdated, d,
							dateToInsert.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.S")))));
				});
				date = date.plusHours(1L);
			}
			startDate = startDate.plusDays(1L);
			daysFromStartDate++;
		}

		// We persist the changes made
		Menu menuToBeReturned = this.repository.save(menuToBeUpdated);

		return this.mapper.menuToMenuDto(menuToBeReturned);
	}
}
