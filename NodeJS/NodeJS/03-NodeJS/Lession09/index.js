var events = require('events'),
	emitter = new events.EventEmitter(),
	username = "quoctuan",
	password = "12345";

emitter.on("account",function (user,pass) {
	console.log("User : " + user + " - Pass : " + pass);
});

emitter.addListener("course",function (data) {
	console.log(data);
});

emitter.emit("account",username,password);
emitter.emit("course","Khóa học lập trình NodeJS");

