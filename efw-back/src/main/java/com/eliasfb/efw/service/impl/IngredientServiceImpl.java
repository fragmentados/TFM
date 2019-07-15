package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.dto.CreateIngredientDto;
import com.eliasfb.efw.dto.IngredientDto;
import com.eliasfb.efw.dto.mapper.IngredientToIngredientDtoMapper;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.repository.IngredientRepository;
import com.eliasfb.efw.service.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	private IngredientRepository repository;

	@Autowired
	private IngredientToIngredientDtoMapper mapper;

	@Override
	public Ingredient create(CreateIngredientDto createIngredient) {
		return repository.save(mapper.toEntity(createIngredient));
	}

	@Override
	public Ingredient delete(int id) {
		Ingredient ingredient = findById(id);
		if (ingredient != null) {
			repository.delete(ingredient);
		}
		return ingredient;
	}

	@Override
	public List<Ingredient> findAll() {
		return repository.findAll();
	}

	@Override
	public List<IngredientDto> findUserIngredients(Integer userId) {
		List<Ingredient> ingredients;
		if (userId != null) {
			ingredients = repository.findByUserId(userId);
		} else {
			ingredients = repository.findAll();
		}
		return mapper.ingredientToDtoList(ingredients);
	}

	@Override
	public Ingredient findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public Ingredient update(Ingredient ingredient) {
		return repository.save(ingredient);
	}
}
