function histogram(input){
    let totalInputs = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 1; i <= totalInputs; i ++){
        let num = Number(input[i]);
        
        if (num > 0 && num < 200){
            p1 +=1;
        }else if (num >= 200 && num <= 399){
            p2 += 1;
        }else if (num >= 400 && num <= 599){
            p3 += 1;
        }else if (num >= 600 && num <= 799){
            p4 += 1
        }else if( num >= 800){
            p5 += 1
        }
     }
    console.log(`${(p1 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p2 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p3 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p4 / totalInputs * 100).toFixed(2)}%`)
    console.log(`${(p5 / totalInputs * 100).toFixed(2)}%`)
}

//histogram(["3", "1", "2", "999"])
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])

