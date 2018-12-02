var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Requests' });
});

router.get('/req/vd01/tuan',function (req , res) {
	console.log(req.protocol);
	console.log(req.hostname);
	console.log(req.ip);
	console.log(req.originalUrl);
});

router.get('/req/vd02/:id/:title',function (req , res) {
	res.send(req.params.title);
});

router.get('/req/vd03/index',function (req ,res) {
	res.send(req.query.gv);
});*/

router.get('/res/vd01/sent',function (req , res) {
	console.log(res.headersSent);
	res.send("QuocTuan.Info");
	console.log(res.headersSent);
});

router.get('/res/vd02/end',function (req , res) {
	res.send("QuocTuan.Info");
	res.end();
});

router.get('/res/vd03/set',function (req , res) {
	res.set('Content-Type' , 'text/html');
	res.send('<h1>QuocTuan.Info</h1>');
	res.end();
});

router.get('/res/vd04/get',function (req , res) {
	res.send('<h1>QuocTuan.Info</h1>');
	res.end();
	console.log(res.get('Content-Type'));
});

router.get('/res/vd05/json',function (req , res) {
	res.json({company : 'QuocTuan.Info',course : 'NodeJS'});
	console.log(res.get('Content-Type'));
});

router.get('/res/vd06/redirect',function (req , res) {
	//res.redirect('/res/vd04/get');
	//res.redirect('http://quoctuan.info');
	res.redirect('back');
});

router.get('/res/vd07/render',function (req , res) {
	//res.render('render');

	/*res.render('rendersai',function (err , html) {
		if (err) {
			res.send('File Error');
		} else {
			res.send(html);
		}
		res.end();
	});*/

	res.render('render',{name : "QuocTuan.Info" , header : "Welcom To My Website"},function (err ,html) {
		if (err) {
			res.send('File Error');
		} else {
			res.send(html);
		}
		res.end();
	});
});

router.get('/res/vd08/status',function (req , res) {
	res.sendStatus(200); // equivalent to res.status(200).send('OK')
	res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
});

router.get('/res/vd09/download',function (req , res) {
	res.download('./file/iphone7.jpg' , 'quoctuan.jpg');
});


module.exports = router;
