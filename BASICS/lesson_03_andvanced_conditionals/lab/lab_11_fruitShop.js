function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let res = 0;
    let isError = false
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day == "Friday") {
        if (product === "banana") {
                res = quantity * 2.5;
        } else if (product === "apple") {
            res = quantity * 1.2;
        } else if (product === "orange"){
            res = quantity * 0.85;
        } else if (product === "grapefruit") {
            res = quantity * 1.45;
        } else if (product === "kiwi") {
            res = quantity * 2.7;
        } else if (product === "pineapple") {
            res = quantity * 5.5;
        }else if (product === "grapes") {
            res = quantity * 3.85
        } else {
            
            isError = true
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (product === "banana") {
            res = quantity * 2.7;
    } else if (product === "apple") {
        res = quantity * 1.25;
    } else if (product === "orange"){
        res = quantity * 0.9;
    } else if (product === "grapefruit") {
        res = quantity * 1.6;
    } else if (product === "kiwi") {
        res = quantity * 3;
    } else if (product === "pineapple") {
        res = quantity * 5.6;
    }else if (product === "grapes") {
        res = quantity * 4.2
    } else {
        
        isError = true
    }
    }else {
        
        isError = true
    }
    if (isError === true){
        console.log("error")
    }else{
        console.log(res.toFixed(2))
    }
    
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["tomato", "Monday", "0.5"])
