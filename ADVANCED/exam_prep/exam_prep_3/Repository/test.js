const { expect } = require('chai');
let { Repository } = require("./solution.js");

describe("Tests class Repository", function () {
    let properties = {
                name: 'string',
                age: 'number',
                birthday: 'object',
            }
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    }
    

    describe("test constructor", function () {
        it("should initialize properly with given props", () => {
            
            let repo = new Repository(properties)
            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal(properties)
        });
        it('should have property data on init', () => {
            // let properties = {
            //     name: 'string',
            //     age: 'number',
            //     birthday: 'object',
            // }
            let repo = new Repository(properties)
            expect(repo).to.have.property('data');
            expect(typeof repo.data).is.equal('object');
            expect(repo.data).instanceOf(Map)
        });
    });

    describe('add entity', () => {
        it('should properly add a new entity', () => {

        })
    })

    describe('Get count', () => {
        it('should return number of entries', () => {
            let repo = new Repository(properties)
            repo.add(entity)
            expect(repo.count).to.equal(1)
        })
    })

});
