package com.eliasfb.efw.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.eliasfb.efw.model.Dish;

public interface DishRepository extends Repository<Dish, Integer> {

	void delete(Dish dish);

	List<Dish> findAll();

	Dish findOne(int id);

	Dish save(Dish dish);
}
