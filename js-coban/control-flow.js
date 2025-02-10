//Toán tử logic(AND-&&. OR-||, NOT-!)
var name = "thach"; // Biến nâng cấp
var age = 20; // Biến nâng cấp
var isMarried = true; // Biến nâng cấp
var isStudent = false; // Biến nâng cấp
console.log(name && age && isMarried && isStudent);
// Output: false
console.log(name || age || isMarried || isStudent);
// Output: thach
console.log(!isMarried);
// Output: false
console.log(!isStudent);
// Output: true

// Câu đièu kiện if else
var name = "thach";
var age = 20;
var isMarried = false;
if (isMarried) {
  console.log(name + " is married");
} else {
  console.log(name + " is not married");
}

// Câu điều kiện switch case
var name = "thach";
var age = 20;
var isMarried = false;
switch (true) {
  case isMarried:
    console.log(name + " is married");
    break;
  default:
    console.log(name + " is not married");
    break;
}

// Câu điều kiện while
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Câu điều kiện for
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// Câu điều kiện for of
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
  var item = arr_1[_i];
  console.log(item);
}
// Câu điều kiện for in
var obj = {
  name: "thach",
  age: 20,
  isMarried: false,
};
for (var key in obj) {
  console.log(key + ": " + obj[key]);
}

/*Falsy and Truthy
Falsy: 0, '', undefined, null, NaN,false
Truthy: All other values
*/
//Falsy: 0
console.log(!!0);
//Falsy: ''
console.log(!!"");
//Falsy: undefined
console.log(!!undefined);
//Falsy: null
console.log(!!null);
//Falsy: NaN
console.log(!!NaN);
//Falsy: false
console.log(!!false);

//Truthy: All other values
console.log(!!"thach");
console.log(!!1);
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!function () {});

// Câu điều kiện ternary
var name = "thach";
var age = 20;
var isMarried = false;
isMarried
  ? console.log(name + " is married")
  : console.log(name + " is not married");
/*
"===": Vừa so sánh kiểu dữ liệu, vừa so sánh giá trị
"==": Chi sở sánh giá trị
*/
