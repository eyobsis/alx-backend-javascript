import Building from "./5-building.js";

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class
    this._floors = this.validateNumber(floors, "Floors");
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = this.validateNumber(value, "Floors");
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  validateNumber(value, attribute) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}

export default SkyHighBuilding;
