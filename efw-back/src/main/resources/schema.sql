-- DROP EXISTING TABLES
drop table if exists menudisrel;
drop table if exists ingdisrel;
drop table if exists ingredient;
drop table if exists dish;
drop table if exists menu;
drop table if exists user;

-- CREATE TABLES
create table if not exists user (id integer not null auto_increment, email varchar(255), first_name varchar(255), last_name varchar(255), primary key (id));
create table if not exists dish (id integer not null auto_increment, name varchar(255), primary key(id));
create table if not exists menu (id integer not null auto_increment, user_id integer, start_date DATE, foreign key fk_user(user_id) references user(id), primary key(id));
create table if not exists ingredient (id integer not null auto_increment, name varchar(255), calories integer, proteins integer, fats integer, carbohydrates integer, primary key(id));
create table if not exists ingdisrel(ingredient_id integer not null, dish_id integer not null);
--create table if not exists meal (id integer not null auto_increment, name varchar(255), primary key(id));
create table if not exists menudisrel(
	menu_id integer not null, 
	dish_id integer not null, 
	dish_date DATE, 
	foreign key fk_menu(menu_id) references menu(id), 
	foreign key fk_dish(dish_id) references dish(id), 
	primary key(menu_id, dish_id)
);