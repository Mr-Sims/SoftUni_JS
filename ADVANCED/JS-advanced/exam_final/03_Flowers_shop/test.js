const {flowerShop} = require('./flowerShop')
const {expect} = require('chai')

describe('flowerShop object tests', () => {
    describe('testing method calcPriceOfFlowers', () => {
        it('should throw if invalid input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 24, 5)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'num', 5)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, 'five')).to.throw()
        })
        it('should return correctly if input is correct', () => {
            let expected = `You need $25.00 to buy Rose!`
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 5)).to.equal(expected)
        })
    })
    describe('testing method checkFlowersAvailable', () => {
        it('should return correctly with existing element', () => {
            let arr = ["Rose", "Lily", "Orchid"]
            expect(flowerShop.checkFlowersAvailable('Rose', arr)).to.equal(`The Rose are available!`)
        })
        it('should return correctly with non-existing element', () => {
            let arr = ["Rose", "Lily", "Orchid"]
            expect(flowerShop.checkFlowersAvailable('Prim Rose', arr)).to.equal(`The Prim Rose are sold! You need to purchase more!`)
            expect(flowerShop.checkFlowersAvailable('Prim Rose', [])).to.equal(`The Prim Rose are sold! You need to purchase more!`)
        })
    })
    describe('testing method sellFlowers', () => {
        it('should throw if invalid input is given', () => {
            expect(() => flowerShop.sellFlowers('string', 1)).to.throw()
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'one')).to.throw()
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw()
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw()
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5)).to.throw()
        })
        it('should return correctly if input is valid', () => {
            let expected = 'Rose / Lily'
            let arr = ["Rose", "Lily", "Orchid"]
            expect(flowerShop.sellFlowers(arr, 2)).to.equal(expected)
        })
    })
})