const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should return 0 when inputs are -0.4 and 0.4', () => {
    const result = calculateNumber(-0.4, 0.4);
    assert.strictEqual(result, 0);
  });

  it('should handle negative numbers correctly', () => {
    const result = calculateNumber(-1.6, -3.2);
    assert.strictEqual(result, -5);
  });
});
