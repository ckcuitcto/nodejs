var express = require('express');
var router = express.Router();

router.get('/ios',function (req, res) {
    res.send('Khoa hoc ios');
});
router.get('php',function (req, res) {
    res.send('Khoa hoc php');
});

module.exports = router;