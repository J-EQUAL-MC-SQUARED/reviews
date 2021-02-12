/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filename = argv.output || 'items.csv';
const stream = fs.createWriteStream(filename);

const createItem = () => {
  const item = faker.lorem.word();
  return `${item}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    do {
      i -= 1;
      const item = createItem();
      if (i === 0) {
        writeStream.write(item, encoding, done);
      } else {
        writeStream.write(item, encoding);
      }
    } while (i > 0);
    if (i > 0) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

stream.write('item\n', 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
