// -----------------------------------------------------------------------------
// Initalise Express Router
// -----------------------------------------------------------------------------
const express = require('express');

const router = express.Router();

// -----------------------------------------------------------------------------
// Require in Controllers
// -----------------------------------------------------------------------------
const home = require('./controllers/home.js');
const mw = require('../mw/');

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
router
  .route('/')
  .get(home.render);

router
  .route('/book-one')
  .post(mw.validation, home.booking);

router
  .route('/book-two')
  .post(mw.validation, home.booking);

router
  .route('/book-three')
  .post(mw.validation, home.booking);

router
  .route('/book-four')
  .post(mw.validation, home.booking);

router
  .route('/book-five')
  .post(mw.validation, home.booking);

router
  .route('*')
  .get((req, res) => {
    res.redirect('/');
  })
  .post((req, res) => {
    res.redirect('/');
  });

// -----------------------------------------------------------------------------
// Export Router
// -----------------------------------------------------------------------------
module.exports = router;
