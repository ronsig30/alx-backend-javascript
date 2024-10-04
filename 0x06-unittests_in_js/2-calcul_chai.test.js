let expect;

(async () => {
  const chai = await import('chai');
  expect = chai.expect;
})();

const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should return 6 for SUM (1.4, 4.5)', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for SUBTRACT (1.4, 4.5)', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 for DIVIDE (1.4, 4.5)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for DIVIDE (1.4, 0)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should return 0 for SUM (0, 0)', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it('should return -1 for SUBTRACT (0, 1)', () => {
    expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
  });

  it('should return "Error" for DIVIDE (1.4, 0)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
