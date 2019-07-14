package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.dto.AddDishToMenuDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.menu.MenuDto;
import com.eliasfb.efw.dto.menu.ShoppingListDto;
import com.eliasfb.efw.model.Menu;

public interface MenuService {
	Menu create(Menu menu);

	Menu delete(int id);

	ShoppingListDto getShoppingList(int menuId);

	MenuDto findUserMenu(int userId, String startDate);

	List<Menu> findAll();

	Menu findById(int id);

	Menu update(Menu menu);

	ResponseDto addDishToMenu(int menuId, AddDishToMenuDto dto);
}
