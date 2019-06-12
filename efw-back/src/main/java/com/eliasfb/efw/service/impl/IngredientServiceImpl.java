package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.repository.IngredientRepository;
import com.eliasfb.efw.service.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	private IngredientRepository repository;

	@Override
	public Ingredient create(Ingredient ingredient) {
		return repository.save(ingredient);
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
	public Ingredient findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public Ingredient update(Ingredient ingredient) {
		return repository.save(ingredient);
	}
}
