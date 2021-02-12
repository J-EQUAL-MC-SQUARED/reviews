require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const expressStaticGZIP = require('express-static-gzip');
const pool = require('../database/index.js');

const STATIC = path.resolve('public');
const PORT = process.env.PORT || 3003;
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/reviews/:product_id', (req, res) => {
  pool.query(`SELECT * FROM images WHERE "product_id" = ${req.params.product_id}`, (err, imageResults) => {
    if (err) {
      res.sendStatus(500);
    } else {
      pool.query(`SELECT * FROM reviews WHERE "product_id" = ${req.params.product_id}`, (error, results) => {
        if (error) {
          res.send(500);
        } else {
          const images = imageResults.rows;
          const reviews = results.rows;
          for (let i = 0; i < reviews.length; i += 1) {
            const imageArray = [];
            for (let j = 0; j < images.length; j += 1) {
              if (images[j].review_id === reviews[i].id) {
                imageArray.push(images[j].imageurl);
              }
            }
            reviews[i].images = imageArray;
          }
          res.send(reviews);
        }
      });
    }
  });
});

app.get('/api/reviews/:product_id/images', (req, res) => {
  pool.query(`SELECT * FROM images WHERE "product_id" = ${req.params.product_id}`, (error, results) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(results.rows);
    }
  });
});

app.get('/api/reviews/:product_id/images/:place', (req, res) => {
  pool.query(`SELECT * FROM images WHERE "product_id" = ${req.params.product_id}`, (error, results) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(results.rows);
    }
  });
});

app.patch('/api/reviews/:product_id/:id', (req, res) => {
  pool.query(`UPDATE reviews SET "helpful" = helpful + 1 WHERE "product_id" = ${req.params.product_id}`, (error, results) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(results.rows);
    }
  });
});

app.use('/', expressStaticGZIP(STATIC, {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

app.listen(PORT);
