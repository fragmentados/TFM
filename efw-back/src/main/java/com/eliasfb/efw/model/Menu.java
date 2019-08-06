package com.eliasfb.efw.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Table(name = "menu")
@Data
@ToString(exclude = "dishes")
@EqualsAndHashCode(exclude = "dishes")
public class Menu {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

	private String startDate;

	@OneToMany(mappedBy = "id.menu", cascade = { CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE })
	private List<MenuDisRel> dishes;

	@JsonIgnore
	public Double getCalories() {
		return this.dishes.stream().mapToDouble(di -> di.getId().getDish().getCalories()).sum();
	}

	@JsonIgnore
	public Double getProteins() {
		return this.dishes.stream().mapToDouble(di -> di.getId().getDish().getProteins()).sum();
	}

	@JsonIgnore
	public Double getFats() {
		return this.dishes.stream().mapToDouble(di -> di.getId().getDish().getFats()).sum();
	}

	@JsonIgnore
	public Double getCarbohydrates() {
		return this.dishes.stream().mapToDouble(di -> di.getId().getDish().getCarbohydrates()).sum();
	}

	public Map<String, UnitAndQuantity> getShoppingListItems() {
		List<IngredientWithQuantity> ingredientList = this.dishes.stream()
				.flatMap(di -> di.getId().getDish().getIngredients().stream())
				.map(igdi -> new IngredientWithQuantity(igdi.getId().getIngredient().getName(), igdi.getQuantity()))
				.collect(Collectors.toList());
		Map<String, Long> ingredientCounts = ingredientList.stream()
				.collect(Collectors.groupingBy(IngredientWithQuantity::getName, Collectors.counting()));
		Map<String, Double> ingredientQuantities = ingredientList.stream().collect(Collectors.groupingBy(
				IngredientWithQuantity::getName, Collectors.summingDouble(IngredientWithQuantity::getQuantity)));
		Map<String, UnitAndQuantity> returnMap = new HashMap<>();
		ingredientCounts.entrySet().stream().forEach(es -> returnMap.put(es.getKey(),
				new UnitAndQuantity(es.getValue(), ingredientQuantities.get(es.getKey()))));
		return returnMap;
	}

	public boolean containsDish(Dish d) {
		return this.dishes.stream().filter(dishRel -> dishRel.getId().getDish().equals(d)).findFirst().isPresent();
	}

	@Data
	@AllArgsConstructor
	class IngredientWithQuantity {
		private String name;
		private Double quantity;
	}
}
