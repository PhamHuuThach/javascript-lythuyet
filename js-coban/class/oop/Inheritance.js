// Ké thừa
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Âm thanh của động vật");
  }
}

// Lớp Dog kế thừa Animal
class Dog extends Animal {
  makeSound() {
    console.log(this.name + " sủa: Gâu gâu!");
  }
}

let dog = new Dog("Buddy");
dog.makeSound(); // Buddy sủa: Gâu gâu!
