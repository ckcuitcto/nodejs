var url = require('url');
var static = require('node-static');
var file = new static.Server(__dirname + "/module/");
var router = function (req,res) {
	switch (req.url) {
		case "/" :
			req.url = "index.html";
			break;
		case '/gioi-thieu' :
			req.url = "aboutus.html";
			break;
		case '/san-pham' : 
			req.url = "product.html";
			break;
		case '/dang-ky' : 
			req.url = "signup.html";
			break;
		default : 
			res.writeHead(404);
			res.write("Route Not Found.Please Enter Route");
			res.end();
	}

	if (req.method == "GET") {
		file.serve(req, res);
	}

	if (req.method == "POST") {
		var output = "Dữ liệu của form : ";
		req.on("data",function (chunk) {
			output += chunk.toString();
		});

		req.on("end",function () {
			res.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});
			res.write(output);
			res.end();
		});
	}
}

module.exports.router = router;