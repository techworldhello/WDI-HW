CREATE DATABASE omdb;

CREATE TABLE movies_searched(
	id SERIAL PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  year INTEGER,
  rater VARCHAR(200),
  rating VARCHAR(200),
  director VARCHAR(300),
  description VARCHAR(600),
  img_url VARCHAR(600)
);

