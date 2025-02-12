//Đa hình
class Shape {
  draw() {
    console.log("Vẽ một hình dạng");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Vẽ hình tròn");
  }
}

class Square extends Shape {
  draw() {
    console.log("Vẽ hình vuông");
  }
}

let shapes = [new Circle(), new Square()];
shapes.forEach((shape) => shape.draw());
// Vẽ hình tròn
// Vẽ hình vuông
