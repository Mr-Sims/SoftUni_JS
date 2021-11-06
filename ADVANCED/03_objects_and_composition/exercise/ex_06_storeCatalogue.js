function storeCatalogue(arr) {
    const catalogue = {};

    arr.forEach((el) => {
        let [productName, price] = el.split(' : ');
        price = Number(price);
        const index = productName[0];
        if (!catalogue[index]) {
            catalogue[index] = {};
        }
        catalogue[index][productName] = price;
    });

    let initialSort = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const key of initialSort) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]))
        console.log(key)
        // for (const prod of products) {
        //     console.log(`  ${prod[0]}: ${prod[1]}`)
        // }
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`)
        })
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

// storeCatalogue(['Banana : 2',
// 'Rubic`s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']);


// // Solution with sorting beforehand
// function solve(arr) {
//     arr.sort((a, b) => a.localeCompare(b));
//     const result = {};

//     arr.forEach((element) => {
//         let [product, price] = element.split(' : ')
//         const currentObj = { product, price }
//         if (result[product[0]] == undefined) {
//             result[product[0]] = [currentObj]
//         } else {
//             result[product[0]].push(currentObj)
//         }
//     })
//     for (let i in result) {
//         console.log(i)
//         result[i].forEach(el => console.log(`  ${el.product}: ${el.price}`))
//     }
// }