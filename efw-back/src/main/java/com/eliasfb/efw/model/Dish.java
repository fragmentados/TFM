package com.eliasfb.efw.model;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Table(name = "dish")
@Data
@ToString(exclude = { "ingredients" })
@EqualsAndHashCode(exclude = { "ingredients" })
public class Dish {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;

	public int getCalories() {
		return this.ingredients.stream().mapToInt(ig -> ig.getCalories()).sum();
	}

	public int getProteins() {
		return this.ingredients.stream().mapToInt(ig -> ig.getProteins()).sum();
	}

	public int getFats() {
		return this.ingredients.stream().mapToInt(ig -> ig.getFats()).sum();
	}

	public int getCarbohydrates() {
		return this.ingredients.stream().mapToInt(ig -> ig.getCarbohydrates()).sum();
	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "ingdisrel", joinColumns = @JoinColumn(name = "dish_id"), inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
	@JsonIgnoreProperties("dishes")
	private Set<Ingredient> ingredients;

	public Dish(String name, Ingredient... ingredients) {
		this.name = name;
		this.ingredients = Stream.of(ingredients).collect(Collectors.toSet());
		this.ingredients.forEach(x -> x.getDishes().add(this));
	}
}
