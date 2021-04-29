function divide(input){
    let totalInputs = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (i = 1; i <= totalInputs; i++){
        let num = Number(input[i]);
        if (num % 2 == 0){
            p1 ++
        }
        if (num % 3 == 0){
            p2++
        }
        if (num % 4 == 0){
            p3++
        }
    }
    console.log(`${(p1 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p2 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p3 / totalInputs * 100).toFixed(2)}%`)
}

divide(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])
divide(["3", "3", "6", "9"])

