function solve(arr) {
    let brands = new Map()

    for (let el of arr) {
        let [brand, model, quantity] = el.split(' | ');
        quantity = Number(quantity)

        if (!brands.has(brand)) {
            brands.set(brand, new Map())
        }
        let carBrand = brands.get(brand)

        if (!carBrand.has(model)) {
            carBrand.set(model, 0)
        }
        let newQuantity = quantity + carBrand.get(model)
        carBrand.set(model, newQuantity)
    }

    for ([key, value] of brands.entries()) {
        console.log(key)
        
        for (let [k, v] of value.entries()) {
            console.log(`###${k} -> ${v}`)
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);