"use strict";
class Diem {

	constructor (ten,diem) {
		this.name = ten;
		this.point = diem;
	}

	baodiem () {
		console.log("Điểm của bạn " + this.name + " là " + this.point + " điểm");
	}

}

var tuan = new Diem("Tèo","7");
tuan.baodiem();

var tun = new Diem("Tun","6");
tun.baodiem();
