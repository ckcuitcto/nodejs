console.log("Bat dau");


// bỏ qua. chạy hết rồi ms chạy cái này
process.nextTick(function(){
    console.log("thuc thi");
});

console.log("ket thuc");