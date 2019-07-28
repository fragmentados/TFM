package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.dto.CreateDishDto;
import com.eliasfb.efw.dto.DishDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.mapper.DishToDtoMapper;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.IngDisRel;
import com.eliasfb.efw.model.IngDisRelId;
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
	public DishDto create(CreateDishDto createDish) {
		return mapper.dishToDishDto(repository.save(mapper.toEntity(createDish)));
	}

	@Override
	public ResponseDto delete(int id) {
		Dish dish = findById(id);
		if (dish != null) {
			repository.delete(dish);
		}
		return new ResponseDto(ResponseDto.OK_CODE, "Dish with name = '" + dish.getName() + "' deleted correctly.");
	}

	@Override
	public List<DishDto> findUserDishes(Integer userId) {
		List<Dish> dishes;
		if (userId == null) {
			dishes = repository.findAll();
		} else {
			dishes = repository.findUserDishes(userId);
		}
		return mapper.dishListToDishDtoList(dishes);
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
		IngDisRelId id = new IngDisRelId(dish, ingredient);
		IngDisRel ingDisRel = new IngDisRel(id, 0);
		if (!dish.getIngredients().contains(ingDisRel)) {
			dish.getIngredients().add(ingDisRel);
			repository.save(dish);
		}

		return dish;
	}

}
