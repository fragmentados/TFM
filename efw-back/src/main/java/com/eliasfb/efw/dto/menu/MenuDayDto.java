package com.eliasfb.efw.dto.menu;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MenuDayDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String date;
	private List<MenuDishDto> meals;

	@JsonIgnore
	public int getCalories() {
		return this.meals.stream().mapToInt(di -> di.getCalories()).sum();
	}

	@JsonIgnore
	public int getProteins() {
		return this.meals.stream().mapToInt(di -> di.getProteins()).sum();
	}

	@JsonIgnore
	public int getFats() {
		return this.meals.stream().mapToInt(di -> di.getFats()).sum();
	}

	@JsonIgnore
	public int getCarbohydrates() {
		return this.meals.stream().mapToInt(di -> di.getCarbohydrates()).sum();
	}
}
