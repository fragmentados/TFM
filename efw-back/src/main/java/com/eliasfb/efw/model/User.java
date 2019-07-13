package com.eliasfb.efw.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Table(name = "user")
@Data
@ToString(exclude = { "menus", "ingredients" })
@EqualsAndHashCode(exclude = { "menus", "ingredients" })
public class User {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String email;
	@OneToMany(mappedBy = "user")
	@JsonIgnore
	private List<Menu> menus;
	@ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Ingredient> ingredients;

}
