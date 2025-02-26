class Person{
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
// console.log('' + person)


// alternate with Object.assign()

// class Person{
//     constructor(firstName, lastName, age, email) {
//         Object.assign(this, {
//             firstName,
//             lastName,
//             age,
//             email
//         })
//     }
//     toString() {
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//     }
// }