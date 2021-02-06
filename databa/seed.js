const Review = require('./Review');
const data = require('./dataGenerator');
const db = require('./db');

const seedDatabase = () => {
  Review.create(data)
    .then(() => db.close());
};

seedDatabase();
