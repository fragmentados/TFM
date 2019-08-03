package com.eliasfb.efw.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.model.UserConfiguration;
import com.eliasfb.efw.repository.UserConfigurationRepository;
import com.eliasfb.efw.service.UserConfigurationService;

@Service
public class UserConfigurationServiceImpl implements UserConfigurationService {

	@Autowired
	UserConfigurationRepository repository;

	@Override
	public <T> T findUserConfigurationByNameOrDefault(Integer userId, String name, Class<T> type, T defaultValue) {
		UserConfiguration conf = repository.findByNameAndUser(name, userId);
		return conf != null ? this.parseClass(conf.getValue(), type) : defaultValue;
	}

	@SuppressWarnings("unchecked")
	public <T> T parseClass(String confValue, Class<T> type) {
		if (type.equals(Integer.class)) {
			return (T) Integer.valueOf(confValue);
		} else if (type.equals(Double.class)) {
			return (T) Double.valueOf(confValue);
		}
		return null;
	}

}
