function metricConverter(input){
    let num = Number(input[0])
    let initial = input[1]
    let output = input[2]
    if (initial == "mm"){
        num /= 1000
    }else if (initial == "cm"){
        num /= 100
    }
    if (output == "mm"){
        num *= 1000
    }else if (output == "cm"){
        num *= 100
    }
    console.log(num.toFixed(3))
}

metricConverter(["150","m","cm"])

