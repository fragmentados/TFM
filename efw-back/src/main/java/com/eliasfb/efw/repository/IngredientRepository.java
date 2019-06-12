package com.eliasfb.efw.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.eliasfb.efw.model.Ingredient;

public interface IngredientRepository extends Repository<Ingredient, Integer> {
	
	void delete(Ingredient ingredient);

	List<Ingredient> findAll();

	Ingredient findOne(int id);

	Ingredient save(Ingredient ingredient);
}
