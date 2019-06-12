package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Ingredient;

public interface DishService {
	Dish create(Dish dish);

	Dish delete(int id);

	List<Dish> findAll();

	Dish findById(int id);

	Dish update(Dish dish);

	Dish addIngredientToDish(int dishId, Ingredient ingredient);
}
