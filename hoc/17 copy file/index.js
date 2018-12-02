var fs = require('fs');

var readStream = fs.createReadStream("abc.txt");
var writeStream = fs.createWriteStream("note.txt");


readStream.on('readable',function(chunk){

    while((chunk = readStream.read()) != null){
        writeStream.write(chunk);
    } 
});

readStream.on('end',function(){
    writeStream.end;

});