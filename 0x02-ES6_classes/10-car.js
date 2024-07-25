const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    // Initialize attributes with symbols
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Getter for brand
  get brand() {
    return this[_brand];
  }

  // Getter for motor
  get motor() {
    return this[_motor];
  }

  // Getter for color
  get color() {
    return this[_color];
  }

  // Method to clone the car instance
  cloneCar() {
    // Create a new instance of the same class with private attributes set to undefined
    const ClonedCar = Object.getPrototypeOf(this).constructor;
    const clone = new ClonedCar(undefined, undefined, undefined);
    
    // Copy the symbols from the original instance to the clone
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      clone[symbol] = this[symbol];
    });

    return clone;
  }
}
