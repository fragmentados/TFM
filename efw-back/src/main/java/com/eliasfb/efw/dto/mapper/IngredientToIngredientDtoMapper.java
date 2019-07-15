package com.eliasfb.efw.dto.mapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;

import com.eliasfb.efw.dto.CreateIngredientDto;
import com.eliasfb.efw.dto.IngredientDto;
import com.eliasfb.efw.dto.stat.NutritionalStatEnum;
import com.eliasfb.efw.dto.stat.StatDto;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.model.User;

@Mapper(componentModel = "spring")
public abstract class IngredientToIngredientDtoMapper {

	public abstract Ingredient createIngredientDtoToIngredient(CreateIngredientDto createIngredient);

	public Ingredient toEntity(CreateIngredientDto dto) {
		Ingredient ingredient = createIngredientDtoToIngredient(dto);
		if (dto.getUserId() != null) {
			User user = new User();
			user.setId(dto.getUserId());
			ingredient.setUsers(new HashSet<>(Arrays.asList(user)));
		}
		return ingredient;
	}

	public List<IngredientDto> ingredientToDtoList(List<Ingredient> ingredient) {
		return ingredient.stream().map(i -> this.toDto(i)).collect(Collectors.toList());
	}

	public abstract IngredientDto ingredientToDto(Ingredient ingredient);

	public IngredientDto toDto(Ingredient ing) {
		IngredientDto dto = ingredientToDto(ing);
		dto.setStats(getIngredientStats(ing));
		return dto;
	}

	public List<StatDto> getIngredientStats(Ingredient ingredient) {
		List<StatDto> stats = new ArrayList<>();
		stats.add(new StatDto(NutritionalStatEnum.CALORIES.getName(), String.valueOf(ingredient.getCalories())));
		stats.add(new StatDto(NutritionalStatEnum.FATS.getName(), String.valueOf(ingredient.getFats())));
		stats.add(new StatDto(NutritionalStatEnum.PROTEINS.getName(), String.valueOf(ingredient.getProteins())));
		stats.add(new StatDto(NutritionalStatEnum.CARBOHYDRATES.getName(),
				String.valueOf(ingredient.getCarbohydrates())));
		return stats;
	}

}
