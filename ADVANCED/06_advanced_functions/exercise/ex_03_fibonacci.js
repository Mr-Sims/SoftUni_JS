function getFibonator() {
    let numbers = [0, 1]

    return function () {
        let num = numbers[numbers.length - 1];
        let len = numbers.length;

        numbers.push(numbers[len - 1] + numbers[len - 2])
        return num
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

