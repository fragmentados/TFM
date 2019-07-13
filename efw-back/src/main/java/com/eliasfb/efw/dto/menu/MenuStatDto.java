package com.eliasfb.efw.dto.menu;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MenuStatDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private String value;
}
