/* Anonymus Function
var company = function (name) {
	alert("Tên Công Ty : " + name);
}
company("QuocTuan.Info");
*/

/* Closuer 
function hello () {
	var name = "Tuan";
	return function () {
		alert(name);
	}
}
var hi = hello();
hi();
*/

function increment () {
	var s1 = 10;
	var thongbao = function () {
		alert(s1);
	}
	s1 = s1 + 1;
	return thongbao;
}
var tang = increment();
tang();