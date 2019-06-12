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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Table(name = "dish")
@Data
@ToString(exclude = { "ingredients", "menus" })
@EqualsAndHashCode(exclude = { "ingredients", "menus" })
public class Dish {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "ingdisrel", joinColumns = @JoinColumn(name = "ingredient_id"), inverseJoinColumns = @JoinColumn(name = "dish_id"))
	@JsonIgnoreProperties("dishes")
	private Set<Ingredient> ingredients;

	@ManyToMany(mappedBy = "dishes", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("dishes")
	@JsonIgnore
	private Set<Menu> menus;

	public Dish() {

	}

	public Dish(String name, Ingredient... ingredients) {
		this.name = name;
		this.ingredients = Stream.of(ingredients).collect(Collectors.toSet());
		this.ingredients.forEach(x -> x.getDishes().add(this));
	}
}
