function lowestPrices(input) {
    const result = {};

    for (const i of input) {
        let [town, product, price] = i.split(' | ');
        price = Number(price)
        if (result[product] == undefined) {
            result[product] = {};
        }
        result[product][town] = price
    }
    // console.log(result)
    for (const product in result) {
        const sorted = Object.entries(result[product]).sort((a, b) => a[1] - b[1]);
        
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}


// function lowestPrices(arr) {
//     let catalogue = {};

//     arr.forEach((el) => {
//         let [town, product, price] = el.split(' | '); 
//         price = Number(price);

//         if (!catalogue[product]) {
//             catalogue[product] = {};
//         } 
//         catalogue[product][town] = price;
//     });

//     for (const product in catalogue) {
//         const sorted = Object.entries(catalogue[product]).sort((a, b) => a[1] - b[1]);
//         console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
//     }

// }


// lowestPrices(
//     [
//         'Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10'
//     ]
// );

lowestPrices(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'
    ]);

