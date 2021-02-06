const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./db');

mongoose.Promise = global.Promise;

const reviewsSchema = new mongoose.Schema({
  product_id: { type: Number, index: true },
  customer_name: String,
  review_body: String,
  review_title: String,
  rating: Number,
  helpful: { type: Number, default: 0 },
  verified_purchase: { type: Boolean, default: false },
  images: Array,
  review_date: { type: Date, default: Date.now },
});

reviewsSchema.set('autoIndex', false);

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;
