var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/detail/:id', function(req, res, next) {
	var id = req.params.id;

	if (!req.session.viewed) {
		req.session.viewed = [];
	}

	if (req.session.viewed.indexOf(id) == -1) {
		req.session.viewed.push(id);
	}
	

  	res.render('detail',{id : id});
});

router.get('/view', function(req, res, next) {
  	res.render('viewed' , {viewed : req.session.viewed});
});

module.exports = router;
