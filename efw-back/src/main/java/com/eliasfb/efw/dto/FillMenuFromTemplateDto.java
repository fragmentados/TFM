package com.eliasfb.efw.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FillMenuFromTemplateDto implements Serializable {

	private Integer userId;
	private Integer templateId;
}
