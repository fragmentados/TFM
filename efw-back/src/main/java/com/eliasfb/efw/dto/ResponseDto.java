package com.eliasfb.efw.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer errorCode;
	private String message;
}
