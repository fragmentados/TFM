package com.eliasfb.efw.model;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
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
	public int getCalories() {
		return this.dishes.stream().mapToInt(di -> di.getId().getDish().getCalories()).sum();
	}

	@JsonIgnore
	public int getProteins() {
		return this.dishes.stream().mapToInt(di -> di.getId().getDish().getProteins()).sum();
	}

	@JsonIgnore
	public int getFats() {
		return this.dishes.stream().mapToInt(di -> di.getId().getDish().getFats()).sum();
	}

	@JsonIgnore
	public int getCarbohydrates() {
		return this.dishes.stream().mapToInt(di -> di.getId().getDish().getCarbohydrates()).sum();
	}

	@JsonIgnore
	public Map<String, Long> getShoppingListItems() {
		List<Ingredient> ingredientList = this.dishes.stream()
				.flatMap(di -> di.getId().getDish().getIngredients().stream()).collect(Collectors.toList());
		List<String> ingredientNames = ingredientList.stream().map(i -> i.getName()).collect(Collectors.toList());
		return ingredientNames.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
	}
}
