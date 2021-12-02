const {expect} = require('chai');

const {isSymmetric} = require('../ex_05_checkForSymmetry');

describe('isSymmetric', () => {
    it('returns true for a symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false for non-symetric array', ()=>{
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('returns false for incorrect type of parameter', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('returns false for type-different symmetric arays', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    })
    // test overloading

    it('returns true for symmetry of odd number of elements', () =>  {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it ('returns true for symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it ('returns true for symmetric array of strings with odd number of elements', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    });

    it ('returns false for symmetric stringparameter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it ('returns false for non-symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'c', 'a'])).to.be.false;
    });

    it ('returns true for an array with only one num', () => {
        expect(isSymmetric([1])).to.be.true;
    });
});