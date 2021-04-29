function leapYear(input){
    let start = Number(input[0]);
    let end = Number(input[1]);

    for (i = start; i <= end; i += 4){
        console.log(i)
    }
}

leapYear(["1908", "1919"])
