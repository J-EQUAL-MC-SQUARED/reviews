const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/understock';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

module.exports = db;
