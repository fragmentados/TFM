package com.eliasfb.efw.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseDto implements Serializable {

	private static final long serialVersionUID = 1L;

	public static final Integer OK_CODE = 0;

	private Integer errorCode;
	private String message;
}
