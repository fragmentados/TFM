package com.eliasfb.efw.dto.mapper;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.eliasfb.efw.dto.menu.MenuDayDto;
import com.eliasfb.efw.dto.menu.MenuDishDto;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.MenuStatDto;
import com.eliasfb.efw.dto.menu.NutritionalStatEnum;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.model.MenuDisRel;

@Mapper(componentModel = "spring", uses = DishToDtoMapper.class)
public abstract class MenuToDtoMapper {

	@Autowired
	DishToDtoMapper dishMapper;

	public abstract List<MenuDto> menuListToMenuDtoList(List<Menu> menu);

	@Mapping(source = "dishes", target = "days")
	@Mapping(source = "dishes", target = "stats")
	public abstract MenuDto menuToMenuDto(Menu menu);

	public List<MenuStatDto> menuStatListToDto(List<MenuDisRel> menuDisRels) {
		List<MenuStatDto> menuStats = new ArrayList<>();
		menuStats.add(new MenuStatDto(NutritionalStatEnum.CALORIES.getName(), String.valueOf(menuDisRels.stream()
				.map(md -> md.getId().getDish().getCalories()).collect(Collectors.summingInt(Integer::intValue)))));
		menuStats.add(new MenuStatDto(NutritionalStatEnum.PROTEINS.getName(), String.valueOf(menuDisRels.stream()
				.map(md -> md.getId().getDish().getProteins()).collect(Collectors.summingInt(Integer::intValue)))));
		menuStats.add(new MenuStatDto(NutritionalStatEnum.FATS.getName(), String.valueOf(menuDisRels.stream()
				.map(md -> md.getId().getDish().getFats()).collect(Collectors.summingInt(Integer::intValue)))));
		menuStats.add(new MenuStatDto(NutritionalStatEnum.CARBOHYDRATES.getName(),
				String.valueOf(menuDisRels.stream().map(md -> md.getId().getDish().getCarbohydrates())
						.collect(Collectors.summingInt(Integer::intValue)))));
		return menuStats;
	}

	public List<MenuDayDto> menuDisListToDto(List<MenuDisRel> menuDisRels) {
		List<MenuDayDto> menuDays = new ArrayList<>();
		Map<String, List<MenuDishDto>> menuDisByDate = groupMenuDisByDate(menuDisRels);
		menuDisByDate.keySet().forEach(date -> menuDays.add(new MenuDayDto(date, menuDisByDate.get(date))));
		// We sort the days by date
		return menuDays.stream()
				.sorted((d1, d2) -> LocalDate.parse(d1.getDate()).compareTo(LocalDate.parse(d2.getDate())))
				.collect(Collectors.toList());
	}

	private Map<String, List<MenuDishDto>> groupMenuDisByDate(List<MenuDisRel> menuDisRels) {
		Map<String, List<MenuDishDto>> menuDisByDate = new HashMap<>();
		menuDisRels.forEach(menuDis -> {
			String dishDate = menuDis.getDishDate();
			if (menuDisByDate.containsKey(dishDate)) {
				menuDisByDate.get(dishDate).add(menuDisToDto(menuDis));
			} else {
				List<MenuDishDto> dishes = new ArrayList<>();
				dishes.add(menuDisToDto(menuDis));
				menuDisByDate.put(dishDate, dishes);
			}
		});
		return menuDisByDate;
	}

	public MenuDishDto menuDisToDto(MenuDisRel menuDisRel) {
		Dish dish = menuDisRel.getId().getDish();
		MenuDishDto menuDishDto = dishMapper.dishToMenuDishDto(dish);
		return menuDishDto;
	}

}
