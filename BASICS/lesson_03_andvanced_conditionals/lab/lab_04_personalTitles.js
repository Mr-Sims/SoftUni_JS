function personalTitles(input){
    let age = Number(input[0])
    let gender = input[1]
    let result = ``

    if (gender === "m"){
        if (age >= 16){
            result = "Mr."
        }else {
            result = "Master"
        }
    }else if (gender === "f"){
        if (age >= 16) {
            result = "Ms."
        }else {
            result = "Miss"
        }
    }
    console.log(result)
}

personalTitles(["12", "f"])
personalTitles(["17", "m"])
personalTitles(["25", "f"])
personalTitles(["13.5", "m"])

