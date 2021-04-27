function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let price = 0
    
    if (season === "Spring"){
        price = 3000
    }else if (season === "Summer" || season === "Autumn"){
        price = 4200
    }else if (season === "Winter"){
        price = 2600
    }
    if (fishermenCount <= 6){
        price *= 0.9
    }else if (fishermenCount > 7 && fishermenCount <= 11){
        price *= 0.85
    }else if (fishermenCount >= 12){
        price *= 0.75
    }
    if (fishermenCount % 2 ==0 && season != "Autumn"){
        price *= 0.95
    }
    if (budget >= price){
        diff = budget - price
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else{
        diff = price - budget
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}

fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])
