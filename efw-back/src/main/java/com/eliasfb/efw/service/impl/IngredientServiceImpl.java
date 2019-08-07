package com.eliasfb.efw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliasfb.efw.dto.CreateOrUpdateIngredientDto;
import com.eliasfb.efw.dto.IngredientDto;
import com.eliasfb.efw.dto.NutritionEstimateDto;
import com.eliasfb.efw.dto.ResponseDto;
import com.eliasfb.efw.dto.mapper.IngredientToIngredientDtoMapper;
import com.eliasfb.efw.model.FoodCategory;
import com.eliasfb.efw.model.Ingredient;
import com.eliasfb.efw.repository.FoodCategoryRepository;
import com.eliasfb.efw.repository.IngredientRepository;
import com.eliasfb.efw.service.IngredientService;
import com.eliasfb.efw.service.rest.IngredientRestService;
import com.eliasfb.efw.service.rest.response.NutritionData;

@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	private IngredientRestService restService;

	@Autowired
	private FoodCategoryRepository categoryRepository;

	@Autowired
	private IngredientRepository repository;

	@Autowired
	private IngredientToIngredientDtoMapper mapper;

	@Override
	public Ingredient create(CreateOrUpdateIngredientDto createIngredient) {
		return repository.save(mapper.createToEntity(createIngredient));
	}

	@Override
	public ResponseDto delete(int id) {
		Ingredient ingredient = this.repository.findOne(id);
		if (ingredient != null) {
			repository.delete(ingredient);
		}
		return new ResponseDto(ResponseDto.OK_CODE, "The ingredient has been successfully removed");
	}

	@Override
	public List<Ingredient> findAll() {
		return repository.findAll();
	}

	@Override
	public List<IngredientDto> findUserIngredients(Integer userId) {
		List<Ingredient> ingredients;
		if (userId != null) {
			ingredients = repository.findByUserId(userId);
		} else {
			ingredients = repository.findAll();
		}
		return mapper.ingredientToDtoList(ingredients);
	}

	@Override
	public IngredientDto findById(int id) {
		return this.mapper.toDto(repository.findOne(id));
	}

	@Override
	public ResponseDto update(Integer ingredientId, CreateOrUpdateIngredientDto dto) {
		ResponseDto response = new ResponseDto(ResponseDto.OK_CODE, "Ingredient updated successfully");
		Ingredient ingredient = this.repository.findOne(ingredientId);
		if (ingredient != null) {
			// All fields should be updated except users
			Ingredient updateIngredient = mapper.createToEntity(dto);
			updateIngredient.setUsers(ingredient.getUsers());
			updateIngredient.setId(ingredientId);
			repository.save(updateIngredient);
		} else {
			response = new ResponseDto(ResponseDto.ERROR_CODE, "Ingredient not found");
		}
		return response;
	}

	@Override
	public NutritionEstimateDto getNutritionEstimate(String ingrName) {
		// We call the external nutrition WS
		NutritionData nutritionData = restService.callNutritionService(ingrName);
		// We map it to the right dto
		return mapper.nutritionResponseToDto(nutritionData);
	}

	@Override
	public List<FoodCategory> getFoodCategories() {
		return this.categoryRepository.findAll();
	}
}
