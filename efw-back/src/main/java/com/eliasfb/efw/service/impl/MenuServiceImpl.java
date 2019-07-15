package com.eliasfb.efw.service.impl;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eliasfb.efw.dto.AddDishToMenuDto;
import com.eliasfb.efw.dto.CreateMenuDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.mapper.MenuToDtoMapper;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.MenuStatDto;
import com.eliasfb.efw.dto.menu.NutritionalStatEnum;
import com.eliasfb.efw.dto.menu.ShoppingListDto;
import com.eliasfb.efw.dto.menu.ShoppingListItemDto;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.model.MenuDisRel;
import com.eliasfb.efw.model.MenuDisRelId;
import com.eliasfb.efw.model.User;
import com.eliasfb.efw.repository.DishRepository;
import com.eliasfb.efw.repository.MenuDisRelRepository;
import com.eliasfb.efw.repository.MenuRepository;
import com.eliasfb.efw.service.MenuService;

@Service
public class MenuServiceImpl implements MenuService {
	@Autowired
	private MenuRepository repository;

	@Autowired
	private DishRepository dishRepository;

	@Autowired
	private MenuDisRelRepository menuDisRelRepository;

	@Autowired
	private MenuToDtoMapper mapper;

	@Override
	public ResponseDto create(CreateMenuDto dto) {
		// We initialize the menu entity with the data supplied :
		Menu menu = new Menu();
		// user id
		User user = new User();
		user.setId(dto.getUserId());
		menu.setUser(user);
		// start date
		menu.setStartDate(getLastWeekStart(dto.getStartDate()));
		// We persist the entity
		repository.save(menu);

		return new ResponseDto(ResponseDto.OK_CODE, "The menu has been created correctly");
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
			List<MenuStatDto> menuStats = getStatList(userMenu.getDishes());
			MenuDto menuDto = this.mapper.menuToMenuDto(userMenu);
			menuDto.setStats(menuStats);
			return menuDto;
		}
		return new MenuDto();
	}

	private List<MenuStatDto> getStatList(List<MenuDisRel> menuDisRels) {
		List<MenuStatDto> menuStats = new ArrayList<>();
		menuStats.add(getCaloriesStat(menuDisRels));
		menuStats.add(getProteinsStat(menuDisRels));
		menuStats.add(getFatsStat(menuDisRels));
		menuStats.add(getCarbohydratesStat(menuDisRels));
		return menuStats;
	}

	private MenuStatDto getCaloriesStat(List<MenuDisRel> menuDisRels) {
		Integer calories = menuDisRels.stream().map(md -> md.getId().getDish())
				.collect(Collectors.summingInt(d -> d.getCalories()));
		return new MenuStatDto(NutritionalStatEnum.CALORIES.getName(), String.valueOf(calories));
	}

	private MenuStatDto getProteinsStat(List<MenuDisRel> menuDisRels) {
		Integer proteins = menuDisRels.stream().map(md -> md.getId().getDish())
				.collect(Collectors.summingInt(d -> d.getProteins()));
		return new MenuStatDto(NutritionalStatEnum.PROTEINS.getName(), String.valueOf(proteins));
	}

	private MenuStatDto getFatsStat(List<MenuDisRel> menuDisRels) {
		Integer fats = menuDisRels.stream().map(md -> md.getId().getDish())
				.collect(Collectors.summingInt(d -> d.getFats()));
		return new MenuStatDto(NutritionalStatEnum.FATS.getName(), String.valueOf(fats));
	}

	private MenuStatDto getCarbohydratesStat(List<MenuDisRel> menuDisRels) {
		Integer carbohydrates = menuDisRels.stream().map(md -> md.getId().getDish())
				.collect(Collectors.summingInt(d -> d.getFats()));
		return new MenuStatDto(NutritionalStatEnum.CARBOHYDRATES.getName(), String.valueOf(carbohydrates));
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
	public ShoppingListDto getShoppingList(int menuId) {
		Menu menu = repository.findOne(menuId);
		Map<String, Long> shoppingListItems = menu.getShoppingListItems();
		return new ShoppingListDto(shoppingListItems.entrySet().stream()
				.map(si -> new ShoppingListItemDto(si.getKey(), si.getValue())).collect(Collectors.toList()));
	}
}
