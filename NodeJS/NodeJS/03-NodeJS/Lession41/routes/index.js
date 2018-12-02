var express = require('express');
var router = express.Router();

var CategoryModel = require('../models/category.js');
var ProductModel = require('../models/product.js');
var CartModel = require('../models/cart.js');
var GioHang = require('../models/giohang.js');

/* GET home page. */
router.get('/menu',function (req, res, next) {
	CategoryModel.find().then(function (data) {
		res.json(data);
	});
});

router.get('/', function(req, res, next) {
	ProductModel.find().sort({id : -1}).skip(0).limit(4).then(function (data) {
		res.render('index',{'data' : data});
	});
  	
});

router.get('/danh-muc/:id', function(req, res, next) {
	var id = req.params.id;

	CategoryModel.findOne({'id' : id}).then(function (category) {
		ProductModel.find({'category_id' : id}).then(function (product) {
			res.render('categories',{'category' : category , 'product' : product});
		});
	});

});

router.get('/chi-tiet-san-pham/:theloai/:id', function(req, res, next) {
	var id = req.params.id;
	var theloai = req.params.theloai
	ProductModel.findOne({'id' : id}).then(function (product_detail) {
		CategoryModel.findOne({'id' : theloai}).then(function (category) {
			ProductModel.find({'category_id' : theloai}).skip(0).limit(4).sort({id : -1}).then(function (product_category) {
				res.render('product_detail',{'data' : product_detail,'category' : category,'product_category' : product_category});
			});
		})
	});
  	
});

router.get('/gio-hang/:id', function(req, res, next) {
	var id = req.params.id;
	var giohang = new GioHang(req.session.cart ? req.session.cart : {items : {}});

	ProductModel.findOne({'id' : id}).then(function (product) {
		giohang.add(id,product);
		req.session.cart = giohang;
		res.redirect('/cart');
	});
	
});

router.get('/cart',function (req, res, next) {
	if (!req.session.cart) {
		res.redirect('/');
	}
	var giohang = new GioHang(req.session.cart);
	if (Object.keys(giohang.items).length == 0) {
		res.redirect('/');
	} else {
		var data = giohang.convertArray()
		res.render('cart',{'data' : data});
	}
});

router.get('/update/:id/:sl',function (req, res, next) {
	var id = req.params.id;
	var sl = req.params.sl
	var giohang = new GioHang(req.session.cart);
	giohang.update(id,sl);
	req.session.cart = giohang;
	res.send("Oke");
});

router.get('/delete/:id',function (req, res, next) {
	var id = req.params.id;
	var giohang = new GioHang(req.session.cart);
	giohang.delete(id);
	req.session.cart = giohang;
	res.redirect('/cart');
});

module.exports = router;
