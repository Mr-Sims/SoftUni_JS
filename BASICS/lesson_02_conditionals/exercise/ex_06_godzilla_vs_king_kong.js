function godzillaKingKong(input) {
    let movieBudget = Number(input[0])
    let extrasCount = Number(input[1])
    let costumePrice = Number(input[2])

    let decor = movieBudget * 0.1
    if (extrasCount > 150){
        costumePrice *= 0.9
    }
    let total = (extrasCount * costumePrice) + decor
    
    if (total > movieBudget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(total - movieBudget).toFixed(2)} leva more.`) 
    }else if (total <= movieBudget){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(movieBudget - total).toFixed(2)} leva left.`)
    }
}

godzillaKingKong(["20000", "120", "55.5"])

