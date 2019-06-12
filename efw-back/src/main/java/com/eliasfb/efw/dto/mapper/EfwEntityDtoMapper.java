package com.eliasfb.efw.dto.mapper;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EfwEntityDtoMapper {

	/*
	 * @Mapping(source = "ingredients", target = "ingredients", ignore = true)
	 * DishDto dishToDishDto(Dish dish);
	 * 
	 * default DishDto toDto(Dish dish) { DishDto dishDto = dishToDishDto(dish);
	 * Set<Ingredient> ingredients = dish.getIngredients(); ingredients.forEach(i ->
	 * { IngredientDto ingDto = new IngredientDto(); ingDto.setName(i.getName());
	 * ingDto.setCalories(i.getCalories()); ingDto.setFats(i.getFats());
	 * ingDto.setProteins(i.getProteins()); }); return dishDto; }
	 * 
	 * default List<DishDto> dishesToDishesDto(List<Dish> dishes) { return
	 * dishes.stream().map(d -> toDto(d)).collect(Collectors.toList()); }
	 */

}
