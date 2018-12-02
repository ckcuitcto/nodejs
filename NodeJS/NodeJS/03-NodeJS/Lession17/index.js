var fs = require('fs');

var readStream  = fs.createReadStream('sample.txt');
var writeStream = fs.createWriteStream('note.txt');

readStream.on('data',function (chunk) {
	writeStream.write(chunk);
});

readStream.on('end',function () {
	writeStream.end();
	console.log("Copied");
});