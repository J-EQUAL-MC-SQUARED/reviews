/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const { lines } = require('./lines');

let num1 = 9000000;
let num2 = 90000000;
let num3 = 270000000;

const stream1 = fs.createWriteStream('./database/data/items10.csv');
const stream2 = fs.createWriteStream('./database/data/reviews10.csv');
const stream3 = fs.createWriteStream('./database/data/images10.csv');

const createItem = () => {
  const id = num1;
  num1 += 1;
  const item = faker.lorem.word();
  return `${id},${item}\n`;
};

const createImages = (review_id) => {
  const count = Math.floor(Math.random() * 3) + 1;
  // const count = 1;
  let images = '';
  for (let i = 0; i < count; i += 1) {
    const id = num3;
    const imageUrl = `https://reviews-mike.s3-us-west-2.amazonaws.com/images/image${Math.floor(Math.random() * 1000) + 1}.jpg`;
    const product_id = num1 - 1;
    images = images.concat(`${id},${review_id},${product_id},${imageUrl}\n`);
    num3 += 1;
  }
  return images;
};

const createReviews = () => {
  const count = Math.floor(Math.random() * 10) + 5;
  let reviews = '';
  let images = '';
  for (let i = 0; i < count; i += 1) {
    const id = num2;
    const customer_name = faker.internet.userName();
    const review_body = faker.lorem.paragraph();
    const review_title = faker.lorem.words();
    const rating = faker.random.number(5);
    const helpful = faker.random.number(50);
    const verified_purchase = faker.random.boolean();
    const review_date = faker.date.recent().toISOString();
    const product_id = num1 - 1;
    reviews = reviews.concat(`${id},${customer_name},${review_body},${review_title},${rating},${helpful},${verified_purchase},${review_date},${product_id}\n`);
    images = images.concat(createImages(id));
    num2 += 1;
  }
  return { reviews, images };
};

const startWriting = (writeStream1, writeStream2, writeStream3, encoding, done) => {
  let i = lines;
  function writing() {
    do {
      i -= 1;
      const item = createItem();
      const reviews = createReviews();
      if (i === 0) {
        writeStream3.write(reviews.images, encoding, done);
        writeStream2.write(reviews.reviews, encoding, done);
        writeStream1.write(item, encoding, done);
      } else {
        writeStream3.write(reviews.images, encoding, done);
        writeStream2.write(reviews.reviews, encoding, done);
        writeStream1.write(item, encoding);
      }
    } while (i > 0);
    if (i > 0) {
      writeStream2.once('drain', () => {});
      writeStream1.once('drain', writing);
    }
  }
  writing();
};

stream1.write('id,item\n', 'utf-8');
stream2.write('id,customer_name,review_body,review_title,rating,helpful,verified_purchase,review_date,product_id\n', 'utf-8');
stream3.write('id,review_id,product_id,imageUrl\n', 'utf-8');
startWriting(stream1, stream2, stream3, 'utf-8', () => {
  stream1.end();
  stream2.end();
  stream3.end();
});
