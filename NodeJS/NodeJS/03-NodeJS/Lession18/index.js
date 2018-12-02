var fs = require('fs');

var ws = fs.createWriteStream('note.txt');
var rs = fs.createReadStream('sample.txt');

rs.pipe(ws);