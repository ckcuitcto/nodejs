var events = require('events');
var util = require('util');

var Person = function (name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var tuan = new Person("Vũ Quốc Tuấn");
var teo  = new Person("Tony Tèo");
var tun  = new Person("Lê Văn Tủn");

var people = [tuan,teo,tun];

people.forEach(function (pp) {
	pp.on("speak",function (msg) {
		console.log(pp.name + " said : " + msg);
	});
});

tuan.emit("speak","Chào bạn Tèo và bạn Tủn");
teo.emit("speak","Oke Chào bạn Tuấn");
tun.emit("speak","Chào 2 bạn nhé");