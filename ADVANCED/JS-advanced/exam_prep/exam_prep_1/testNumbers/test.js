const {testNumbers} = require('./testNumbers');

const {expect} = require('chai');

describe('testNumbers.js unit tests', () => {
    describe('sum numbers func', () => {
        it('should return undefined if invalid input is given', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
        });
        it('should return correct if valid inputs are given', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
    });

    describe('numberChecker func', () => {
        it('should throw error if input is NaN', () => {
            expect(() => testNumbers.numberChecker('NaN')).to.throw();
        });

        it('should return correctly if input is an even num', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('should return correctly if input is an odd num', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray func', () => {
        it('should return correctly when input is an array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('should return NaN if input is an array that contains string', () => {
            expect(testNumbers.averageSumArray([1, 'd'])).to.be.NaN;
        });
    });
});