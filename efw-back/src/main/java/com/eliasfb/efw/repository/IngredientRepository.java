package com.eliasfb.efw.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.eliasfb.efw.model.Ingredient;

public interface IngredientRepository extends Repository<Ingredient, Integer> {

	void delete(Ingredient ingredient);

	List<Ingredient> findAll();

	@Query("SELECT i FROM Ingredient i JOIN i.users u WHERE u.id = :userId")
	List<Ingredient> findByUserId(@Param("userId") int userId);

	Ingredient findOne(int id);

	Ingredient save(Ingredient ingredient);
}
