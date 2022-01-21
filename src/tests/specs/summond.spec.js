/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('Summond scenarios', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  afterEach(function() {
    calculator = null;
  });

  it(`The sum of pos.int should return true if result is equal`, function() {
    expect(calculator.add(2, 1)).to.be.equal(3);
  });

  it(`The sum of pos.fracts should return true if result is equal`, function() {
    expect(calculator.add(2.1, 1)).to.be.equal(3.1);
  });

  it(`The sum of negatives should return true if result is equal`, function() {
    expect(calculator.add(-2.1, 1)).to.be.equal(-1.1);
  });

  it(`should return error if parameter is not number`, function() {
    const callWithError = () => calculator.add('1', 1);
    expect(callWithError).to.throw('Unsupported parameters are used');
  });

  it(`should return error if parameter is bigger than 99999999`, function() {
    const callWithError = () => calculator.add(999999999, 1);
    expect(callWithError).to.throw('Number is too big');
  });
});

