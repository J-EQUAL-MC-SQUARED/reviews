const { Pool } = require('pg');

const pool = new Pool({
  database: 'reviews',
  user: 'mikegunyan',
});

pool.connect()
  .then(() => console.log('Connected to the PSQL'))
  .catch((err) => console.log('Connection Failed: ', err));

module.exports = pool;
