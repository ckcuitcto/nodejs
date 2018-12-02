var express = require('express');
var multer  = require('multer');
var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname);
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
  res.render('index', { title: 'Express' });
});

router.get('/dang-ky', function(req, res, next) {
  res.render('form');
});

router.post('/dang-ky', upload.single('fAvatar') ,function (req, res, next) {
	var content = '';
	content += "Fullname : " + req.body.txtName + '<br />';
	content += "Address : " + req.body.txtAdd + '<br />';
	content += "Phone : " + req.body.txtPhone + '<br />';
	content += "Gender : " + req.body.rdoGender + '<br />';
	content += "Country : " + req.body.sltCountry + '<br />';
	content += "Study : " + req.body.chkSubject + '<br />';
	content += "Note : " + req.body.txtNote + '<br />';
	content += "Avatar : " + req.file.filename + '<br />';
	res.send('Information : <br />' + content);
});


router.get('/upload-file',function (req, res, next) {
	res.render('multi');
});

router.post('/upload-file', upload.any() ,function (req, res, next) {
	res.redirect('finish');
});

router.get('/finish',function (req, res, next) {
	res.send("Upload Oke");
});
module.exports = router;
