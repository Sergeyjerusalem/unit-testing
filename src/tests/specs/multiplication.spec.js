/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('Multiplication scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = null;
  });

  it(`The mul of pos.int should return true if result is equal`, function() {
    expect(calculator.multiply(2, 1)).to.be.equal(2);
  });

  it(`The mul of pos.fracts should return true if result is equal`, function() {
    expect(calculator.multiply(2.1, 1)).to.be.equal(2.1);
  });

  it(`The mul of negatives should return true if result is equal`, function() {
    expect(calculator.multiply(-2.1, 1)).to.be.equal(-2.1);
  });

  it(`The mul of pos.int and 0 should return true if result is 0`, function() {
    expect(calculator.multiply(2, 0)).to.be.equal(0);
  });

  it(`should return error if parameter is not number`, function() {
    const callWithError = () => calculator.multiply('1', 1);
    expect(callWithError).to.throw('Unsupported parameters are used');
  });

  it(`should return error if parameter is bigger than 99999999`, function() {
    const callWithError = () => calculator.multiply(999999999, 1);
    expect(callWithError).to.throw('Number is too big');
  });
});
