CREATE TABLE restaurant (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR,
distance INTEGER DEFAULT 0 CHECK (distance >=0),
stars INTEGER DEFAULT 0 CHECK (stars >=0),
category VARCHAR NOT NULL,
favorite VARCHAR,
takeout BOOLEAN DEFAULT TRUE,
lastorder DATE DEFAULT NULL
);




--
INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Champ Burger', '1','4','American','Lunch Special','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('The Original Ninfas', '1','4','Mexican','Quesadillas','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Merida Mexican', '2','3','Mexican','Chicken Tacos','True', '01-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Jackson Street BBQ', '2','3','American','Brisket','True', '02-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Huynh', '2.4','2','Chinese','General Tso','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Vic & Anthonys', '4','5','American','Ribeye Steak','True', '10-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Jack in the Box', '4','1','American','Ultimate Cheeseburger','True', '02-24-2017'), ('Kim Son', '2','1','Chinese','Schezuan Chicken','True', '05-15-2015');


INSERT INTO restaurant (name, distance, stars, category, favorite, takeout, lastorder) VALUES('Chick Fila', '5','4','American','Spicy Chicken Sandwich Deluxe','True', '10-01-2017');


--	1.	The names of the restaurants that you gave a 5 stars to

SELECT * FROM restaurant where stars > 4 ;

-- 	2.	The favorite dishes of all 5-star restaurants

SELECT favorite FROM restaurant where stars >4;

--  3.	The the id of a restaurant by a specific restaurant name, say 'Moon Tower'

SELECT id FROM restaurant WHERE name ILIKE '%chick%';

--	4.	restaurants in the category of 'BBQ'

SELECT * FROM restaurant WHERE category = 'BBQ';

--  5.	restaurants that do take out

SELECT * FROM restaurant WHERE takeout = TRUE;

--  6. 	restaurants that do take out and is in the category of 'BBQ'

SELECT * FROM restaurant WHERE takeout = TRUE and category = 'BBQ';

--  7. 	restaurants within 2 miles

SELECT * FROM restaurant WHERE distance < 2;

-- 8. 	restaurants you haven't ate at in the last week


SELECT * FROM restaurant WHERE lastorder < '09-25-2017';

-- 9. 	restaurants you haven't ate at in the last week and has 5 stars

SELECT * FROM restaurant WHERE lastorder <'09-25-2017' and stars > 4;



