 class bike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  bike() {
    console.log(this.brand + " " + this.model + " is driving");
  }
}

let bike1 = new bike("Honda", "2023");
bike1.bike(); 