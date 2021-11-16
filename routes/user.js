var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('pages/login');
});

router.get('/register', function(req, res, next) {
  res.render('pages/register');
});

router.get('/', function(req, res, next) {
  res.render('pages/profile');
});

module.exports = router;