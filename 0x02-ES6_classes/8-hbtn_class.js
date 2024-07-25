export default class HolbertonClass {
  // Constructor with size and location attributes
  constructor(size, location) {
    // Validate and assign the size attribute
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;

    // Validate and assign the location attribute
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // Override the valueOf method to return size when cast to a number
  valueOf() {
    return this._size;
  }

  // Override the toString method to return location when cast to a string
  toString() {
    return this._location;
  }
}
