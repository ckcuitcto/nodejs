var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/template', function (req, res, next) {
    let company = "thaiduc";
    let subject = { monhoc : ["php","android","laravel","ios","nodejs"]};
    res.render('template', {title: 'Thai Duc', name : " a b c d", congty: company, monhoc:subject});
});

router.get('/dang-ky', function (req, res, next) {
    res.render('form');
});

module.exports = router;
