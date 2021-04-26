function numberInRange(input){
    let num = Number(input[0])
    if (num >= -100 && num <= 100 && num != 0){
        console.log("Yes")
    } else {
        console.log("No")
    }
}

numberInRange(["0"])
numberInRange(["1005"])
numberInRange(["-15"])
numberInRange(["48"])