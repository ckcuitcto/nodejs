var express = require('express');
var router = express.Router();

var PostModel = require('../model/post.js');

var dongho = function () {
	var t = new Date();
	var ngay = t.getDate();
	var thang = t.getMonth()+1;
	var nam = t.getFullYear();
	var gio = t.getHours();
	var phut = t.getMinutes();
	var giay = t.getSeconds();
	var thoigian = gio + ' : ' + phut + ' : ' + giay + ' - ' + ngay +' / ' + thang +' / ' + nam;
	return thoigian
	setTimeout('dongho()', 1000);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index');
});

router.get('/chi-tiet/:id', function(req, res, next) {
	var id = req.params.id;

	PostModel.find({_id : id}).then(function (data) {
		res.render('post',{data : data[0]});
	});
});

router.get('/upload', function(req, res, next) {
  res.render('upload');
});

router.post('/upload', function(req, res, next) {
	var item = {
		'username' 	: req.body.txtFullName,
		'video'		: req.body.txtVideo,
		'link'		: req.body.txtLink,
		'email'		: req.body.txtEmail,
		'intro'		: req.body.txtIntro,
		'status'	: true,
		'time'		: dongho()
	};

	var data = new PostModel(item);
	data.save();
	res.redirect('/quan-ly');
});

router.get('/trang-chu',function (req , res , next) {
	var itemOnPerPage = 3;
	var page = req.query.page;
	var position = (page - 1) * itemOnPerPage;

	function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    PostModel.find().skip(position).limit(itemOnPerPage).then(function (data) {
    	var xhtml = ''
	  	data.forEach(function (item) {
	  		xhtml += '<h2>';
		    xhtml += '<a href="/chi-tiet/' + item._id + '">' + item.video + '</a>';
		    xhtml += '</h2>';
		    xhtml += '<p class="lead">';
		    xhtml += 'Đăng bởi : <a href="mailto:'+item.email+'">' + item.username + '</a>';
		    xhtml += '</p>';
		    xhtml += '<p><span class="glyphicon glyphicon-time"></span> Đăng bài lúc : ' + item.time + '</p>';
		    xhtml += '<hr>';
		    xhtml += '<div class="video-container">';
		    xhtml += '<iframe width="100%" height="400" src="https://www.youtube.com/embed/' + youtube_parser(item.link) + '" frameborder="0" allowfullscreen></iframe>';
		    xhtml += '</div>';
		    xhtml += '<hr>';
		    xhtml += '<p>Chào mừng các bạn đến với khóa học lập trình NodeJS tại QuocTuan.Info.Đây là một Project thực tế trong khóa học lập trình NodeJS tại QuocTuan.Info.Hy vọng các thể vận dụng được toàn bộ kiến thực để làm Project này.</p>';
		    xhtml += '<a class="btn btn-primary" href="/chi-tiet/' + item._id + '">Xem Chi Tiết <span class="glyphicon glyphicon-chevron-right"></span></a>';
			xhtml += '<hr>';
	  	});
	  	res.send(xhtml);
    });
});

module.exports = router;