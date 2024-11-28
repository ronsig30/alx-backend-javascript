const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(result, 6);
    });

    it('should return 0 for inputs -0.4 and 0.4', () => {
      const result = calculateNumber('SUM', -0.4, 0.4);
      assert.strictEqual(result, 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(result, -4);
    });

    it('should return 6 for inputs 5.7 and 0.3', () => {
      const result = calculateNumber('SUBTRACT', 5.7, 0.3);
      assert.strictEqual(result, 6);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(result, 0.2);
    });

    it('should return "Error" for inputs 1.4 and 0', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(result, 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error);
    });
  });
});
