function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let result = 0
    
    if (town === "Sofia") {
        if (product === "coffee") {
            result = quantity * 0.5;
        } else if (product === "water"){
            result = quantity * 0.8;
        } else if (product === "beer") {
            result = quantity * 1.2;
        } else if (product === "sweets") {
            result = quantity * 1.45;
        } else if (product === "peanuts") {
            result = quantity * 1.6
        }
    }else if (town === "Plovdiv") {
        if (product === "coffee") {
            result = quantity * 0.4;
        } else if (product === "water"){
            result = quantity * 0.7;
        } else if (product === "beer") {
            result = quantity * 1.15;
        } else if (product === "sweets") {
            result = quantity * 1.3;
        } else if (product === "peanuts") {
            result = quantity * 1.5
        }
    }else if (town === "Varna") {
        if (product === "coffee") {
            result = quantity * 0.45;
        } else if (product === "water"){
            result = quantity * 0.7;
        } else if (product === "beer") {
            result = quantity * 1.1;
        } else if (product === "sweets") {
            result = quantity * 1.35;
        } else if (product === "peanuts") {
            result = quantity * 1.55
        }
    }
    console.log(result)
}

smallShop(["coffee", "Varna", "2"])
smallShop(["peanuts", "Plovdiv", "1"])
smallShop(["beer", "Sofia", "6"])


