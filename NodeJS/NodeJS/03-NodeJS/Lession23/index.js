var http = require('http');

http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type' : 'text/html;charset=utf-8'});
	res.write("<h1>Chào mừng đến với QuocTuan.Info</h1>");
	res.end();
}).listen(6969);
console.log("Webserver Running At : http://localhost:6969");