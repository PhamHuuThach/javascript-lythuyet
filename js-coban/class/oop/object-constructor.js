function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log(this.brand + " đang khởi động...");
  };
}

let car1 = new Car("Honda", "Civic", 2024);
car1.start(); // Honda đang khởi động...
