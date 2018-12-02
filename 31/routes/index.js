var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get("/student/:name", function (req, res, next) {
    var name = req.params.name;
    res.cookie('name',name);
    res.send('Student is ' + name);
});

router.get("/info", function (req, res, next) {
    res.send('Student ixxs ' + req.cookies.name);
});

router.get("/info", function (req, res, next) {
    res.send('Student ixxs ' + req.cookies.name);
});

router.get('/set-session',function (req,res,next) {
    req.session.name = 'duc ';
    res.send('day la trang tao session');
});
router.get('/get-session',function (req,res,next) {
    res.send("CHao "+ req.session.name);
});

router.get('/delete-session',function (req,res,next) {
    req.session.destroy;
    res.send('day la trang xoa session');
});
module.exports = router;
