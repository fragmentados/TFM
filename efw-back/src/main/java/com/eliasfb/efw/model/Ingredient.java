package com.eliasfb.efw.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Table(name = "ingredient")
@Data
@ToString(exclude = "dishes")
@EqualsAndHashCode(exclude = "dishes")
public class Ingredient {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private int calories;
	@Column
	private int proteins;
	@Column
	private int fats;

	@ManyToMany(mappedBy = "ingredients", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("ingredients")
	@JsonIgnore
	private Set<Dish> dishes;
}
