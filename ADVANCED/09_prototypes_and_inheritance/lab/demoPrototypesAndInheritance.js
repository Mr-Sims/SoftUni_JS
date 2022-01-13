// const person = {
//     name: 'Peter',
//     age: 28
// }
// console.log(Object.getOwnPropertyDescriptors(person))

// console.log(person)



// console.log(Object.defineProperty(person, 'lastName', {
//     value: 'Jackson'
// }))

// console.log(Object.getOwnPropertyDescriptors(person))


// for (let key in person) {
//     console.log(key, '->', person[key])
// }




// function Dog() {}
// console.log(Dog.prototype)
// // console.log(Dog.__proto__)

// Dog.prototype.breed = 'german shepperd'

// // console.log(Dog.prototype)
// // console.log(Dog.__proto__)


// let myDog = new Dog

// console.log(myDog.__proto__)

const myProto = {
    sayHi() {
        console.log(`${this.name} says hi!`)
    }
}

const instance = Object.create(myProto)

instance.sayHi()
instance.name = 'Peter'

instance.sayHi()