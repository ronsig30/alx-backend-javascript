import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
    it('should return the sum of rounded numbers', function () {
        expect(calculateNumber(1.4, 4.5)).to.equal(6);
    });
});
