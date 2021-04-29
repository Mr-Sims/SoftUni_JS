function vowelSum(input){
    let text = input[0];
    let result = 0
    for (i = 0; i < text.length; i ++){
        let char = text[i];
        if (char === "a"){
            result += 1;
        }else if ( char === "e"){
            result += 2;
        }else if (char === "i"){
            result += 3;
        }else if (char === "o"){
            result += 4;
        }else if (char === "u"){
            result += 5;
        }
    }
    console.log(result)
}

vowelSum(["hello"])
vowelSum(["hi"])
vowelSum(["bamboo"])
vowelSum(["beer"])