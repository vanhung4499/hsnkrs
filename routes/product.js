var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/products');
});

router.get('/detail', function(req, res, next) {
  res.render('pages/product-detail');
});

module.exports = router;
