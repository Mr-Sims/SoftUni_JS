const { createCalculator } = require('../ex_07_addSubtract');

const { expect } = require('chai');

describe('ex_07_Calculator', () => {
    let instance;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('returns correctly the initial state of zero', () => {
        expect(instance.get()).to.equal(0);
    });

    it('adds correctly with a positive int', () => {
        instance.add(5);
        expect(instance.get()).to.equal(5)
    });

    it('adds correctly with multyple nums', () => {
        instance.add(1);
        instance.add(3);
        expect(instance.get()).to.equal(4);
    });

    it('subrtacts correctly with a positive int', () => {
        instance.subtract(5);
        expect(instance.get()).to.equal(-5)
    });

    it('adds incorrectly and returns NaN with a non-number parameter', () => {
        instance.add('a');
        expect(instance.get()).to.be.NaN
    });

    it('subtracts incorrectly and returns NaN with a non-number parameter', () => {
        instance.subtract('a');
        expect(instance.get()).to.be.NaN
    });

    it('adds and subtracts correctly with multyple nums', () => {
        instance.add(1);
        instance.add(3);
        instance.subtract(5)
        expect(instance.get()).to.equal(-1);
    });

});