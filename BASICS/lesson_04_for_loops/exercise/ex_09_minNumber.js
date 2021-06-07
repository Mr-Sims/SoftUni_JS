function minNumber(input){
    let length = Number(input[0])
    let smallestNum = 999999999999 
    
    for (i = 1; i <= length; i ++) {
        let currentNum = Number(input[i])
        if (currentNum < smallestNum) {
            smallestNum = currentNum
        }
    }
    console.log(smallestNum)
}

minNumber(["2", "100", "99"])
minNumber(["3", "-10", "20", "-30"])
minNumber(["4", "45", "-20", "7", "99"])
minNumber(["1", "999"])
minNumber(["2", "-1", "-2"])