var js = require('fs');

var rs = js.createReadStream('a.txt');
var ws = js.createWriteStream('b.txt');

rs.pipe(ws);