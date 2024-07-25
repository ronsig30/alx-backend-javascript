import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this.amount;
  }

  // Setter for amount
  set amount(value) {
    this.amount = value;
  }

  // Getter for currency
  get currency() {
    return this.currency;
  }

  // Setter for currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }

    this.currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
