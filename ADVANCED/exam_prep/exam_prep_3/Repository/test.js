const { expect } = require('chai');
let { Repository } = require("./solution.js");

describe("Tests class Repository", function () {
    let properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe("test constructor", function () {
        it("should initialize properly with given props", () => {
            let repo = new Repository(properties);
            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal(properties);
        });
        it('should have property data on init', () => {
            let repo = new Repository(properties);
            expect(repo).to.have.property('data');
            expect(typeof repo.data).is.equal('object');
            expect(repo.data).instanceOf(Map);
        });
    });

    describe('add entity', () => {
        it('should properly add a new entity', () => {
            let repo = new Repository(properties);
            expect(repo.add(entity)).to.equal(0);
            expect(repo.add(entity)).to.equal(1);
            expect(() => repo.add({name: 0, age: 1, birthday: { date: 0 }})).to.throw(TypeError)
        });
    });

    describe('Get count', () => {
        it('should return number of entries', () => {
            let repo = new Repository(properties);
            expect(repo.count).to.equal(0);

            repo.add(entity);
            repo.add(entity);
            expect(repo.count).to.equal(2);
            expect(() => repo.add({ name: 0, age: 1, birthday: { date: 0 } }
            )).to.throw(TypeError)
        });
    });

    describe('getId method', () => {
        it('should return entity with correct Id', () => {
            let repo = new Repository(properties);
            let entity1 = {
                name: "Stamat",
                age: 34,
                birthday: new Date(1984, 7, 23)
            };
            repo.add(entity);
            repo.add(entity1);
            let expected = repo.getId(0);
            expect(expected).to.equal(entity);
            let expected1 = repo.getId(1);
            expect(expected1).to.equal(entity1);
            expect(expected1).to.deep.equal(entity1);
            expect(repo.data.get(1)).to.deep.equal(entity1)

        });
        it('should throw Error if Id does not exist', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.getId(5)).to.throw(`Entity with id: 5 does not exist!`);
        });
    });

    describe('update entity method', () => {
        it('should throw error if no such id is present', () => {
            let repo = new Repository(properties);
            let entity1 = {
                name: "Stamat",
                age: 34,
                birthday: new Date(1984, 7, 23)
            };
            repo.add(entity)
            expect(() => repo.update(1, entity1)).to.throw(`Entity with id: 1 does not exist!`);
            expect(() => repo.update(0, { name: 0, age: 1, birthday: { date: 0 } }
            )).to.throw(TypeError)
            expect(() => repo.update(0, { name: 'PeterPiper', age: 'sfsdf', birthday: { date: 0 } }
                )).to.throw(TypeError)
                expect(() => repo.update(0, { name: 'PeterPiper', age: 15, birthday: 'object' }
                )).to.throw(TypeError)
        });
        it('should update entity coorectly if data is valid', () => {
            let repo = new Repository(properties);
            let entity1 = {
                name: "Stamat",
                age: 34,
                birthday: new Date(1984, 7, 23)
            };
            repo.add(entity);
            repo.update(0, entity1);
            expect(repo.getId(0)).to.equal(entity1);
        });
    });

    describe('delete entity method', () => {
        it('should throw if entity id is wrong', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.del(1)).to.throw(`Entity with id: 1 does not exist!`);
        });
        it('should delete entity correctly', () => {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(repo.getId(0)).to.equal(entity);
            expect(repo.count).to.equal(1);
            repo.del(0);
            expect(() => repo.getId(0)).to.throw(`Entity with id: 0 does not exist!`);
            expect(repo.count).to.equal(0);
            expect(repo.data.has(0)).to.eq(false)

            expect(() => repo.del(-1)).to
                .throw(`Entity with id: -1 does not exist!`)
        });
        
    });

    describe('_validate entity method', () => {
        it('should throw error if entity does not have correct properties', () => {
            let repo = new Repository(properties);
            let entity1 = {
                name: "Stamat",
                age: 34,
            };
            let entity2 = {
                nome: 'Stamat'
            };
            let entity3 = {
                name: 'Stamat',
                time: 34
            };
            expect(() => repo._validate(entity1)).to.throw(`Property birthday is missing from the entity!`);
            expect(() => repo._validate(entity2)).to.throw(`Property name is missing from the entity!`);
            expect(() => repo._validate(entity3)).to.throw(`Property age is missing from the entity!`);
            expect(() => repo.add(entity3)).to.throw(`Property age is missing from the entity!`);
        });
        it('should throw error if entity property is not of correct type', () => {
            let repo = new Repository(properties);
            let entity1 = {
                name: "Stamat",
                age: 34,
                birthday: '23.08.2021'
            };
            expect(() => repo._validate(entity1)).to.throw(`Property birthday is not of correct type!`);
            expect(() => repo.add(entity1)).to.throw(`Property birthday is not of correct type!`);
        });
    });
});
