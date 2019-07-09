package com.eliasfb.efw.dto.menu;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class MenuDishDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	// private String date;
	@JsonIgnore
	private int calories;
	@JsonIgnore
	private int proteins;
	@JsonIgnore
	private int fats;
	@JsonIgnore
	private int carbohydrates;

}
