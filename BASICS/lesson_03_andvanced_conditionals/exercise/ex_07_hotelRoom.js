function hotelRoom(input){
    let month = input[0]
    let nights = Number(input[1])
    let apartmentPrice = 0
    let studioPrice = 0

    if (month === "May" || month === "October"){
        studioPrice = nights * 50
        apartmentPrice = nights * 65
        if (nights > 7 && nights <= 14){
            studioPrice *= 0.95
        }else if (nights > 14){
            studioPrice *= 0.7
        }
    }else if (month === "June" || month ===  "September"){
        studioPrice = nights * 75.2
        apartmentPrice = nights * 68.7
        if (nights > 14){
            studioPrice *= 0.8
        }
    }else if (month === "July" || month === "August"){
        studioPrice = nights * 76
        apartmentPrice = nights * 77
    }
    if (nights > 14){
        apartmentPrice *= 0.9
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
hotelRoom(["June", "14"])

