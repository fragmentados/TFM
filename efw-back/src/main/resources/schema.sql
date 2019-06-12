-- DROP EXISTING TABLES
drop table if exists user;
drop table if exists menudisrel;
drop table if exists ingdisrel;
drop table if exists ingredient;
drop table if exists dish;
drop table if exists menu;


-- CREATE TABLES
create table user (id integer not null auto_increment, email varchar(255), first_name varchar(255), last_name varchar(255), primary key (id));
create table dish (id integer not null auto_increment, name varchar(255), primary key(id));
create table menu (id integer not null auto_increment, primary key(id));
create table ingredient (id integer not null auto_increment, name varchar(255), calories integer, proteins integer, fats integer, primary key(id));
create table ingdisrel(ingredient_id integer not null, dish_id integer not null);
create table menudisrel(menu_id integer not null, dish_id integer not null);