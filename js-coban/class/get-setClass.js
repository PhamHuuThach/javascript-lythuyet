class User {
  constructor(name) {
    this.name = name; // gọi hàm setter
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value) {
    if (value.length < 1) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

// Sử dụng:
let user = new User("thach");
console.log(user.name); // thach

user = new User(""); // Name is too short.

//Tạo tên phương thức qua biểu thức
/*
class User {
    ["say" + "Hi"]() {
      console.log("Hello");
    }
  }
  
  new User().sayHi(); // Hello
  */

//Thuộc tính trong class
/*
class User {
  // thêm thuộc tính name vào class
  name = "thach";
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
new User().sayHi(); // Hello, tahch!
*/
