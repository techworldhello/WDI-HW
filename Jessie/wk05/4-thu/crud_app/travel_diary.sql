CREATE DATABASE crud_app;

CREATE TABLE been_cities(
	id SERIAL PRIMARY KEY,
	city VARCHAR(1000) NOT NULL,
	image_url VARCHAR(2000),
	description TEXT
);

-- collapse been and to into one table, boolean been_to

INSERT INTO been_cities (city, image_url, description) VALUES ('Paris', 'https://ak4.picdn.net/shutterstock/videos/18323164/thumb/1.jpg', 'I like this place');
INSERT INTO been_cities (city, image_url, description) VALUES ('New York', 'https://media.timeout.com/images/103444978/630/472/image.jpg', 'I love this place');

CREATE TABLE go_cities(
	id SERIAL PRIMARY KEY,
	city VARCHAR(1000) NOT NULL
);

INSERT INTO go_cities (city) VALUES ('Istanbul');

CREATE TABLE comments(
	id SERIAL PRIMARY KEY, 
	body TEXT,
	city_id INTEGER, 
	FOREIGN KEY (city_id) REFERENCES been_cities (id) ON DELETE RESTRICT
);

