-- DROP EXISTING TABLES
drop table user;
drop table ingredient;
drop table dish;


-- CREATE TABLES
create table user (id integer not null auto_increment, email varchar(255), first_name varchar(255), last_name varchar(255), primary key (id));
create table dish (id integer not null auto_increment, name varchar(255), primary key(id));
create table ingredient (id integer not null auto_increment, name varchar(255), calories integer, proteins integer, fats integer, dish_id integer, primary key(id));
ALTER TABLE ingredient ADD CONSTRAINT fk_ingredient_dish_id FOREIGN KEY (dish_id) REFERENCES dish(id);