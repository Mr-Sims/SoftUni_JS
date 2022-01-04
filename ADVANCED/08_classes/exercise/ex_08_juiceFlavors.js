function solve(arr) {
    let juices = new Map()
    let bottles = new Map()

    for (let el of arr) {
        let [flavor, quantity] = el.split(' => ')
        quantity = Number(quantity)

        if (!juices.has(flavor)) {
            juices.set(flavor, 0)
        }

        let totalQuantity = juices.get(flavor) + quantity;

        if (totalQuantity >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0)
            }
            let newBottles = Math.trunc(totalQuantity / 1000);
            let totalBottles = bottles.get(flavor) + newBottles
            bottles.set(flavor, totalBottles)
        }


        juices.set(flavor, totalQuantity % 1000)

    }
    
    for (let [key, value] of bottles.entries())
        console.log(`${key} => ${value}`)
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);