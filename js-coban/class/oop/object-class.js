class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(this.brand + " đang khởi động...");
  }
}

let car2 = new Car("BMW", "X5", 2025);
car2.start(); // BMW đang khởi động...
