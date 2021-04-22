function sumSeconds(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let total = first + second + third;

    let minutes = Math.floor(total / 60);
    let seconds = total % 60;
    let result = `${minutes}:${seconds}`

    if (seconds < 10){
        result = `${minutes}:0${seconds}`
    } 
    console.log(result)
}

sumSeconds(["50", "50", "49"])
