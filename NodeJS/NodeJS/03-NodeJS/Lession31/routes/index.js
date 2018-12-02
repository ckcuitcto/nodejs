var express = require('express');
var router = express.Router();

/*router.get('/',function (req , res) {
	res.send("Root File");
});

router.get('/gioi-thieu',function (req , res) {
	res.send("Giơi thiệu QuocTuan.Info");
});

router.get('/ten/:ten/tuoi/:tuoi',function (req , res) {
	res.send("Họ tên " + req.params.ten + " - Tuổi : " + req.params.tuoi);
});

router.get('/open/:from.:to',function (req , res) {
	res.send("Mở của từ : " + req.params.from + " - đến : " + req.params.to);
});

//localhost:3000/nodjs
//localhost:3000/nodejs
router.get('/node?js',function (req , res) {
	res.send("NodeJS");
});

router.get('/lap-trinh-(node-)?tai-quoc-tuan',function (req , res) {
	res.send("Khóa học lập trình tại QuocTuan.Info");
})

router.get('/quoc+tuan',function (req , res) {
	res.send("Vũ Quôc Tuấn");
});

router.get('/php*mysql',function (req , res) {
	res.send("Lập trình PHP & MySQL");
});

router.get(/.*tuan$/,function (req , res) {
	res.send("My name is Tuan");
});

router.get(/a/,function (req , res) {
	res.send("AAAA");
});


router.get('/vi-du/01',function (req , res , next) {
	console.log("Action 01");
	next();
},function (req , res) {
	console.log("Action 02");
});


var at01 = function (req , res , next) {
	console.log("Action 01");
	next();
}

var at02 = function (req , res , next) {
	console.log("Action 02");
	next();
}

var at03 = function (req , res) {
	console.log("Action 03");
}

router.get('/vi-du/02',[at01,at02,at03]);


var ac01 = function (req , res , next) {
	next();
	console.log("Action 01");
}

var ac02 = function (req , res , next) {
	console.log("Action 02");
	next();
}


router.get('/vi-du/03' , [ac01 , ac02] , function (req , res , next) {
	console.log("Action 03");
	next();
},function (req , res) {
	console.log("Action 04");
});



module.exports = router;
