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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.service.MenuService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({ "/users/{userId}/menus" })
public class MenuController {
	@Autowired
	private MenuService service;

	@PostMapping
	public Menu create(@RequestBody Menu menu) {
		return service.create(menu);
	}

	@GetMapping(path = { "/{id}" })
	public Menu findOne(@PathVariable("id") int id) {
		return service.findById(id);
	}

	@PutMapping(path = { "/{id}" })
	public Menu update(@PathVariable("id") int id, @RequestBody Menu menu) {
		menu.setId(id);
		return service.update(menu);
	}

	@PutMapping(path = { "/{id}/dish" })
	public Menu addIngredientToMenu(@PathVariable("id") int id, @RequestBody Dish dish) {
		return service.addDishToMenu(id, dish);
	}

	@DeleteMapping(path = { "/{id}" })
	public Menu delete(@PathVariable("id") int id) {
		return service.delete(id);
	}

	@GetMapping
	public List<MenuDto> findUserMenu(@PathVariable("userId") int userId, @RequestParam("startDate") String startDate) {
		return service.findUserMenu(userId, startDate);
	}
}
