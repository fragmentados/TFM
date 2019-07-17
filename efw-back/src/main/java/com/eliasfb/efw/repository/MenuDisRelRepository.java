package com.eliasfb.efw.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.eliasfb.efw.model.MenuDisRel;

public interface MenuDisRelRepository extends Repository<MenuDisRel, Integer> {

	@Modifying
	@Query("delete from MenuDisRel mdr where mdr.id.menu.id = :menuId")
	void deleteByMenuId(@Param("menuId") Integer menuId);
}