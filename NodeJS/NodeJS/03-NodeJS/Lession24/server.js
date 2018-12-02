var http = require('http'),
	fs = require('fs');

http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type' : 'text/html'});
	fs.createReadStream('index.html').pipe(res);
}).listen(6969);
console.log("Server Is Running At : http://localhost:6969");