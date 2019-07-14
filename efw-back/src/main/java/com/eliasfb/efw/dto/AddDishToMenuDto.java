package com.eliasfb.efw.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class AddDishToMenuDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer dishId;
	private String date;
}
