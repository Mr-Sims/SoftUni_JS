const { expect } = require('chai');

const { lookupChar } = require('../ex_03_lookupChar');

describe('ex_03_lookupChar', () => {
    describe('happy case', () => {
        it('returns the correct char when valid parameters are given', () => {
            expect(lookupChar('string', 0)).to.equal('s');
            expect(lookupChar('string', 5)).to.equal('g');

        });
    });

    describe('Invalid parameter type', () => {

        it('returns undefined with a valid string-type and invalid index-type', () => {
            expect(lookupChar('string', [1, 2])).to.be.undefined;
        });
        it('returns undefined with invalid string-type and valid index-type', () => {
            expect(lookupChar(['string'], 0)).to.be.undefined; 
        });
        it('returns undefined when both params are invalid type', () => {
            expect(lookupChar(5, 'string')).to.be.undefined;
        });
        
        it('returns undefined when floating-point numbr is given as index', () => {
            expect(lookupChar('string', 3.4)).to.be.undefined;
        });
        it('returns undefined when only one parameter is given even if it is of correct type', () => {
            expect(lookupChar('string')).to.be.undefined;
        })
    });

    describe('Invalid parameter values', () => {
        it('returns "Incorrect index" when string len is smaller than index num', () => {
            expect(lookupChar('string', 10)).to.equal('Incorrect index');
        });
        it('returns "Incorrect index" when string len is equal index num', () => {
            expect(lookupChar('string', 6)).to.equal('Incorrect index');
        });
        it('returns "Incorrect index" when index num is less than zero', () => {
            expect(lookupChar('string', -1)).to.equal('Incorrect index');
        });
    });
});