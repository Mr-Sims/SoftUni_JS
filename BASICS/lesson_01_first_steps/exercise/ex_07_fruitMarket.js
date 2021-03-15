function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananaQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let banansPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    let result = (strawberriesPrice * strawberriesQuantity) + (bananaQuantity * banansPrice) + ( orangesQuantity * orangesPrice) + (raspberriesQuantity * raspberriesPrice);
    console.log(result.toFixed(2));

}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"])