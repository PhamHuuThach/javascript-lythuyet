//Array Methods
var arrayDemo = ["Pham", "Thach", 22, true];
console.log(arrayDemo.length); //4
console.log(arrayDemo[arrayDemo.length - 1]); //true
console.log("arrayDemo.push(113):  " + arrayDemo.push(113)); // thêm phần tử vào phía sau của mảng
console.log(arrayDemo.length); //5
console.log(arrayDemo[arrayDemo.length - 1]); //113

console.log("arrayDemo.pop():  " + arrayDemo.pop()); //xóa phần tử cuối mảng
console.log(arrayDemo.length); //4
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.shift():  " + arrayDemo.shift()); //xóa phần tử đầu mảng
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.unshift(113):  " + arrayDemo.unshift(113)); //thêm phần tử vào phía đầu mảng
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.splice(2, 2):  " + arrayDemo.splice(2, 2)); //xóa 2 phần tử trong mảng
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.slice(2, 3):  " + arrayDemo.slice(2, 3)); //làm mảng con
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.indexOf(22):  " + arrayDemo.indexOf(22)); //tra ve vi tri cua phan tu trong mang
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.lastIndexOf(22):  " + arrayDemo.lastIndexOf(22)); //tra ve vi tri cua phan tu cuoi cung trong mang
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.includes(22):  " + arrayDemo.includes(22)); //kiem tra mang co phan tu nay khong
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.reverse():  " + arrayDemo.reverse()); //dao nguoc mang
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.sort():  " + arrayDemo.sort()); //sap xep mang
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.toString():  " + arrayDemo.toString()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.join():  " + arrayDemo.join()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.concat():  " + arrayDemo.concat()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.fill():  " + arrayDemo.fill()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.copyWithin():  " + arrayDemo.copyWithin()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.entries():  " + arrayDemo.entries()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.keys():  " + arrayDemo.keys()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);

console.log("arrayDemo.values():  " + arrayDemo.values()); //chuyen mang thanh chuoi
console.log(arrayDemo.length);
console.log(arrayDemo[arrayDemo.length - 1]);
