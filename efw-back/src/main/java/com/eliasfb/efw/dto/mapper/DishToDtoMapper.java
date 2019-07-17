package com.eliasfb.efw.dto.mapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.eliasfb.efw.dto.CreateDishDto;
import com.eliasfb.efw.dto.DishDto;
import com.eliasfb.efw.dto.menu.MenuDishDto;
import com.eliasfb.efw.dto.stat.NutritionalStatEnum;
import com.eliasfb.efw.dto.stat.StatDto;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.model.User;

@Mapper(componentModel = "spring")
public abstract class DishToDtoMapper {

	@Autowired
	private IngredientToIngredientDtoMapper ingredientMapper;

	public List<DishDto> dishListToDishDtoList(List<Dish> dishes) {
		return dishes.stream().map(di -> toDto(di)).collect(Collectors.toList());
	}

	@Mapping(source = "ingredients", target = "ingredients", ignore = true)
	public abstract DishDto dishToDishDto(Dish dish);

	public abstract MenuDishDto dishToMenuDishDto(Dish dish);

	DishDto toDto(Dish dish) {
		DishDto dishDto = dishToDishDto(dish);
		dishDto.setIngredients(
				dish.getIngredients().stream().map(i -> ingredientMapper.toDto(i)).collect(Collectors.toList()));
		dishDto.setStats(getDishStats(dish));
		return dishDto;
	}

	List<DishDto> dishesToDishesDto(List<Dish> dishes) {
		return dishes.stream().map(d -> toDto(d)).collect(Collectors.toList());
	}

	@Mapping(source = "ingredients", target = "ingredients", ignore = true)
	public abstract Dish createDishDtoToDish(CreateDishDto createDish);

	public Dish toEntity(CreateDishDto dto) {
		Dish dish = createDishDtoToDish(dto);
		if (dto.getUserId() != null) {
			User user = new User();
			user.setId(dto.getUserId());
			dish.setUsers(new HashSet<>(Arrays.asList(user)));
		}
		dish.setIngredients(dto.getIngredients().stream().map(ig -> new Ingredient(ig)).collect(Collectors.toSet()));
		return dish;
	}

	public List<StatDto> getDishStats(Dish dish) {
		List<StatDto> stats = new ArrayList<>();
		stats.add(new StatDto(NutritionalStatEnum.CALORIES.getName(), String.valueOf(dish.getCalories())));
		stats.add(new StatDto(NutritionalStatEnum.FATS.getName(), String.valueOf(dish.getFats())));
		stats.add(new StatDto(NutritionalStatEnum.PROTEINS.getName(), String.valueOf(dish.getProteins())));
		stats.add(new StatDto(NutritionalStatEnum.CARBOHYDRATES.getName(), String.valueOf(dish.getCarbohydrates())));
		return stats;
	}

}
