var zlib = require('zlib');
var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('nen.gz');

rs.pipe(zlib.createGzip()).pipe(ws).on('finish',function(){
    console.log('nen thanh cong');
});