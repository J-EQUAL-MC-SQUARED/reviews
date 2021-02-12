DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  item VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY,
  customer_name VARCHAR(55),
  review_body TEXT,
  review_title VARCHAR(50),
  rating INTEGER,
  helpful INTEGER,
  verified_purchase Boolean,
  review_date DATE,
  product_id INTEGER REFERENCES items(id)
);

CREATE TABLE images (
  id INTEGER PRIMARY KEY,
  review_id INTEGER REFERENCES reviews(id),
  product_id INTEGER REFERENCES items(id),
  imageUrl VARCHAR(100)
);
