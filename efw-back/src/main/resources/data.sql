INSERT INTO USER VALUES(1, 'test@mail.com', 'Elías', 'Ferreiro');
INSERT INTO USER VALUES(2, 'test@mail.com', 'Esther', 'Lopez');

INSERT INTO INGREDIENT VALUES(1, 'Patatas', 10, 20, 30, 40);
INSERT INTO INGREDIENT VALUES(2, 'Lechuga', 20, 30, 40, 50);
INSERT INTO INGREDIENT VALUES(3, 'Carne', 30, 40, 50, 60);

-- Dos platos de prueba
INSERT INTO DISH VALUES(1, 'Patatas con lechuga');
INSERT INTO INGDISREL VALUES(1, 1);
INSERT INTO INGDISREL VALUES(2, 1);
INSERT INTO DISH VALUES(2, 'Carne con patatas');
INSERT INTO INGDISREL VALUES(3, 2);
INSERT INTO INGDISREL VALUES(1, 2);

-- Dos menus de prueba
INSERT INTO MENU VALUES(1, 1, '2019-07-08');
INSERT INTO MENU VALUES(2, 1, '2019-07-15');


/*CREATE PROCEDURE `add_test_dish` (IN dishId INT, IN dishName varchar(50), IN menuId INT)
BEGIN
	INSERT INTO DISH VALUES(dishId, dishName);
    INSERT INTO INGDISREL VALUES(1, dishId);
    INSERT INTO INGDISREL VALUES(2, dishId);
    INSERT INTO MENUDISREL VALUES (menuId, dishId, '2019-07-08');
END*/

SET @DISH_ID_START = 3;

--Lunes
INSERT INTO DISH VALUES(@DISH_ID_START, 'Lunes Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-08');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Lunes Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-08');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Lunes Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-08');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Martes
INSERT INTO DISH VALUES(@DISH_ID_START, 'Martes Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-09');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Martes Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-09');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Martes Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-09');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Miercoles
INSERT INTO DISH VALUES(@DISH_ID_START, 'Miercoles Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-10');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Miercoles Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-10');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Miercoles Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-10');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Jueves
INSERT INTO DISH VALUES(@DISH_ID_START, 'Jueves Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-11');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Jueves Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-11');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Jueves Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-11');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Viernes
INSERT INTO DISH VALUES(@DISH_ID_START, 'Viernes Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-12');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Viernes Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-12');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Viernes Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-12');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Sabado
INSERT INTO DISH VALUES(@DISH_ID_START, 'Sabado Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-13');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Sabado Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-13');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Sabado Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-13');
SET @DISH_ID_START = @DISH_ID_START + 1;
--Domingo
INSERT INTO DISH VALUES(@DISH_ID_START, 'Domingo Desayuno');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-14');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Domingo Comida');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-14');
SET @DISH_ID_START = @DISH_ID_START + 1;
INSERT INTO DISH VALUES(@DISH_ID_START, 'Domingo Cena');
INSERT INTO INGDISREL VALUES(1, @DISH_ID_START);
INSERT INTO INGDISREL VALUES(2, @DISH_ID_START);
INSERT INTO MENUDISREL VALUES (1, @DISH_ID_START, '2019-07-14');
SET @DISH_ID_START = @DISH_ID_START + 1;