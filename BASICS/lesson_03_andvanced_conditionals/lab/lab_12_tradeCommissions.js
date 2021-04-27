function tradeCommission(input) {
    let town = input[0];
    let sales = Number(input[1])
    let result = 0
    let isValid = true
    if (town === "Sofia"){
        if (sales >= 0 && sales <= 500){
            result = sales * 0.05
        } else if (sales > 500 && sales <= 1000){
            result = sales * 0.07
        } else if (sales > 1000 && sales <= 10000){
            result = sales * 0.08
        }else if (sales > 10000){
            result = sales * 0.12
        }else {
            isValid = false
        }
    }else if (town === "Varna"){
        if (sales >= 0 && sales <= 500){
            result = sales * 0.045
        } else if (sales > 500 && sales <= 1000){
            result = sales * 0.075
        } else if (sales > 1000 && sales <= 10000){
            result = sales * 0.1
        }else if (sales > 10000){
            result = sales * 0.13
        }else {
            isValid = false
        }
    }else if (town === "Plovdiv"){
        if (sales >= 0 && sales <= 500){
            result = sales * 0.055
        } else if (sales > 500 && sales <= 1000){
            result = sales * 0.08
        } else if (sales > 1000 && sales <= 10000){
            result = sales * 0.12
        }else if (sales > 10000){
            result = sales * 0.145
        }else {
            isValid = false
        }
    }else{
        isValid = false
    }

    if (isValid){
        console.log(result.toFixed(2))
    }else {
        console.log("error")
    }
}

tradeCommission(["Sofia", "10005"])

