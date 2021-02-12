#!/bin/bash

###################################################
# Bash script to create database and seed
###################################################



# Assign variables

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"



# Generate data

node ./database/generator1.js
node ./database/generator2.js
node ./database/generator3.js
node ./database/generator4.js
node ./database/generator5.js
node ./database/generator6.js
node ./database/generator7.js
node ./database/generator8.js
node ./database/generator9.js
node ./database/generator10.js



# Create database

DATABASE="reviews"
USER="mikegunyan"

SCHEMA="$DIR/schema.sql"
psql -U $USER < $SCHEMA



# Seed database

psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items1.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews1.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images1.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items2.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews2.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images2.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items3.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews3.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images3.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items4.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews4.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images4.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items5.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews5.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images5.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items6.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews6.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images6.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items7.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews7.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images7.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items8.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews8.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images8.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items9.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews9.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images9.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY items FROM '$DIR/data/items10.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY reviews FROM '$DIR/data/reviews10.csv' CSV HEADER;"
psql -U $USER -d "reviews" -c "COPY images FROM '$DIR/data/images10.csv' CSV HEADER;"
