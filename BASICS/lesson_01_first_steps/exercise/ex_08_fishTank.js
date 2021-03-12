function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let totalVolume = (width * heigth * length) * 0.001;
    let finalResult = totalVolume * (1 - (percent * 0.01));
    console.log(finalResult);

}

fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])