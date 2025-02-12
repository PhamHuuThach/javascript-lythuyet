let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  start: function () {
    console.log(this.brand + " đang khởi động...");
  },
};
car.start(); // Toyota đang khởi động...
