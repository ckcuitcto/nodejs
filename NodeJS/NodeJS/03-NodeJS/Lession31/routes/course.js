var express = require('express');
var router = express.Router();

router.get('/php',function (req , res) {
	res.send("Khóa học lập trình PHP");
});

router.get('/ios',function (req , res) {
	res.send("Khóa học lập trình iOS");
});

router.get('/android',function (req , res) {
	res.send("Khóa học lập trình Android");
});

module.exports = router;