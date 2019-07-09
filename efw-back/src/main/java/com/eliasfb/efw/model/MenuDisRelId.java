package com.eliasfb.efw.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;

@Embeddable
@Data
@AllArgsConstructor
public class MenuDisRelId implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	private Menu menu;

	@ManyToOne
	private Dish dish;

	public MenuDisRelId() {

	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		MenuDisRelId that = (MenuDisRelId) o;
		return Objects.equals(menu, that.menu) && Objects.equals(dish, that.dish);
	}

	@Override
	public int hashCode() {
		return Objects.hash(menu, dish);
	}
}
