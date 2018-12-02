var http = require('http');
var fs = require('fs');

var path = 'vy.mp4';
var stat = fs.statSync(path);
var total = stat.size;

// khởi tạo webserver
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.writeHead(200,{'Content-Length': total ,'Content-Type' : 'video/mp4'});
    fs.createReadStream(path).pipe(res);
    // res.end('thai huynh duc');
}).listen(6969,'127.0.0.1');