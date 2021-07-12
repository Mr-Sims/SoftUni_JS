function sumOfTwoNumbers(input) {
    let begin = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0
    let numFound = false

    for (i = begin; i <= end; i++) {
        for (j = begin; j <= end; j++) {
            counter++
            if (j + i === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`)
                numFound = true
                break;
            }
        }
        if (numFound === true) {
            break;
        }
    }
    if (numFound === false) {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}

//sumOfTwoNumbers(["1", "10", "5"])

//sumOfTwoNumbers(["23", "24", "20"])

//sumOfTwoNumbers(["88", "888", "1000"])

sumOfTwoNumbers(["88", "888", "2000"])