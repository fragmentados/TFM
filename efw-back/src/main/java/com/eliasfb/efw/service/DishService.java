package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.dto.CreateDishDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Ingredient;

public interface DishService {
	Dish create(CreateDishDto dish);

	ResponseDto delete(int id);

	List<Dish> findAll();

	List<Dish> findUserDishes(Integer userId);

	Dish findById(int id);

	Dish update(Dish dish);

	Dish addIngredientToDish(int dishId, Ingredient ingredient);
}
