// // keeping track of the whole line of fibonacci numbers
// function getFibonator() {
//     let numbers = [0, 1]

//     return function () {
//         let num = numbers[numbers.length - 1];
//         let len = numbers.length;

//         numbers.push(numbers[len - 1] + numbers[len - 2])
//         return num
//     }
// }


// keeping track only on the last 2 nums in the line
function getFibonator() {
    let num1 = 0;
    let num2 = 1;

    return () => {
        let currentNum = num2;
        let nextNum = num1 + num2;
        num1 = num2
        num2 = nextNum
        return currentNum
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

