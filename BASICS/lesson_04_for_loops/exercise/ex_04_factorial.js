function factorial(input){
    let res = 1;
    let num = Number(input[0])
    for (i = 1; i <= num; i ++){
        res *= i
    }
    console.log(res)
}

factorial(["4"])