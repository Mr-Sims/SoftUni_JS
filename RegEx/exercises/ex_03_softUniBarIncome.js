// solution 1
function bar(input) {

    let pattern = /%(?<name>[A-Z][a-z]*)%<(?<product>[A-Za-z]+)>\|(?<quantity>\d+)\|(?<price>[0-9]+\.?[0-9]+)\$/g;
    // let pattern = /%(?<name>[A-Z][a-z]*)%.*<(?<product>\w+)>.*\|(?<quantity>\d+)\|.*(?<price>\d+(?:\.\d+)*)\$/g;

    let str = input.join(', ');
    let match = null;
    let totalTotal = 0
    let counter = 0
    while ((match = pattern.exec(str)) != null) {
        let total = 0;
        let name = match.groups.name;
        let product = match.groups.product
        let quantity = Number(match.groups.quantity);
        let price = match.groups.price;
        total += (price * quantity);
        totalTotal += total
        console.log(`${name}: ${product} - ${total.toFixed(2)}`)
        counter++
    }
    if (totalTotal) {
        console.log(`Total income: ${totalTotal.toFixed(2)}`);
    }
}

bar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);

bar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);


// //solution2
function bar2(input) {

    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<quantity>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/;
    let totalTotal = 0
    for (let el of input) {
        if (pattern.test(el)) {
            let match = pattern.exec(el);
            let total = 0;
            let name = match.groups.name;
            let product = match.groups.product
            let quantity = Number(match.groups.quantity);
            let price = match.groups.price;
            total += (price * quantity);
            totalTotal += total
            console.log(`${name}: ${product} - ${total.toFixed(2)}`)
        }
    }
    console.log(`Total income: ${totalTotal.toFixed(2)}`);

}

bar2(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);

bar2(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);


// solution 3
function bar3(input) {
    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<quantity>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/;
    let total = 0;
    
    while(input[0] != 'end of shift') {
        let line = input.shift();
        let match = pattern.exec(line);
        if(match != null) {
            let [_, name, product, quantity, price,] = match;
            quantity = Number(quantity);
            price = Number(price);
            total += (quantity * price)
            console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`)
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

bar3(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);

bar3(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);