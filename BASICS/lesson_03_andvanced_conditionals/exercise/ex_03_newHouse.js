function newHouse(input){
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let result = 0

    if (flowerType === "Roses"){
        result = flowersCount * 5
        if (flowersCount > 80){
            result *= 0.9
        }
    }else if (flowerType === "Dahlias"){
        result = flowersCount * 3.8
        if (flowersCount > 90){
            result *= 0.85
        }
    }else if (flowerType === "Tulips"){
        result = flowersCount * 2.8
        if (flowersCount > 80){
            result *= 0.85
        }
    } else if (flowerType === "Narcissus"){
        result = flowersCount * 3
        if (flowersCount < 120){
            result *= 1.15
        }
    } else if (flowerType === "Gladiolus"){
        result = flowersCount * 2.5
        if (flowersCount < 80){
            result *= 1.2
        }
    }
    if (budget >= result){
        let diff = budget - result
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${diff.toFixed(2)} leva left.`)
    }else{
        let diff = result - budget
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"])
newHouse(["Tulips", "88", "260"])
newHouse(["Narcissus", "119", "360"])


