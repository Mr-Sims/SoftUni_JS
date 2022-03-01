class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    toString() {
        let classname = this.constructor.name;
        return `${classname} (name: ${this.name}, email: ${this.email})`;
    }
}

function extend(classDef) {
    classDef.prototype.species = 'Human';
    classDef.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extend(Person)
let p = new Person('Pesho', 'email@hit.bg')

console.log(p.species) // 'Human'
console.log(p.toSpeciecString()) // I am Human. Person(name: Pesho, email: email@hit.bg) 