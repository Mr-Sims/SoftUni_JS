const { PaymentPackage } = require('./paymentPackage')
const { expect } = require('chai')

describe('Testing PaymentPackage class', () => {

    describe('testing constructor and setters', () => {
        it('should instantiate correctly', () => {
            let package = new PaymentPackage('string', 10)
            expect(package.name).to.equal('string')
            expect(package.value).to.equal(10)
            expect(package.VAT).to.equal(20)
            expect(package.active).to.be.true
        })
        it('should throw error if input is of incorrect type and length', () => {
            // let package = new PaymentPackage('string', 10)
            expect(() => new PaymentPackage(10, 10)).to.throw()
            expect(() => new PaymentPackage('', 10)).to.throw()
            expect(() => new PaymentPackage('string', 'string')).to.throw()
            expect(() => new PaymentPackage('string', -10)).to.throw()
            expect(() => new PaymentPackage('string')).to.throw()
            expect(() => new PaymentPackage(['abc'], 123)).to.throw('Name must be a non-empty string');

        });
    })
    describe('testing name getters and setters', () => {
        it('should set name correctly', () => {
            let package = new PaymentPackage('string', 10)
            expect(package.name = 'new string').to.equal('new string')
        })
        it('should throw if setter name receives wrong input', () => {
            let package = new PaymentPackage('string', 10)
            expect(() => package.name = 10).to.throw()
            expect(() => package.name = '').to.throw()
        })
    })
    describe('testing .value getters and setters', () => {
        it('should set value correctly', () => {
            let package = new PaymentPackage('string', 10)
            expect(package.value = 50).to.equal(50)
        })
        it('should throw if setter value receives wrong input', () => {
            let package = new PaymentPackage('string', 10)
            expect(() => package.value = 'string').to.throw()
            expect(() => package.value = -1).to.throw()
        })
    })
    describe('testing .VAT getters and setters', () => {
        it('should set VAT correctly', () => {
            let package = new PaymentPackage('string', 10)
            expect(package.VAT = 50).to.equal(50)
        })
        it('should throw if setter VAT receives wrong input', () => {
            let package = new PaymentPackage('string', 10)
            expect(() => package.VAT = -1).to.throw('VAT must be a non-negative number')
            expect(() => package.VAT = 'string').to.throw('VAT must be a non-negative number')
            expect(() => package.VAT = [123]).to.throw('VAT must be a non-negative number');
        })
    })


    describe('testing .active setters and getters', () => {
        it('should set active correctly', () => {
            let package = new PaymentPackage('string', 10)
            expect(package.active = false).to.be.false
        })
        it('should throw if setter active receives wrong input', () => {
            let package = new PaymentPackage('string', 10)
            expect(() => package.active = 1).to.throw('Active status must be a boolean')
            expect(() => package.active = null).to.throw('Active status must be a boolean')

        })
    })

    describe('testing toString() method', () => {
        it('should return correctly if active == true', () => {
            let package = new PaymentPackage('string', 100)
            let expected = 'Package: string\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120'
            expect(package.toString()).to.equal(expected)
        })
        it('should return correctly if active == false', () => {
            let package = new PaymentPackage('string', 100)
            package.active = false
            let expected = 'Package: string (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120'
            expect(package.toString()).to.equal(expected)
        })
        it('should return correctly if input is an array of instances', () => {
            const packages = [
                new PaymentPackage('HR Services', 1500),
                new PaymentPackage('Consultation', 800),
                new PaymentPackage('Partnership Fee', 7000),
            ];
            let expected = `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800\nPackage: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960\nPackage: Partnership Fee\n- Value (excl. VAT): 7000\n- Value (VAT 20%): 8400`
            expect(packages.join('\n')).to.equal(expected)
        })
    })
})