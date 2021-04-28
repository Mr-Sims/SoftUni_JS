function journey(input){
    let budget = Number(input[0])
    let season = input[1]
    let vacationType = ''
    let destination = ''
    let result = 0

    if (budget <= 100){
        destination = "Bulgaria"
        if (season === "summer"){
            vacationType = "Camp"
            price = budget * 0.3
        }else if (season === "winter"){
            vacationType = "Hotel"
            price = budget * 0.7
        }
    }else if (budget <= 1000){
        destination = "Balkans"
        if (season === "summer"){
            vacationType = "Camp"
            price = budget * 0.4
        }else if (season === "winter"){
            vacationType = "Hotel"
            price = budget * 0.8
        }
    }else if (budget > 1000){
        destination = "Europe"
        vacationType = "Hotel"
        price = budget * 0.9
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${vacationType} - ${price.toFixed(2)}`)
}

journey(["50", "summer"])
journey(["75", "winter"])
journey(["1500", "summer"])
