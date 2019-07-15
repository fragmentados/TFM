package com.eliasfb.efw.dto.menu;

import java.io.Serializable;
import java.util.List;

import com.eliasfb.efw.dto.stat.StatDto;

import lombok.Data;

@Data
public class MenuDto implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer id;
	private String startDate;
	private List<MenuDayDto> days;
	private List<StatDto> stats;

}
