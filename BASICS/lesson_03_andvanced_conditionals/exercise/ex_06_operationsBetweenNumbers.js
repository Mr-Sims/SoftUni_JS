function operations(input){
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let operator = input[2] //символ измежду: "+", "-", "*", "/", "%"
    let result = 0
    if (operator === "+"){
        result = num1 + num2
        let oddEven = ""
        if (result % 2 === 0){
            oddEven = "even"
        }else{
            oddEven = "odd"
        }
        console.log(`${num1} + ${num2} = ${result} - ${oddEven}`)
    }else if (operator === "-"){
        result = num1 - num2
        let oddEven = ""
        if (result % 2 === 0){
            oddEven = "even"
        }else{
            oddEven = "odd"
        }
        console.log(`${num1} - ${num2} = ${result} - ${oddEven}`)
    } else if (operator === "*"){
        result = num1 * num2
        let oddEven = ""
        if (result % 2 === 0){
            oddEven = "even"
        }else{
            oddEven = "odd"
        }
        console.log(`${num1} * ${num2} = ${result} - ${oddEven}`)
    }else if (operator === "/"){
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`)
        }else{
        result = num1 / num2
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
    }
    }else if (operator === "%"){
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`)
        }else{
        result = num1 % num2
        console.log(`${num1} % ${num2} = ${result}`)
    }
    }
}

operations(["10", "12", "+"])
operations(["10", "1", "-"])
operations(["7", "3", "*"])
operations(["123", "12", "/"])
operations(["10", "3", "%"])
operations(["112", "0", "/"])
operations(["10", "0", "%"])


