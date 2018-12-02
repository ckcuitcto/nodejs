
var EventEmitter = require('events').EventEmitter;
class Logger extends EventEmitter {

}


emitter.on("log",function(mes){
   console.log("Log: " + mes );    
});


emitter.emit("log","Chafo ban ");