function bonusScore(input) {
    let num = Number(input[0])
    let bonusPoints = 0
    if (num > 1000){
        bonusPoints += num * 0.1
    }else if (num > 100){
        bonusPoints += num * 0.2 
    } else if (num <= 100){
        bonusPoints += 5
    }
    if (num % 2 == 0){
        bonusPoints += 1
    }
    if (num % 10 == 5){
        bonusPoints += 2
    }
    num += bonusPoints
    console.log(bonusPoints)
    console.log(num)
}

bonusScore(["175"])