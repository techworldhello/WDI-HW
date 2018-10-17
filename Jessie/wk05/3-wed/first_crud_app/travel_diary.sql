CREATE DATABASE first_crud_app;

CREATE TABLE cities_main(
	city VARCHAR(200) NOT NULL,
	image_url VARCHAR(200),
	description VARCHAR(400)
);

INSERT INTO cities_main (city, image_url, description) VALUES ('Paris', 'http://via.placeholder.com/150x150');
INSERT INTO cities_main (city, image_url, description) VALUES ('New York', 'http://via.placeholder.com/150x150');


CREATE TABLE places_to_go(
	city VARCHAR(200) NOT NULL
);

INSERT INTO places_to_go (city) VALUES ('Istanbul');
