var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/detail/:id',function (req,res,next) {
  var id = req.params.id;
  res.render('detail',{id:id});
});
router.get('/view',function (req,res,next) {

});

module.exports = router;
