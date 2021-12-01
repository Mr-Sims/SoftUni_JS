const {expect, assert} = require('chai');

const {sum} = require('./sumNumbers');

// describe('Demo Test', () => {
//     // it('passing test', () => {
//     //     'do nothing';
//     // });

//     // it('failing test', () => {
//     //     throw Error('on purpouse'); 
//     // })

//     it ('works with 5 and 3', () => {
//         //with chai
//         // assert.equal(sum(5,3), 8)
//         // expect(sum(5,3)).to.equal(8);
//         expect(sum(5,3)).to.be.closeTo(8, 0.9);

//         //without chai
//         // if (sum(5, 3) != 8) {
//         //     throw Error(`result s ${sum(5, 3)}`)
//         // }
//     });
// });


describe('sumNumbers', () => {

    it('works with [2, 2]', () => {
        expect(sum([2, 2])).to.equal(4)
    })
});
