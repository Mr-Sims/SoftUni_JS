function charity(input) {
    let cakePrice = 45
    let gofrettePrice = 5.8
    let pancakePrice = 3.2
    let tax = 0.125

    let campaignDays = Number(input[0])
    let bakersCount = Number(input[1])
    let cakesCount = Number(input[2])
    let gofrettesCount = Number(input[3])
    let pancakesCount = Number(input[4])

    let totalProductsPrice = (cakesCount * cakePrice) + (gofrettesCount * gofrettePrice) + (pancakesCount * pancakePrice)
    let totalPerDay = totalProductsPrice * campaignDays * bakersCount
    let endResult = totalPerDay - (totalPerDay * tax)
    console.log(endResult)
    
}


charity(["23", "8", "14", "30", "16"])