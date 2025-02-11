//JSON là viết tắt của JavaScript Object Notation.
/* Json trong js có 2 phương thức:
JSON.stringify(): chuyển object thành string.
JSON.parse(): chuyển string thành object.
*/
//Phương thức JSON.stringify
let user = {
  name: "thach",
  age: 20,
};
let json = JSON.stringify(user);
console.log(json); // {"name":"thach","age":20}
console.log(typeof json); // string

//json với các kiểu dữ liệu
// số chuyển sang JSON vẫn là số
console.log(JSON.stringify(1)); // 1

// string chuyển sang JSON vẫn là string, nhưng sử dụng dấu ""
console.log(JSON.stringify("test")); // "test"

// boolean chuyển sang JSON vẫn là boolean
console.log(JSON.stringify(true)); // true

// mảng chuyển sang JSON
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// object chuyển sang JSON
console.log(JSON.stringify({ name: "thach", age: 20 })); // {"name":"thach","age":20}

// json  áp dụng được với object, array có nhiều tầng lồng nhau
let users = {
  name: "thach",
  age: 20,
  other: {
    address: "Quang Tri",
    phone: "0123456789",
  },
};
console.log(JSON.stringify(users));

// tùy biến với toJson
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

console.log(JSON.stringify(room)); // 23
console.log("================================================================");

//Phương thức JSON.parse
let jsons = '{"name":"thach","age":20}';
let userss = JSON.parse(json);
console.log(userss); //{ name: 'thach', age: 20 }
console.log(typeof userss); //Object
