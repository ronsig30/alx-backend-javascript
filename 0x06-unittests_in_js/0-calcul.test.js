const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 4 for (1, 3)', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for (1, 3.7)', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for (1.2, 3.7)', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for (1.5, 3.7)', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Add a loop to generate additional tests
  for (let i = 0; i < 125; i++) {
    it(`should return ${Math.round(i) + Math.round(i + 1)} for (${i}, ${i + 1})`, function () {
      assert.strictEqual(calculateNumber(i, i + 1), Math.round(i) + Math.round(i + 1));
    });
  }
});
