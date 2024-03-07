class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, "Square Feet");
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = this.validateNumber(value, "Square Feet");
  }

  evacuationWarningMessage() {
    throw new Error(
      "Class extending Building must override evacuationWarningMessage"
    );
  }

  validateNumber(value, attribute) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}

export default Building;
