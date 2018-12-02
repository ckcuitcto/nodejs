var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thong-tin', function(req, res, next) {
	var monhoc = {"mh" : ["PHP","iOS","Android"]};
  res.render('info' , { name : 'Vũ Quốc Tuấn' , subject : monhoc});
});

router.get('/giao-dien',function (req , res , next) {
	res.render('template/index');
});

router.get('/san-pham',function (req , res , next) {
	res.render('template/product');
});

module.exports = router;
