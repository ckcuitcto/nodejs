var events = require('events'),
 emitter = new events.EventEmitter(),
 username = "thaiduc",
 password = '123456';


 emitter.on("account",function(user,pass){
    console.log("User: " + user + "password : " + pass);    
 });

 emitter.on("course",function(data){
    console.log(data);
 });

 emitter.emit("account",username,password);
 emitter.emit("course", "học lập trình node js");