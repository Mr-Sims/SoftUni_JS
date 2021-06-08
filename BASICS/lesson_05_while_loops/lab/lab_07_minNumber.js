function minNumber(input) {
    let minNum = Number.MAX_VALUE
    let counter = 0
    let command = input[counter]
    while (command != 'Stop'){
        if (Number(command) < minNum) {
            minNum = Number(command);
        }
        counter++
        command = input[counter]
    }
    console.log(minNum)
}

minNumber(["100", "99", "80", "70", "Stop"])
minNumber(["-10", "20", "-30", "Stop"])
minNumber(["45", "-20", "7", "99", "Stop"])
minNumber(["999", "Stop"])
minNumber(['-1', '-2', 'Stop'])
