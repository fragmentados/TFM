package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.model.Dish;
import com.eliasfb.efw.model.Menu;
import com.eliasfb.efw.repository.MenuRepository;
import com.eliasfb.efw.service.MenuService;

@Service
public class MenuServiceImpl implements MenuService {
	@Autowired
	private MenuRepository repository;

	@Override
	public Menu create(Menu menu) {
		return repository.save(menu);
	}

	@Override
	public Menu delete(int id) {
		Menu menu = findById(id);
		if (menu != null) {
			repository.delete(menu);
		}
		return menu;
	}

	@Override
	public List<Menu> findAll() {
		return repository.findAll();
	}

	@Override
	public Menu findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public Menu update(Menu menu) {
		return repository.save(menu);
	}

	@Override
	public Menu addDishToMenu(int menuId, Dish dish) {
		Menu menu = repository.findOne(menuId);
		if (!menu.getDishes().contains(dish)) {
			menu.getDishes().add(dish);
			repository.save(menu);
		}
		return menu;
	}
}
