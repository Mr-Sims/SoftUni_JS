function accountBalance(input) {
    let balance = 0;
    let counter = 0;
    let command = input[counter]
    while (command != 'NoMoreMoney') {
        if (Number(input[counter]) < 0) {
            console.log('Invalid operation!')
            break;
        }
        
        balance += Number(input[counter]);
        let amount = Number(input[counter]);
        
        counter++
        command = input[counter];
        console.log(`Increase: ${amount.toFixed(2)}`);
        
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}

//accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])
accountBalance(["120", "45.55", "-150"])