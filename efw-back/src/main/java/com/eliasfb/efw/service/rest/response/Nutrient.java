package com.eliasfb.efw.service.rest.response;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Nutrient implements Serializable {

	private static final long serialVersionUID = 1L;

	private String label;
	private Float quantity;
	private String unit;
}
