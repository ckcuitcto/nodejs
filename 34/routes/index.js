var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Express'});
});

router.get('/detail/:id', function (req, res, next) {
    var id = req.params.id;
    if (!req.session.viewed) {
        req.session.viewed = [];
    }
    req.session.viewed.push(id);
    console.log(req.session.viewed);

    res.render('detail', {id: id});
});
router.get('/viewed', function (req, res, next) {
    console.log(req.session.viewed);
    spdaxem = [1,3];
    res.render('viewed',{ spdaxem : spdaxem });
});

module.exports = router;
