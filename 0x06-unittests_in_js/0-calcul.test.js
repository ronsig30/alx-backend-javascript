const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round numbers correctly and handle edge cases', () => {
    assert.strictEqual(calculateNumber(-1.5, -3.5), -4); // Corrected expectation
    assert.strictEqual(calculateNumber(-1.4, -3.4), -4);
  });

  it('should work with zeros', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});
