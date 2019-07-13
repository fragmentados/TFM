package com.eliasfb.efw.dto.mapper;

import java.util.Arrays;
import java.util.HashSet;

import org.mapstruct.Mapper;

import com.eliasfb.efw.dto.CreateIngredientDto;
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
}
