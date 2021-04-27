function cinema(input) {
    let showType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let result = 0
    let totalSeats = rows * cols
    switch(showType){
        case "Premiere":
            result = totalSeats * 12;
            break;
        case "Normal":
            result = totalSeats * 7.5;
            break;
        case "Discount":
            result = totalSeats * 5;
            break;
    }
    console.log(result.toFixed(2))
}

cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])
