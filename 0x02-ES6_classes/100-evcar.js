import Car from './10-car';

// Define symbols for private attributes
const range = Symbol('range');

export default class EVCar extends Car {
  constructor(brandValue, motorValue, colorValue, rangeValue) {
    super(brandValue, motorValue, colorValue);
    this[range] = rangeValue;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Create a new Car instance with the existing attributes
    return new Car(this[Car.prototype[Symbol.for('brand')]],
      this[Car.prototype[Symbol.for('motor')]],
      this[Car.prototype[Symbol.for('color')]]);
  }
}
