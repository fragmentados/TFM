package com.eliasfb.efw.service.rest.impl;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.eliasfb.efw.service.rest.IngredientRestService;
import com.eliasfb.efw.service.rest.response.NutritionData;

@Service
public class IngredientRestServiceImpl implements IngredientRestService {

	private static final String NUTRITION_WS_HOST = "edamam-edamam-nutrition-analysis.p.rapidapi.com";
	private static final String NUTRITION_WS_API_KEY = "67c5e84ecdmshb2ae48ef88fa0e9p16ab16jsn50bbba53a9b8";

	@Override
	public NutritionData callNutritionService(String ingredientName) {
		// We prepare the request
		String request = "https://" + NUTRITION_WS_HOST + "/api/nutrition-data";
		String queryParam = "?ingr=" + "1 small " + ingredientName;
		// Headers
		HttpHeaders headers = getNutritionDataHeaders();
		HttpEntity<String> entity = new HttpEntity<>("body", headers);
		// We execute the request
		RestTemplate template = new RestTemplate();
		ResponseEntity<NutritionData> response = template.exchange(request + queryParam, HttpMethod.GET, entity,
				NutritionData.class);
		// We return the result
		return response != null ? response.getBody() : null;
	}

	private HttpHeaders getNutritionDataHeaders() {
		HttpHeaders headers = new HttpHeaders();
		headers.set("RapidAPIProject", "default-application_3850247");
		headers.set("X-RapidAPI-Host", NUTRITION_WS_HOST);
		headers.set("X-RapidAPI-Key", NUTRITION_WS_API_KEY);
		return headers;
	}

}
