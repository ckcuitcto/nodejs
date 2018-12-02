var express = require('express');
var router = express.Router();

var CategoryModel = require('../models/category.js');
var ProductModel = require('../models/product.js');
var CartModel = require('../models/cart.js');
var CartDetailModel = require('../models/cart_detail.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/danh-muc', function(req, res, next) {
  res.render('categories');
});

router.get('/chi-tiet-san-pham', function(req, res, next) {
  res.render('product_detail');
});

router.get('/gio-hang', function(req, res, next) {
  res.render('cart');
});




module.exports = router;
