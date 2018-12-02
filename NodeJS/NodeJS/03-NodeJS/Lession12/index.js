"use strict";

class HocSinh {

	constructor (ten,tuoi) {
		this.ten = ten;
		this.tuoi = tuoi;
	}

	info () {
		return "Họ tên : " + this.ten + " - Tuổi : " + this.tuoi;
	}

}

class GiaoVien extends HocSinh {
	constructor (ten,tuoi,kinhnghiem) {
		super(ten,tuoi);
		this.kinhnghiem = kinhnghiem;
	}

	info () {
		return super.info() + " - Kinh nghiệm : " + this.kinhnghiem;
	}
}

var mrtuan = new GiaoVien("Vũ Quốc Tuấn",26,6);
console.log(mrtuan.info());