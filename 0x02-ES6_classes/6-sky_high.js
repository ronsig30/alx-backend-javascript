import Building from './5-building.js';

// Define the SkyHighBuilding class
export default class SkyHighBuilding extends Building {
  // Constructor with sqft and floors attributes
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft
    super(sqft);

    // Validate and assign the floors attribute
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
