package com.eliasfb.efw.service;

public interface UserConfigurationService {
	<T> T findUserConfigurationByNameOrDefault(Integer userId, String name, Class<T> type, T defaultValue);
}
