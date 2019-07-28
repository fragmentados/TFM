package com.eliasfb.efw.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class CreateOrUpdateIngredientDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer userId;
	private String name;
	private Integer calories;
	private Integer proteins;
	private Integer fats;
	private Integer carbohydrates;

}
