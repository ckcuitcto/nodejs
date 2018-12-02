var http = require('http'),
	fs = require('fs');

var path = 'music.mp4';
var stat = fs.statSync(path);
var total = stat.size;

// Khởi tạo webserver
http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Length' : total ,'Content-Type' : 'video/mp4'});
	fs.createReadStream(path).pipe(res);
}).listen(6969);