function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ``
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        
        set(value) {
            let [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first
                this.lastName = last
            }
        },
        configurable: true,
        enumerable: true
    })

    return result
}

let person1 = createPerson("Peter", "Ivanov");
console.log(person1.fullName); //Peter Ivanov
person1.firstName = "George";
console.log(person1.fullName); //George Ivanov
person1.lastName = "Peterson";
console.log(person1.fullName); //George Peterson
person1.fullName = "Nikola Tesla";
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla

console.log(`--------------------------------------`)

let person2 = createPerson("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName);  // Simon
console.log(person2.lastName);  // Simpson



// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     Object.defineProperty(this, "fullName", {
//         set: function(value) {
//           // set value + validation 
//         },
//         get: function() { 
//           // calculate and return value 
//         } 
//       }
//     ); 
//   }
  


