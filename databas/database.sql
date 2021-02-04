CREATE DATABASE reviews;

CREATE TABLE review (
  product_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(25),
  review_body VARCHAR(255),
  review_title VARCHAR(50),
  rating INT(1),
  helpful BOOLEAN,
  review_date timestamp,
  images INT FOREIGN KEY
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  list text[],
);
