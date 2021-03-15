function yardGreening(input) {
    let totalArea = Number(input[0])
    let price = 7.61
    let discountCoef = 0.82
    let finalPrice = parseFloat((totalArea * price) * discountCoef).toFixed(2)
    let discount = parseFloat((totalArea * price) - finalPrice).toFixed(2)
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])
