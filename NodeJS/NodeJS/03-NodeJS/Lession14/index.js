var fs = require('fs');

var readStream = fs.createReadStream('sample.txt');
var content = '';

readStream.on('data',function (chunk) {
	content += chunk;
});

readStream.on('end',function () {
	console.log(content);
});