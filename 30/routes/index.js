var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//     var info = {name: "duc ", age: 20};
//     var arraa = {'aa' : ['a','b','bc','asd','asdsa'] };
//     res.render('index', {title: 'zz', info: info, arraa: arraa});
// });

// router.get('/giao-dien',function (req, res) {
//     res.render('template/index.ejs');
// });

router.get('/',function (req,res) {
    res.send('root file');
});




// router.get('/gioi-thieu',function (req,res) {
//     res.send('gioi thieu addsads');
// });
//
// router.get('/ten/:ten/tuoi/:tuoi',function (req,res) {
//     res.send("ho ten " + req.params.ten);
// });
//
// router.get('/open/:from-:to',function (req,res) {
//     res.send("mo cua :" + req.params.from + " - " + req.params.to);
// });
//
// router.get('/node?js',function (req,res) {
//     // cos hay k co kí tự trước ? đều đc
//     res.send('NodeJs');
// });
//
// router.get('/lap-trinh-(node-)?tai-aa',function (req,res) {
//     res.send('ahoc adsdsa');
// });
//
// router.get('/ph1x+js',function (req,res) {
//     res.send('link la php va js. chu p o sau phải xuất hiện ít nhất 1 lần');
// });
//
// router.get('/o-giua-la-gi-*-cung-dc',function (req,res) {
//     res.send('dau * o giua la gi cung dc');
// });
//
// router.get(/.*java$/,function (req,res) { // k co dau nhay
//     res.send('ở đầu là gì cũng đc nhưng kết thúc phải là chữ java');
// });
//
// router.get(/.*java.*/,function (req,res) { // k co dau nhay
//     res.send('có chữ java là đc');
// });
//
// router.get(/a/,function (req,res) {
//     res.send('co ki tu a la dc');
// });


// router.get('/vi-du/01',function (req,res, next) {
//    console.log('vi du 01');
//    next();
// },function () {
//     console.log('ac tion 2');
// });
//
//
// var at01 = function(req,res,next){
//     console.log(1);
//     next();
// };var at02 = function(req,res,next){
//     console.log(2);
//     next();
// };var at03 = function(req,res,next){
//     console.log(3);
// };
//
// router.get('/vi-du/02',[at01,at02,at03]);
//
// router.get('/vd/03',[at01,at02],function (req,res,next) {
//     console.log('ac 3');
//     next();
// },function (req,res,next) {
//     console.log('04');
// });


// router.get('/get-host',function (req,res) {
//    console.log(req.protocol);
//    console.log(req.hostname);
//    console.log(req.ip);
//    console.log(req.originalUrl);
// });

// router.get('/vidu2/:id/:title',function (req,res) {
//     res.send(req.params);
//     // req.query  để lấy query
// });



//response
router.get('/res/vd01/sent',function (req,res) {
    console.log(res.headersSent);
    res.send('duc');
    console.log(res.headersSent);
    res.end(); // dung lai tranh qua tai
});

router.get('/res/vd02/set',function (req,res) {
    res.set('Content-Type', 'text/html' );
    res.send('<h1>adsfadsf </h1>');
    res.end();
});

router.get('/res/vd03/get',function (req,res) {
    res.send('<h1>adsfadsf </h1>');
    res.end();
    console.log(res.get('Content-Type'));
});

router.get('/res/vd05/json',function (req,res) {
    res.json({company: 'asdasdasdsa',course: 'nodejs'});
    console.log(res.get('Content-Type'));

});

router.get('/res/vd06/redirect',function (req,res) {
    // res.redirect('/res/vd03/get');
    res.redirect('back');
});


router.get('/res/vd08/status',function (req,res) {
        // res.status(200).send('asdsd');
        res.sendStatus(200);    
});

router.get('/res/vd09/download',function (req,res) {
    res.download('./file/aa.jpg');
});
module.exports = router;
