function speedInfo(input) {
    let speed = Number(input[0])
    let result = ""
    if (speed <= 10){
        result = "slow"
    }else if (speed > 1000){
        result = "extremely fast"
    }else if (speed > 150){
        result = "ultra fast"
    }else if(speed > 50){
        result = "fast"
    }else if (speed > 10){
        result = "average"
    }
    console.log(result)
}   

speedInfo(["8"])
speedInfo(["49.5"])
speedInfo(["126"])
speedInfo(["160"])
speedInfo(["3500"])