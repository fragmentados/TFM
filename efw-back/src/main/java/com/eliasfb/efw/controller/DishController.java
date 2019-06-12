package com.eliasfb.efw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.service.DishService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({ "/dishes" })
public class DishController {
	@Autowired
	private DishService service;

	@PostMapping
	public Dish create(@RequestBody Dish dish) {
		return service.create(dish);
	}

	@GetMapping(path = { "/{id}" })
	public Dish findOne(@PathVariable("id") int id) {
		return service.findById(id);
	}

	@PutMapping(path = { "/{id}" })
	public Dish update(@PathVariable("id") int id, @RequestBody Dish dish) {
		dish.setId(id);
		return service.update(dish);
	}

	@PutMapping(path = { "/{id}/ingredient" })
	public Dish addIngredientToDish(@PathVariable("id") int id, @RequestBody Ingredient ingredient) {
		return service.addIngredientToDish(id, ingredient);
	}

	@DeleteMapping(path = { "/{id}" })
	public Dish delete(@PathVariable("id") int id) {
		return service.delete(id);
	}

	@GetMapping
	public List<Dish> findAll() {
		return service.findAll();
	}
}
