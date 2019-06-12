package com.eliasfb.efw.service;

import java.util.List;

import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;

public interface MenuService {
	Menu create(Menu menu);

	Menu delete(int id);

	List<Menu> findAll();

	Menu findById(int id);

	Menu update(Menu menu);

	Menu addDishToMenu(int menuId, Dish dish);
}
