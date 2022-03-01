// class MyClass {

// }

// const myInstance = new MyClass();


class Person {
    constructor(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secretField = () => secret;
    }
    sayHello() {
        console.log(`${this.name} says Hi! I am ${this.age} years old.`)
    }
    static cheer() {
        console.log(`Woohoo!`)
    }
    static compare(a, b) {
        return a.age - b.age;
    }
}

const pesho = new Person('Petar', 25);
const sasho = new Person('Sasho', 20)
const mary = new Person('Mary', 30, 'I`m in love with Pesho')

// console.log(`This is ${pesho.name}. He is ${pesho.age} years old.`)
// pesho.sayHello()

// console.log(pesho)
// console.log(sasho)

// pesho.sayHello()
// Person.cheer()
 
// const people = [pesho, sasho, mary]
// console.log(people.sort(Person.compare))

console.log(pesho)
console.log(mary)
console.log(pesho.secretField()) // instance pesho does not have a secret parameter, therefore the fnk returns undefined
console.log(mary.secretField()) // instance mary has a secret parameter, so the finc returns it. if we try to console.log the parameter itself though, it returns undefined
console.log(mary.secret)
 