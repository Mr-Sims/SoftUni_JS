function maxNumber(input) {
    let maxNum = -9999999999999
    let counter = 0
    let command = input[counter]
    while (command != 'Stop'){
        if (Number(command) > maxNum) {
            maxNum = Number(command);
        }
        counter++
        command = input[counter]
    }
    console.log(maxNum)
}

//maxNumber(["100", "99", "80", "70", "Stop"])
//maxNumber(["-10", "20", "-30", "Stop"])
//maxNumber(["45", "-20", "7", "99", "Stop"])
//maxNumber(["999", "Stop"])
maxNumber(['-1', '-2', 'Stop'])
