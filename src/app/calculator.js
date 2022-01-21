/* eslint-disable linebreak-style */
/**
 *
 *
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator.
     * @memberof Calculator
     */
  constructor() {

  };

  /**
   *
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number} sum of numbers
   * @memberof Calculator
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Unsupported parameters are used');
    } if (a > 99999999 || b > 99999999) {
      throw new Error('Number is too big');
    } else {
      return a+b;
    }
  };

  /**
   *
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number} Multiplication of numbers
   * @memberof Calculator
   */
  multiply(a, b) {
    if (typeof a!== 'number' || typeof b !== 'number') {
      throw new Error('Unsupported parameters are used');
    } if (a > 99999999 || b > 99999999) {
      throw new Error('Number is too big');
    } else {
      return a*b;
    }
  }
}

module.exports = Calculator;
