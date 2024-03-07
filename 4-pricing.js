import Currency from "./3-currency.js";

class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, "Amount");
    this._currency = this.validateCurrency(currency, "Currency");
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this.validateNumber(value, "Amount");
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this.validateCurrency(value, "Currency");
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  validateNumber(value, attribute) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}

export default Pricing;
