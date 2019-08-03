package com.eliasfb.efw.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.eliasfb.efw.model.FoodCategory;

public interface FoodCategoryRepository extends Repository<FoodCategory, Integer> {

	List<FoodCategory> findAll();
}
