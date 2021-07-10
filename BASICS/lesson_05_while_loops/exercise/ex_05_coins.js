function coins(input) {
    let amount = Number(input[0]);
    let coins = 0;
    let changeCoin = amount * 100;
    
    while(changeCoin >= 1) {
        if (changeCoin >= 200) {
            changeCoin -= 200;
            coins ++;
        } else if (changeCoin >= 100) {
            changeCoin -= 100;
            coins++;
        } else if (changeCoin >= 50) {
            changeCoin -= 50;
            coins++;
        } else if (changeCoin >= 20) {
            changeCoin -= 20;
            coins++;
        } else if (changeCoin >= 10) {
            changeCoin -= 10;
            coins++;
        } else if (changeCoin >= 5) {
            changeCoin -= 5;
            coins++;
        } else if (changeCoin >= 2) {
            changeCoin -= 2;
            coins++;
        } else if (changeCoin >= 1) {
            changeCoin -= 1;
            coins++;
        }
    }
    console.log(coins)
}

coins(["1.23"])
// 4

coins(["2"])
// 1

coins(["0.56"])
// 3

coins(["2.73"])
// 5