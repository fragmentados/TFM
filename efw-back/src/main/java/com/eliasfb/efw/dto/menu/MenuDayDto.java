package com.eliasfb.efw.dto.menu;

import java.io.Serializable;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MenuDayDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String date;
	private List<MenuDishDto> meals;
}
