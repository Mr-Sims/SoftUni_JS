const { expect } = require('chai');

const { isOddOrEven } = require('../ex_02_isOddOrEven');

describe('ex_02_isOddOrEven.js', () => {

    describe('happy path', () => {

        it('returns odd when string with odd lenght is given', () => {
            expect(isOddOrEven('pudes')).to.equal('odd');
        });

        it('returns even when string with even lenght is given', () => {
            expect(isOddOrEven('bobina')).to.equal('even');
        });
    });

    describe('Invalid parameters', () => {
        it('returns undefined if parameter is a number', () => {
            expect(isOddOrEven(5)).to.be.undefined;
        });
        it('returns undefined if parameter is an array', () => {
            expect(isOddOrEven([1, 2])).to.be.undefined;
        });
        it('returns correctly if multiple parameters are given and the first one is correct', () =>{
            expect(isOddOrEven('5', [1, 2, 4], 5)).to.equal('odd');
        });
        it('returns undefined if multiple parameters are given and the first one is incorrect', () =>{
            expect(isOddOrEven(5, [1, 2, 4], 'string')).to.be.undefined;
        });
    });
});