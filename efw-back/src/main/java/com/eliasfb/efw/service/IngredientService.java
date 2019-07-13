package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.dto.CreateIngredientDto;
import com.eliasfb.efw.model.Ingredient;

public interface IngredientService {

	Ingredient create(CreateIngredientDto createIngredient);

	Ingredient delete(int id);

	List<Ingredient> findAll();

	List<Ingredient> findUserIngredients(Integer userId);

	Ingredient findById(int id);

	Ingredient update(Ingredient ingredient);
}
