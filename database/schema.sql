DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  item VARCHAR(25)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  imageUrl VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS reviews (
  product_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(25),
  review_body TEXT,
  review_title VARCHAR(50),
  rating INTEGER,
  helpful INTEGER,
  review_date DATE DEFAULT CURRENT_DATE,
  images INTEGER REFERENCES images(id)
);
