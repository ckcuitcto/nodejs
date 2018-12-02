var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
  user: 'postgres',
  database: 'truonghoc',
  password: '12345',
  host: 'localhost',
  port: 5432,
  max: 10, 
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/them', function(req, res, next) {
	var data = req.body;
	pool.connect(function(err, client, done) {
	  client.query('INSERT INTO sinhvien (name,age) VALUES ($1,$2)', [data.txtName , data.txtAge], function(err, result) {
	    done(err);
	    console.log(result);
	  });
	});
});

router.get('/danh-sach', function(req, res, next) {
  pool.connect(function(err, client, done) {
    client.query('SELECT * FROM sinhvien', function(err, result) {
      done(err);
      res.json(result.rows);
    });
  });
});

module.exports = router;
