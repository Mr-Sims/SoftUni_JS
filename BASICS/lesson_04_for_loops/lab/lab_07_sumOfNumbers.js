function sumNumbers(input){
    let text = input[0];
    let result = 0
    for (i = 0; i < text.length; i++){
        let num = Number(text[i]);
        result += num
    }
    console.log(`The sum of the digits is:${result}`)
}

sumNumbers(["1234"])
sumNumbers(["564891"])