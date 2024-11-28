const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    });

    it('should return 0 for inputs -0.4 and 0.4', () => {
      const result = calculateNumber('SUM', -0.4, 0.4);
      expect(result).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    });

    it('should return 6 for inputs 5.7 and 0.3', () => {
      const result = calculateNumber('SUBTRACT', 5.7, 0.3);
      expect(result).to.equal(6);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.be.closeTo(0.2, 0.001); // Use closeTo for floating point numbers
    });

    it('should return "Error" for inputs 1.4 and 0', () => {
      const result = calculateNumber('DIVIDE', 1.4, 0);
      expect(result).to.equal('Error');
    });

    it('should return 2 for inputs 4.4 and 2.1', () => {
      const result = calculateNumber('DIVIDE', 4.4, 2.1);
      expect(result).to.equal(2);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error);
    });
  });
});
