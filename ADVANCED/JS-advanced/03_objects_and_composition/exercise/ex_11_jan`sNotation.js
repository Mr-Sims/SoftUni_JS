function solve(input) {
    const list = [];
    let error = false;
    for (let el of input) {
        if (typeof(el) == 'number') {
            list.push(el);
        } else {
            if (list.length < 2) {
                console.log(`Error: not enough operands!`);
                error = true;
                break;
            }
            let num2 = list.pop();
            let num1 = list.pop();

            switch(el) {
                case '+': list.push(num1 + num2); break;
                case '-': list.push(num1 - num2); break;
                case '*': list.push(num1 * num2); break;
                case '/': list.push(num1 / num2); break;
            }
        }
    }
    if (list.length > 1) {
        console.log('Error: too many operands!');
    } else if(!error) {
        console.log(list[0]);
    }
}

solve([3, 4, '+']); // 7

solve([5, 3, 4, '*', '-']); // -7

solve([7, 33, 8, '-']); // Error: too many operands!

solve([15, '/']); // Error: not enough operands!

solve([31, 2, '+', 11, '/']); // 3

solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']); // 6