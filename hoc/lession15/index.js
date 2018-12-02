var fs = require('fs');

var readSteam = fs.createReadStream('sample.txt');
var content = '';
var chunk;


readSteam.on('readable',function(){
    while((chunk = readSteam.read()) != null){
        content += chunk;
    } 
});

readSteam.on('end',function(){
    console.log(content);
});