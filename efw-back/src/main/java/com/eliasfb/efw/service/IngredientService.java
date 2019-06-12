package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.model.Ingredient;

public interface IngredientService {
	Ingredient create(Ingredient ingredient);

	Ingredient delete(int id);

	List<Ingredient> findAll();

	Ingredient findById(int id);

	Ingredient update(Ingredient ingredient);
}
