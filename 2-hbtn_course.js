class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, "Name");
    this._length = this.validateNumber(length, "Length");
    this._students = this.validateArray(students, "Students");
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateString(value, "Name");
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateNumber(value, "Length");
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateArray(value, "Students");
  }

  validateString(value, attribute) {
    if (typeof value !== "string") {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}

export default HolbertonCourse;
