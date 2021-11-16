var express = require('express');
var router = express.Router();

/* Admin route. */
router.get('/', function(req, res, next) {
  res.render('pages/admin/dashboard', {layout: 'layouts/admin'});
});

router.get('/login', function(req, res, next) {
  res.render('pages/admin/login', { layout: false });
});

router.get('/register', function(req, res, next) {
  res.render('pages/admin/register', { layout: false });
});

router.get('/dashboard', function(req, res, next) {
  res.render('pages/admin/dashboard', {layout: 'layouts/admin'});
});

router.get('/user', function(req, res, next) {
  res.render('pages/admin/user', {layout: 'layouts/admin'});
});

router.get('/product', function(req, res, next) {
  res.render('pages/admin/product', {layout: 'layouts/admin'});
});

router.get('/brand', function(req, res, next) {
  res.render('pages/admin/brand', {layout: 'layouts/admin'});
});

router.get('/order', function(req, res, next) {
  res.render('pages/admin/order', {layout: 'layouts/admin'});
});

module.exports = router;
