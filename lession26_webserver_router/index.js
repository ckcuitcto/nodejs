var http =require('http');
var app = require('./app.js');
http.createServer(app.router).listen(6969);

console.log("Sever running at :http://localhost:6969");