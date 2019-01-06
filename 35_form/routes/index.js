var express = require('express');
var multer  = require('multer');
var router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ '-' + file.originalname  )
    }
});

function extFile(req,file,cb){
    if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
        return cb(new Error('chi nhap file hinh '));
    }else{
        cb(null,true);
    }
}
var upload = multer({ storage: storage, fileFilter: extFile });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dangky',function (req,res,next) {
    res.render('form',{title: "hhihi"});
});

// router.post('/dangky',upload.single('fAvatar'),function (req,res,next) {
router.post('/dangky', upload.any() ,function (req,res,next) {
    res.send('Information : <br />');
});


module.exports = router;
