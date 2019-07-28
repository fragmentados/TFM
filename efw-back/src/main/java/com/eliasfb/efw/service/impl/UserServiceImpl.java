package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.dto.LoginDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.UserConfigurationsDto;
import com.eliasfb.efw.dto.UserDto;
import com.eliasfb.efw.dto.mapper.UserConfigurationToDtoMapper;
import com.eliasfb.efw.enums.UserConfigurationEnum;
import com.eliasfb.efw.model.User;
import com.eliasfb.efw.repository.UserRepository;
import com.eliasfb.efw.service.UserConfigurationService;
import com.eliasfb.efw.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private UserConfigurationService confService;

	@Autowired
	private UserConfigurationToDtoMapper userConfMapper;

	@Override
	public User create(User user) {
		return repository.save(user);
	}

	@Override
	public User delete(int id) {
		User user = findById(id);
		if (user != null) {
			repository.delete(user);
		}
		return user;
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public User findById(int id) {
		return repository.findOne(id);
	}

	@Override
	public User update(User user) {
		return repository.save(user);
	}

	@Override
	public ResponseDto updateUserConfigurations(int id, UserConfigurationsDto confsDto) {
		User user = repository.findOne(id);
		user.setConfigurations(userConfMapper.toEntity(confsDto, id));
		repository.save(user);
		return new ResponseDto(ResponseDto.OK_CODE, "User confs updated correctly");
	}

	@Override
	public UserConfigurationsDto findConfigurations(int id) {
		Double maxCaloriesPerWeek = confService.findUserConfigurationByNameOrDefault(id,
				UserConfigurationEnum.MAX_CALORIES_PER_WEEK.getName(), Double.class, 0d);
		Double maxProteinsPerWeek = confService.findUserConfigurationByNameOrDefault(id,
				UserConfigurationEnum.MAX_PROTEINS_PER_WEEK.getName(), Double.class, 0d);
		Double maxFatsPerWeek = confService.findUserConfigurationByNameOrDefault(id,
				UserConfigurationEnum.MAX_FATS_PER_WEEK.getName(), Double.class, 0d);
		Double maxCarbsPerWeek = confService.findUserConfigurationByNameOrDefault(id,
				UserConfigurationEnum.MAX_CARBOHYDRATES_PER_WEEK.getName(), Double.class, 0d);
		return new UserConfigurationsDto(maxCaloriesPerWeek, maxProteinsPerWeek, maxFatsPerWeek, maxCarbsPerWeek);
	}

	@Override
	public ResponseDto login(LoginDto login) {
		ResponseDto response;
		User user = this.repository.findByEmail(login.getEmail());
		if (user == null) {
			response = new ResponseDto(-1, "User not found");
		} else if (user.getPassword().equals(login.getPassword())) {
			response = new UserDto(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail());
		} else {
			response = new ResponseDto(-1, "Wrong password");
		}
		return response;
	}

}
