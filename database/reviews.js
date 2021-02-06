/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filename = argv.output || 'reviews.csv';
const stream = fs.createWriteStream(filename);

const createReview = () => {
  const customer_name = faker.internet.userName();
  const review_body = faker.lorem.paragraph();
  const review_title = faker.lorem.words();
  const rating = faker.random.number(5);
  const helpful = faker.random.number(50);
  const review_date = faker.date.recent();
  const images = faker.random.number(1000);

  return `${customer_name},${review_body},${review_title},${rating},${helpful},${review_date},${images}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    do {
      i -= 1;
      const review = createReview();
      if (i === 0) {
        writeStream.write(review, encoding, done);
      } else {
        writeStream.write(review, encoding);
      }
    } while (i > 0);
    if (i > 0) {
      writeStream.once('drain', writing);
    }
  }
  // initiate our writing function
  writing();
};

// write our `header` line before we invoke the loop
stream.write('customer_name,review_body,review_title,rating,helpful,review_date,images\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
