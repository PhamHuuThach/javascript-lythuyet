class User {
  // hàm khởi tạo
  constructor(name, age) {
    // khởi tạo thuộc tính `this.name` với giá trị bằng `name` ...v
    this.name = name;
    this.age = age;
  }
  // phương thức
  hello() {
    console.log("Hello " + this.name);
  }
}
user = new User("thach", 20);
user.hello();
// class là functions
console.log(typeof User);

// User.prototype.constructor chính là User
console.log(User === User.prototype.constructor); // true

// Các phương thức được lưu trong User.prototype
console.log(User.prototype.hello); // code của phương thức hello

// Có tất cả 2 phương thức trong prototype
console.log(Object.getOwnPropertyNames(User.prototype));

//Class expression
const User2 = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("Hello " + this.name);
  }
};
