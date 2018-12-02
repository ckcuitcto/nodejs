var fs = require('fs');

var writeStream = fs.createWriteStream('note.txt');

writeStream.write("hello dfda fdsf");
writeStream.write("hello dfddf sdf fdsfa fdsf");

writeStream.end();