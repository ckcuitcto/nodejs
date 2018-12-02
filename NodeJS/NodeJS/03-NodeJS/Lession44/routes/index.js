var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chatting'
});

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.user) {
		req.session.user = "";
	}
  	res.render('index', { user: req.session.user });
});

router.get('/session-join/:user', function(req, res, next) {
	if (!req.session.user) {
		req.session.user = req.params.user
	}
	res.send(req.session.user);
});

router.post('/insert-message',function (req, res, next) {
	var user = req.session.user;
	var message = req.body.message;
	connection.query('INSERT INTO `message`(`name`, `messages`) VALUES ("'+user+'","'+message+'")');
});

module.exports = router;
