const brand = Symbol('brand');
const motor = Symbol('motor');
const color = Symbol('color');

export default class Car {
  constructor(brandValue, motorValue, colorValue) {
    this[brand] = brandValue;
    this[motor] = motorValue;
    this[color] = colorValue;
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(
      this[brand],
      this[motor],
      this[color],
    );
  }
}

// Define symbols as properties for access in subclass
Car.prototype[brand] = brand;
Car.prototype[motor] = motor;
Car.prototype[color] = color;
