function toyShop(input){
    let puzzlePrice = 2.6;
    let dollPrice = 3.00;
    let teddyPrici = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2.0;
    let discount = 0.75;
    let rent = 0.1;
    let dicountTreshold = 50;

    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalToysCount = (puzzlesCount + dollsCount + teddyCount + minionCount + truckCount);
    let totalPrice = (puzzlesCount * puzzlePrice) + (dollsCount * dollPrice) + (teddyCount * teddyPrici) + (minionCount * minionPrice) + (truckCount * truckPrice);
    
    if (totalToysCount >= 50) {
        totalPrice *= discount;
    }
    totalPrice -= totalPrice * rent
    let result = ""
    if (totalPrice >= vacationPrice){
        result = `Yes! ${(totalPrice-vacationPrice).toFixed(2)} lv left.`
    }else {
        result = `Not enough money! ${(vacationPrice - totalPrice).toFixed(2)} lv needed.`
    }
    console.log(result)

}

toyShop(["320", "8", "2", "5", "5", "1"])
