function cleverLilly(input){
    let age = Number(input[0]);
    let washMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toyCount = 0
    let brother = 0
    let totalGiftMoney = 0
    for (bDay = 1; bDay <= age; bDay++){
        if (bDay % 2 == 0){
            brother += 1
            totalGiftMoney += ((bDay * 10) / 2)
        }else{
            toyCount += 1
        }
    }
    let totalToyMoney = toyCount * toyPrice
    let grandTotal = totalGiftMoney + totalToyMoney - brother
    if (grandTotal >= washMachine){
        console.log(`Yes! ${(grandTotal - washMachine).toFixed(2)}`)
    }else{
        console.log(`No! ${(washMachine - grandTotal).toFixed(2)}`)
    }
}

cleverLilly(["10", "170", "6"])
//cleverLilly(["21", "1570.98", "3"])