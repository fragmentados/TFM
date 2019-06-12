package com.eliasfb.efw.dto;

import java.io.Serializable;
import java.util.Set;

import lombok.Data;

@Data
public class DishDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private Set<IngredientDto> ingredients;

}
