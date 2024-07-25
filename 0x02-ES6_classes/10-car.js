const brand = Symbol('brand');
const motor = Symbol('motor');
const color = Symbol('color');

export default class Car {
  constructor(brandValue, motorValue, colorValue) {
    // Initialize attributes with symbols
    this[brand] = brandValue;
    this[motor] = motorValue;
    this[color] = colorValue;
  }

  // Getter for brand
  get brand() {
    return this[brand];
  }

  // Getter for motor
  get motor() {
    return this[motor];
  }

  // Getter for color
  get color() {
    return this[color];
  }

  // Method to clone the car instance
  cloneCar() {
    // Create a new instance of the same class with private attributes set to undefined
    const ClonedCar = Object.getPrototypeOf(this).constructor;
    const clone = new ClonedCar(undefined, undefined, undefined);

    // Copy the symbols from the original instance to the clone
    Object.getOwnPropertySymbols(this).forEach((symbol) => {
      clone[symbol] = this[symbol];
    });

    return clone;
  }
}
