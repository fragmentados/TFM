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
@Table(name = "menu")
@Data
@ToString(exclude = "dishes")
@EqualsAndHashCode(exclude = "dishes")
public class Menu {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "menudisrel", joinColumns = @JoinColumn(name = "dish_id"), inverseJoinColumns = @JoinColumn(name = "menu_id"))
	@JsonIgnoreProperties("menus")
	private Set<Dish> dishes;

	public Menu() {

	}

	public Menu(Dish... dishes) {
		this.dishes = Stream.of(dishes).collect(Collectors.toSet());
		this.dishes.forEach(x -> x.getMenus().add(this));
	}
}
