var fs = require('fs');

var writeStream = fs.createWriteStream('note.txt');

writeStream.write("Hello My Name Is Tuan");
writeStream.write("Hello My Name Is Tủn");
writeStream.end();