package com.eliasfb.efw.service;

public interface UserConfigurationService {
	<T> T findUserConfigurationByName(Integer userId, String name, Class<T> type);
}
