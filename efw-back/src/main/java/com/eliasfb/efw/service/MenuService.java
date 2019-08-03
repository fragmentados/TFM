package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.dto.AddDishToMenuDto;
import com.eliasfb.efw.dto.CreateMenuDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.UpdateDishOnMenuDto;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.ShoppingListDto;
import com.eliasfb.efw.model.Menu;

public interface MenuService {
	ResponseDto create(CreateMenuDto menu);

	Menu delete(int id);

	ResponseDto clearMenu(int id);

	ShoppingListDto getShoppingList(int menuId);

	MenuDto findUserMenu(int userId, String startDate);

	List<Menu> findAll();

	Menu findById(int id);

	Menu update(Menu menu);

	ResponseDto addDishToMenu(int menuId, AddDishToMenuDto dto);

	MenuDto updateDishDateOnMenu(int menuId, UpdateDishOnMenuDto dto);

	ResponseDto removeDishFromMenu(int menuId, AddDishToMenuDto dto);
}
