import Car from './10-car';

// Define symbols for private attributes
const brand = Symbol('brand');
const motor = Symbol('motor');
const color = Symbol('color');
const range = Symbol('range');

export default class EVCar extends Car {
  constructor(brandValue, motorValue, colorValue, rangeValue) {
    super(brandValue, motorValue, colorValue);
    this[brand] = brandValue;
    this[motor] = motorValue;
    this[color] = colorValue;
    this[range] = rangeValue;
  }

  // Getters for the attributes
  get brand() {
    return this[brand];
  }

  get motor() {
    return this[motor];
  }

  get color() {
    return this[color];
  }

  get range() {
    return this[range];
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Create a new Car instance with the existing attributes
    return new Car(this[brand], this[motor], this[color]);
  }
}
