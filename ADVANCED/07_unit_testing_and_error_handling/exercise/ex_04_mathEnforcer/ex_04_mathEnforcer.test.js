const { expect } = require('chai');

const { mathEnforcer } = require('../ex_04_mathEnforcer');

describe('ex_04_mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct with an integer param', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('returns correctly with a floating point num', () => {
            expect(mathEnforcer.addFive(4.99)).to.be.closeTo(10, 0.01);
        });

        it('returns undefined when incorrect type param is given', () => {
            expect(mathEnforcer.addFive('string')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;

        });

        it('returns correctly when a negative integer is given', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
    });

    describe('subtractTen', () => {
        it('should return correctly when int num is given as param', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });

        it('should return correctly if float is given as param', () => {
            expect(mathEnforcer.subtractTen(14.99)).to.be.closeTo(5, 0.01);
        });

        it('should return correctly if negateve int is given as param', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('should return undefined when invalid type of parameter is given', () => {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('should return correctly when both params are ints', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });

        it('should return correctly when one param is int and the other is a positive float', () => {
            expect(mathEnforcer.sum(5, 4.99)).to.be.closeTo(10, 0.01);
        });

        it('should return correctly if params are negative or zero', () => {
            expect(mathEnforcer.sum(-1, 5)).to.equal(4);
            expect(mathEnforcer.sum(-1, -5)).to.equal(-6);
            expect(mathEnforcer.sum(1, -5)).to.equal(-4);
            expect(mathEnforcer.sum(-1, 0)).to.equal(-1);
            expect(mathEnforcer.sum(-1, -4.99)).to.be.closeTo(-6, 0.01);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(10, -10)).to.equal(0);
            expect(mathEnforcer.sum(4.99, 5.01)).to.equal(10);
            expect(mathEnforcer.sum(4.99, 5.00)).to.be.closeTo(10, 0.01);

        });

        it('shoudlreturn undefined when a param is of incorrect type', () => {
            expect(mathEnforcer.sum('string', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, 'string')).to.be.undefined;
            expect(mathEnforcer.sum('string', [5])).to.be.undefined;
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
            expect(mathEnforcer.sum([], '')).to.be.undefined;


        });

        it('should return undefined when incorrect number of parameters is given', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(1)).to.be.undefined;
            expect(mathEnforcer.sum(1,1,1)).to.equal(2);
        });
    });
});