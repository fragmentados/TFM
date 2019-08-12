package com.eliasfb.efw.controller;

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

import com.eliasfb.efw.dto.AddDishToMenuDto;
import com.eliasfb.efw.dto.CreateMenuDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.UpdateDishOnMenuDto;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.ShoppingListDto;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.service.MenuService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({ "/menus" })
public class MenuController {
	@Autowired
	private MenuService service;

	@PostMapping
	public ResponseDto create(@RequestBody CreateMenuDto dto) {
		return service.create(dto);
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

	@GetMapping(path = { "/{id}/shoppingList" })
	public ShoppingListDto getShoppingList(@PathVariable("id") int menuId) {
		return service.getShoppingList(menuId);
	}

	@GetMapping
	public MenuDto findUserMenu(@RequestParam("userId") int userId, @RequestParam("startDate") String startDate) {
		return service.findUserMenu(userId, startDate);
	}

	@PostMapping(path = { "/dish/firstValidSpot" })
	public ResponseDto addDishToFirstValidSpot(@RequestParam("userId") Integer userId,
			@RequestBody AddDishToMenuDto dto) {
		return service.addDishToFirstValidSpotOnMenu(userId, dto);
	}

	@PostMapping(path = { "/{id}/dish" })
	public ResponseDto addDishToMenu(@PathVariable("id") int id, @RequestBody AddDishToMenuDto dto) {
		return service.addDishToMenu(id, dto);
	}

	@PostMapping(path = { "/{id}/random" })
	public MenuDto randomGenerate(@PathVariable("id") int menuId, @RequestParam("userId") Integer userId) {
		return service.randomGenerateMenu(menuId, userId);
	}

	@PostMapping(path = { "/{id}/valid" })
	public MenuDto generateValidMenu(@PathVariable("id") int menuId, @RequestParam("userId") Integer userId) {
		return service.generateValidMenu(menuId, userId);
	}

	@PutMapping(path = { "/{id}/dish" })
	public MenuDto updateDishDateOnMenu(@PathVariable("id") int id, @RequestBody UpdateDishOnMenuDto dto) {
		return service.updateDishDateOnMenu(id, dto);
	}

	@DeleteMapping(path = { "/{id}/dish" })
	public ResponseDto removeDishFromMenu(@PathVariable("id") int id, @RequestBody AddDishToMenuDto dto) {
		return service.removeDishFromMenu(id, dto);
	}

	@DeleteMapping(path = { "/{id}/clearMenu" })
	public ResponseDto clearMenu(@PathVariable("id") int id) {
		return service.clearMenu(id);
	}

	@DeleteMapping(path = { "/{id}" })
	public Menu delete(@PathVariable("id") int id) {
		return service.delete(id);
	}

}
