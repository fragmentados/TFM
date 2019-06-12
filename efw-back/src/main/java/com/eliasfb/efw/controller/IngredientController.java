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

import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.service.IngredientService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({ "/ingredients" })
public class IngredientController {
	@Autowired
	private IngredientService service;

	@PostMapping
	public Ingredient create(@RequestBody Ingredient ingredient) {
		return service.create(ingredient);
	}

	@GetMapping(path = { "/{id}" })
	public Ingredient findOne(@PathVariable("id") int id) {
		return service.findById(id);
	}

	@PutMapping(path = { "/{id}" })
	public Ingredient update(@PathVariable("id") int id, @RequestBody Ingredient ingredient) {
		ingredient.setId(id);
		return service.update(ingredient);
	}

	@DeleteMapping(path = { "/{id}" })
	public Ingredient delete(@PathVariable("id") int id) {
		return service.delete(id);
	}

	@GetMapping
	public List<Ingredient> findAll() {
		return service.findAll();
	}
}
