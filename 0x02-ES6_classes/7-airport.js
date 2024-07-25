export default class Airport {
  // Constructor with name and code attributes
  constructor(name, code) {
    // Validate and assign the name attribute
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    // Validate and assign the code attribute
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Override the toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
