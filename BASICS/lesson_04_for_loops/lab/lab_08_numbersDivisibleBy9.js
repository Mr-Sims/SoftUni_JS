function NumsDivisibleBy9(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = 0

    for (i = start; i <= end; i++){
        if (i % 9 === 0){
            result += i
        }
    }
    console.log(`The sum: ${result}`)
    for (i = start; i <= end; i++){
        if (i % 9 === 0){
            console.log(i)
        }
    }
}

NumsDivisibleBy9(["100", "200"])