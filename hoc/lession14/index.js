var fs = require("fs");

var readSteam = fs.createReadStream("sample.txt");
var content ='';

readSteam.on('data',function(chunk){
    content += chunk;
});

readSteam.on('end',function(){
    console.log();
}); 