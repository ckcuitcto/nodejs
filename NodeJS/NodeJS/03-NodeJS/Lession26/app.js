var url = require('url');
var fs = require('fs');

function renderHTML (path,res) {
	fs.readFile(path,"utf8",function (error,content) {
		if (error) {
			console.log(error);
		} else {
			res.writeHead(200,{"Content-Type" : "text/html"});
			res.write(content);
			res.end();
		}
	});
}

var router = function (req,res) {
	path = url.parse(req.url).pathname;
	switch (path) {
		case "/" :
			renderHTML ('./module/index.html',res);
			break;
		case '/gioi-thieu' :
			renderHTML ('./module/aboutus.html',res);
			break;
		case '/san-pham' : 
			renderHTML ('./module/product.html',res);
			break;
		default : 
			res.writeHead(404);
			res.write("Route Not Found.Please Enter Route");
			res.end();
	}
}

module.exports.router = router;