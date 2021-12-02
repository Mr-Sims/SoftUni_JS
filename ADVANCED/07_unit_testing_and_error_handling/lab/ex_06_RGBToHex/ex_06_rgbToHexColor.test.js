const { rgbToHexColor } = require('../ex_06_RGBToHex');
const { expect } = require('chai');

describe('ex_06_RGB To Hex', () => {

    describe('happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
        });

        it('converts dark blue to #234465', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
        });
    });

    describe('Invalid parameter', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.equal(undefined)
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.equal(undefined)
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.equal(undefined)
        });
        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.equal(undefined)
        });
        it('returns undefined for one invalid parameter', () => {
            expect(rgbToHexColor(red=0, green=0)).to.equal(undefined)
        });
    })

});
