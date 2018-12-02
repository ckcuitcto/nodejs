var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/giao-dien', function(req, res, next) {
	var company = "QHOnline";
	var subject = {"monhoc" : ["PHP","Android","iOS","Laravel","Python","NodejS"]}
  	res.render('template',{tieude : "Jade Template" , name : "Vũ Quốc Tuấn" , congty : company , monhoc : subject});
});

router.get('/dang-ky', function(req, res, next) {
  	res.render('form');
});

module.exports = router;
