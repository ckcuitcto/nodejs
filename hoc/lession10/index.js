const util = require('util');
const EventEmitter = require('events');

var Person = function (name){
    this.name = name;
}

util.inherits(Person, EventEmitter.EventEmitter);

var tuan = new Person("thai duc");
var teo = new Person("tony teo");
var tun = new Person("tun hihi");

var people = [tuan,teo,tun];

people.forEach(function(pp){
    pp.on("speak",function(msg){
        console.log(pp.name + " said " + msg);
    });
});

tuan.emit("speak","chao ban teo va tun");
tun.emit("speak","chao ban tuan va teo");