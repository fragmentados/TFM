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
	public ResponseDto create(CreateDishDto createDish) {
		Dish dishToCreate = this.mapper.toEntity(createDish);
		this.repository.save(dishToCreate);
		return new ResponseDto(ResponseDto.OK_CODE, "Dish created successfully");
	}

	@Override
	public ResponseDto delete(int id) {
		Dish dish = this.repository.findOne(id);
		if (dish != null) {
			this.repository.delete(dish);
		}
		return new ResponseDto(ResponseDto.OK_CODE, "Dish with name = '" + dish.getName() + "' deleted correctly.");
	}

	@Override
	public List<DishDto> findUserDishes(Integer userId) {
		List<Dish> dishes;
		if (userId == null) {
			dishes = this.repository.findAll();
		} else {
			dishes = this.repository.findUserDishes(userId);
		}
		return this.mapper.dishListToDishDtoList(dishes);
	}

	@Override
	public List<Dish> findAll() {
		return this.repository.findAll();
	}

	@Override
	public DishDto findById(int id) {
		return this.mapper.toDto(this.repository.findOne(id));
	}

	@Override
	public ResponseDto update(Integer dishId, CreateDishDto dto) {
		ResponseDto response = new ResponseDto(ResponseDto.OK_CODE, "Dish updated successfully");
		Dish dish = this.repository.findOne(dishId);
		if (dish != null) {
			// All fields should be updated except users
			Dish updateDish = this.mapper.toEntity(dto);
			updateDish.setUsers(dish.getUsers());
			updateDish.setId(dishId);
			this.repository.save(updateDish);
		} else {
			response = new ResponseDto(ResponseDto.ERROR_CODE, "Dish not found");
		}
		return response;
	}

	@Override
	public Dish addIngredientToDish(int dishId, Ingredient ingredient) {
		Dish dish = this.repository.findOne(dishId);
		IngDisRelId id = new IngDisRelId(dish, ingredient);
		IngDisRel ingDisRel = new IngDisRel(id, 0);
		if (!dish.getIngredients().contains(ingDisRel)) {
			dish.getIngredients().add(ingDisRel);
			this.repository.save(dish);
		}

		return dish;
	}

}
