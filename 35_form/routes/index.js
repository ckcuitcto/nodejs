var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dangky',function (req,res,next) {
    res.render('form',{title: "hhihi"});
});

router.post('/dangky',function (req,res,next) {
    var content = '';
    content += "Fullname : " + req.body.txtName + '<br />';
    content += "Address : " + req.body.txtAdd + '<br />';
    content += "Phone : " + req.body.txtPhone + '<br />';
    content += "Gender : " + req.body.rdoGender + '<br />';
    content += "Country : " + req.body.sltCountry + '<br />';
    content += "Study : " + req.body.chkSubject + '<br />';
    content += "Note : " + req.body.txtNote + '<br />';
    res.send('Information : <br />' + content);
});


module.exports = router;
