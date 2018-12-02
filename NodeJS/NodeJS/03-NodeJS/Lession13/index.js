"use strict";
var EventEmitter = require('events').EventEmitter;

class Logger extends EventEmitter {
	constructor () {
		super();
		this.msg = "QuocTuan.Info";
	}

	onLog () {
		this.on("log",function (message) {
			console.log("Log : " + message);
		});
	}

	onEmit (msg) {
		if (msg) {
			this.msg = msg;
		}
		this.emit("log",this.msg);
	}
}

var logger = new Logger();
logger.onLog();
logger.onEmit("Conan Vũ");