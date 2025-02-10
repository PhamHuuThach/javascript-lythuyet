/* Hàm là 1 đoạn chương trinh độc lập, thực hiện 1 khối chức năng nào đó, sau khi thực hiện
kết thúc hàm sẽ tự động trả về kết quả cho hàm gọi nó. */
var yearTeo = 0;
//debugger;
function tinhtuoi(year) {
  return 2018 - year;
}
function thayDoiNamSinh() {
  yearTeo = 2000;
}
thayDoiNamSinh(); //Call Function
var age = tinhtuoi(yearTeo);
console.log("Tuoi Teo: " + age);

var tinhtuoi2 = function (year) {
  return 2018 - year;
};
var thayDoiNamSinh2 = function () {
  yearTeo = 2000;
};
thayDoiNamSinh2(); //Call Function
var age = tinhtuoi2(yearTeo);
console.log("Tuoi Teo: " + age);

var arowFunction = (year) => 2018 - year;
console.log("Tuoi Teo: " + arowFunction(yearTeo));
