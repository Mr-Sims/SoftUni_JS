// function contextPrinter() {
//     console.log(this)
// }

// function myFunc() {

// }

// const myObj = {
//     name: 'Peter', 

// }

// contextPrinter.apply(myObj) // 

// document.querySelector('button').addEventListener('click', contextPrinter)


// call example - Calls a function with a given this value and arguments provided individually

// const sharePersonalInfo = function (...activities) {
//     let info = `Hello, my name is ${this.name} and` + + `I'm a ${this.profession}.\n`;
//     info += activities.reduce((acc, curr) => {
//         let el = `--- ${curr}\n`;
//         return acc + el;
//     }, "My hobbies are:\n").trim(); return info;
// }

// const firstPerson = { name: "Peter", profession: "Fisherman" };
// console.log(sharePersonalInfo.call(firstPerson, 'biking', 'swimming', 'football'));


// apply example - Calls a function with a given this value, and arguments provided as an array

// const firstPerson = {
//       name: "Peter", 
//       prof: "Fisherman", 
//       shareInfo: function () {
//         console.log(`${this.name} works as a ${this.prof}`);
//       }
//     };
//     const secondPerson = { name: "George", prof: "Manager" };
//     firstPerson.shareInfo.apply(secondPerson);
//     firstPerson.shareInfo()


// bind example - The bind() method creates a new function 
// Has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called
//Calling the bound function generally results in the execution of its wrapped function


// const x = 42;
// const getX = function () {
//   return this.x;
// }
// const modul = {x, getX};

// const unboundGetX = modul.getX;
// console.log(unboundGetX()); // undefined

// const boundGetX = unboundGetX.bind(modul);
// console.log(boundGetX()); // 42
