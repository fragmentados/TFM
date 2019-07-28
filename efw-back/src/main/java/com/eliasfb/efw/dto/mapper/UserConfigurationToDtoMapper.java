package com.eliasfb.efw.dto.mapper;

import java.util.ArrayList;
import java.util.List;

import org.mapstruct.Mapper;

import com.eliasfb.efw.dto.UserConfigurationsDto;
import com.eliasfb.efw.enums.UserConfigurationEnum;
import com.eliasfb.efw.model.User;
import com.eliasfb.efw.model.UserConfiguration;
import com.eliasfb.efw.model.UserConfigurationId;

@Mapper(componentModel = "spring")
public abstract class UserConfigurationToDtoMapper {

	public List<UserConfiguration> toEntity(UserConfigurationsDto dto, Integer userId) {
		List<UserConfiguration> confs = new ArrayList<>();
		confs.add(createUserConfiguration(userId, UserConfigurationEnum.MAX_CALORIES_PER_WEEK.getName(),
				dto.getMaxCaloriesPerWeek()));
		confs.add(createUserConfiguration(userId, UserConfigurationEnum.MAX_FATS_PER_WEEK.getName(),
				dto.getMaxFatsPerWeek()));
		confs.add(createUserConfiguration(userId, UserConfigurationEnum.MAX_PROTEINS_PER_WEEK.getName(),
				dto.getMaxProteinsPerWeek()));
		confs.add(createUserConfiguration(userId, UserConfigurationEnum.MAX_CARBOHYDRATES_PER_WEEK.getName(),
				dto.getMaxCarbohydratesPerWeek()));
		return confs;
	}

	private UserConfiguration createUserConfiguration(Integer userId, String confName, Double value) {
		UserConfiguration conf = new UserConfiguration();
		UserConfigurationId id = new UserConfigurationId(confName, new User(userId));
		conf.setId(id);
		conf.setValue(String.valueOf(value));
		return conf;
	}
}
