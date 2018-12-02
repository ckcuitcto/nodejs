var Duplex = require('stream').Duplex;
var fs = require('fs');

Duplex.Readable = fs.createReadStream('sample.txt');
Duplex.Writeable = fs.createWriteStream('note.txt');

Duplex.Readable.on('data',function (chunk) {
	Duplex.Writeable.write(chunk);
});

Duplex.Readable.on('end',function () {
	console.log("Complete");
});