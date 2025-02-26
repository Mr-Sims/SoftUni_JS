function result() {
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
    
    const anna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')
    const softuni = new Person('SoftUni');
    const stephan = new Person('Stephan', 'Johnson', 25);
    const gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    return [anna, softuni, stephan, gabriel]

}


let getPersons = result;
let persons = getPersons()
console.log(Array.isArray(persons))