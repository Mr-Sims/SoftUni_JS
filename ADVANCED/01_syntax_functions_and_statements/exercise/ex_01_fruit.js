function fruit(...param) {
    let fruitType = param[0];
    let weight = param[1];
    let pricePerKilo = param[2];
    let weightInKilos = Number(weight/1000);
    let totalPrice = pricePerKilo * (weightInKilos);
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruitType}.`)
}

fruit('orange', 2500, 1.8)
fruit('apple', 1563, 2.35)
