function skiTrip(input){
    let days = Number(input[0]);
    let accomodation = input[1];
    let score = input[2];
    let result = 0
    let nights = days - 1
    let discount = 0

    if (accomodation === "room for one person"){
        result = nights * 18
    }else if (accomodation === "apartment"){
        if (nights < 10){
            result = (nights * 25)
            discount = result * 0.3
            result -= discount 
        }else if (nights >= 10 && nights <= 15){
            result = nights * 25
            discount = result * 0.35
            result -= discount
        }else if (nights > 15){
            result = nights * 25
            discount = result * 0.5
            result -= discount
        }            
    }else if (accomodation === "president apartment"){
        if (nights < 10){
            result = (nights * 35)
            discount = result * 0.1
            result -= discount 
        }else if (nights >= 10 && nights <= 15){
            result = nights * 35
            discount = result * 0.15
            result -= discount
        }else if (nights > 15){
            result = nights * 35
            discount = result * 0.2
            result -= discount
    }
}
    if (score === "positive"){
        result *= 1.25
    } else if (score === "negative"){
        result *= 0.9
    }
    console.log(result.toFixed(2))
}

skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
