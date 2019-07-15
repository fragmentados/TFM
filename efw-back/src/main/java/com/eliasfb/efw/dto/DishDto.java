package com.eliasfb.efw.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.eliasfb.efw.dto.stat.StatDto;

import lombok.Data;

@Data
public class DishDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private List<IngredientDto> ingredients;
	private List<StatDto> stats = new ArrayList<>();
}
