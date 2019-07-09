package com.eliasfb.efw.dto.menu;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class MenuDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String startDate;
	private List<MenuDayDto> days;

	public int getCalories() {
		return this.days.stream().mapToInt(di -> di.getCalories()).sum();
	}

	public int getProteins() {
		return this.days.stream().mapToInt(di -> di.getProteins()).sum();
	}

	public int getFats() {
		return this.days.stream().mapToInt(di -> di.getFats()).sum();
	}

	public int getCarbohydrates() {
		return this.days.stream().mapToInt(di -> di.getCarbohydrates()).sum();
	}
}
