var express = require('express');
var multer  = require('multer');
var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname );
  }
});

function extFile (req , file ,cb) {
	if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
		return cb(new Error('Chỉ chấp nhận file hình'));
	} else {
		cb(null,true);
	}
}

var upload = multer({ storage: storage , fileFilter : extFile });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/album', function(req, res, next) {
  var folder = './upload/';
  var fs = require('fs');
  fs.readdir(folder,function (err , file) {
    res.render('album',{file : file});
  });
});

router.get('/delete/:file',function (req, res, next) {
  var file = './upload/' + req.params.file;
  var fs = require('fs');
  fs.unlink(file,function (err) {
    if (err) throw err;
  });
  res.redirect('/album');
});

router.get('/download/:file',function (req, res, next) {
  var file = './upload/' + req.params.file;
  res.download(file); 
});

router.post('/upload', upload.any() ,function (req, res, next) {
	return res.status(200).send(req.file);
});

module.exports = router;
