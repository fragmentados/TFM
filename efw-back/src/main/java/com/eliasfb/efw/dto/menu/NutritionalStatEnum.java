package com.eliasfb.efw.dto.menu;

public enum NutritionalStatEnum {
	CALORIES("Calories"), PROTEINS("Proteins"), FATS("Fats"), CARBOHYDRATES("Carbohydrates");

	private String name;

	private NutritionalStatEnum(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
