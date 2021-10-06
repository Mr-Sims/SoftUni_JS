function greatestCommonDivisor(...param) {
    let num1 = Number(param[0]);
    let num2 = Number(param[1]);
    let biggerNum;
    
    if (num1 > num2) {
        biggerNum = num1;
    } else if (num1 < num2) {
        biggerNum = num2;
    }
    let commonDivisor;

    for (let i = 1; i <= biggerNum; i++){
        if (num1 % i === 0 && num2 % i === 0) {
            commonDivisor = i;
        }
    }
    console.log(commonDivisor)
}

greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)

// trainer solution bellow

function gcd(a, b) {
    while (b != 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a)
}

gcd(15, 5);
gcd(2154, 458);
