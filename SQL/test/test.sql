CREATE TABLE student (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  github VARCHAR UNIQUE NOT NULL,
  points INTEGER DEFAULT 0 CHECK (points >=0),
  start_date DATE NOT NULL,
  graduated BOOLEAN DEFAULT FALSE
);
--
INSERT INTO student (name, github, start_date) VALUES ('Ahmer', 'AhmerMalik', '2017-09-01');

--

SELECT * FROM STUDENT;

--

SELECT id, name FROM student;
--

SELECT * FROM student WHERE id=2;

--


SELECT * FROM student WHERE points >3;

--

SELECT * FROM student WHERE points >3 AND github='AhmerMalik';

--

SELECT * FROM student WHERE id IN (2, 3);

--

SELECT * FROM student WHERE github LIKE '%izza%';

-- Use ILIKE to search for things without taking consideration of case and full name.

SELECT * FROM student WHERE github ILIKE '%RMAL%';

--

SELECT COUNT (*) FROM student;

--

SELECT COUNT(start_date) FROM student;

--

SELECT SUM(points) FROM student;

--

SELECT start_date, sum(points) FROM student GROUP BY start_date;

-- more stats!
SELECT start_date,
  SUM(points) AS total_points,
  AVG(points) AS average_points,
  COUNT(*) AS num_students
FROM student GROUP BY start_date;

--

SELECT start_date,
  SUM(points) AS total_points,
  AVG(points) AS average_points,
  COUNT(*) AS num_students
FROM student GROUP BY start_date;

--

SELECT * FROM student ORDER BY points DESC;

-- order by multiple columns
SELECT * FROM student ORDER BY points, start_date;

--order by descending 3 records
SELECT * FROM student ORDER BY points DESC LIMIT 3;

--order by descending 3 records on the 3rd page(offset).
SELECT * FROM student ORDER BY points DESC LIMIT 3 OFFSET 8;


CREATE TABLE author (
id SERIAL PRIMARY KEY,
name VARCHAR
);

--

CREATE TABLE article (
id SERIAL PRIMARY KEY,
title VARCHAR,
author_id INTEGER REFERENCES author (id)
);

--Find article where ID = 1 (the author's ID)
SELECT * FROM article WHERE id = 1;


-- join article author table and article table where id of article = 1


SELECT * FROM article INNER JOIN author ON article.author_id = author.id WHERE article.id =1;

--Combine all articles with associated authors regardless of  article data inconsistencies.
SELECT * FROM article LEFT OUTER JOIN author ON article.author_id= author.id;

--Combine all articles with associated authors regardless of data inconsistencies.
SELECT * FROM article RIGHT OUTER JOIN author ON article.author_id= author.id;


--Combine all articles with associated authors exclude articles with data inconsistencies.
SELECT * FROM article INNER JOIN author ON article.author_id= author.id;
--

SELECT * FROM article RIGHT OUTER JOIN author ON article.author_id = author.id;

--
SELECT * FROM author LEFT OUTER JOIN article ON article.author_id = author.id;

--Join the data and get results by grouping.
-- This query will show all the authors who have articles, with their article counts.
SELECT
  author.id, author.name, count(article.id)
FROM article
INNER JOIN
  author ON article.author_id = author.id
GROUP BY
  author.id;

--

CREATE TABLE team (
id SERIAL PRIMARY KEY,
name VARCHAR
);

--

CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE team_member (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES team (id),
  member_id INTEGER REFERENCES member (id)
);

--

SELECT * FROM member
  JOIN team_member ON team_member.member_id = member.id
  JOIN team ON team_member.team_id = team.id;

--

SELECT * FROM team
 LEFT OUTER JOIN team_member ON team.id= team_member.team_id
 LEFT OUTER JOIN member ON team_member.member_id = member.id;

--

