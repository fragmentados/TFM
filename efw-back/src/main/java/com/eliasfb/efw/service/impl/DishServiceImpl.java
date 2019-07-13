package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.dto.CreateDishDto;
import com.eliasfb.efw.dto.mapper.DishToDtoMapper;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.repository.DishRepository;
import com.eliasfb.efw.service.DishService;

@Service
public class DishServiceImpl implements DishService {

	@Autowired
	private DishRepository repository;
	@Autowired
	private DishToDtoMapper mapper;

	@Override
	public Dish create(CreateDishDto createDish) {
		return repository.save(mapper.toEntity(createDish));
	}

	@Override
	public Dish delete(int id) {
		Dish dish = findById(id);
		if (dish != null) {
			repository.delete(dish);
		}
		return dish;
	}

	@Override
	public List<Dish> findUserDishes(Integer userId) {
		List<Dish> dishes;
		if (userId == null) {
			dishes = repository.findAll();
		} else {
			dishes = repository.findUserDishes(userId);
		}
		return dishes;
	}

	@Override
	public List<Dish> findAll() {
		return repository.findAll();
	}

	@Override
	public Dish findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public Dish update(Dish dish) {
		return repository.save(dish);
	}

	@Override
	public Dish addIngredientToDish(int dishId, Ingredient ingredient) {
		Dish dish = repository.findOne(dishId);
		if (!dish.getIngredients().contains(ingredient)) {
			dish.getIngredients().add(ingredient);
			repository.save(dish);
		}
		return dish;
	}

}
