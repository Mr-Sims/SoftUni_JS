function petFood(input) {
    let dogsCount = Number(input[0])
    let otherAnimals = Number(input[1])
    let dogFood = dogsCount * 2.5
    let otherFood = otherAnimals * 4
    let result = dogFood + otherFood
    console.log(`${result} lv.`)
}

petFood(["5", "4"])