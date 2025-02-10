//Cách 1 []
var arrStudent = [
  "Student 1",
  "Student 2",
  "Student 3",
  "Student 4",
  "Student 5",
  "Student 6",
];
console.log(
  "arrStudent: " + arrStudent + "\n",
  " arrStudent.length: " + arrStudent.length + "\n",
  " arrStudent[0]: " + arrStudent[0] + "\n",
  " arrStudent-1: " + arrStudent[arrStudent.length - 1]
);

//Cách 2 new Array
var arrStudent2 = new Array("Student 1", "Student 2", "Student 3");
console.log(
  "arrStudent2: " + arrStudent2 + "\n",
  " arrStudent2.length: " + arrStudent2.length + "\n",
  " arrStudent2[0]: " + arrStudent2[0]
);

//Object
//Cách 1
var student = {
  name: "thach",
  age: 20,
  other: {
    address: "Quang Tri",
    phone: "0123456789",
  },
  OlaOla: function () {
    console.log("OlaOla");
    console.log(this);
  },
};

console.log(
  "student: " + student + "\n",
  "student.name: " + student.name + "\n",
  "student.other.phone: " + student.other.phone + "\n",
  "student.other.address: " + student.other.address + "\n"
);
console.log("student.other", student.other);
student.OlaOla(); //Method của object

// this trỏ tới đối tượng hiện tại

//Cách 2
var student2 = new Object();
student2.name = "thach";
student2.age = 20;
student2.other = {
  address: "Quang Tri",
  phone: "0123456789",
};
student2.OlaOla = function () {
  console.log("OlaOla");
  console.log(this);
};
console.log(
  "student2: " + student2 + "\n",
  "student2.name: " + student2.name + "\n",
  "student2.other.phone: " + student2.other.phone + "\n",
  "student2.other.address: " + student2.other.address + "\n"
);
console.log("student2.other", student2.other);
student2.OlaOla();
