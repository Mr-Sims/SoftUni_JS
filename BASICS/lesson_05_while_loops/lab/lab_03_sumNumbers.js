function sumNumbers(input) {
    let primaryNum = Number(input[0]);
    let counter = 1;
    let sumNums = Number(input[counter])
    while (sumNums < primaryNum) {
        counter++
        sumNums += Number(input[counter])
    }
    console.log(sumNums)
}


sumNumbers(["100", "10", "20", "30", "40"])
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])