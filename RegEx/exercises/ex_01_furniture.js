function furniture(input) {
    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>[0-9]+\.?[0-9]*)!(?<quantity>[0-9]+)\b/g;

    let str = input.join(', ');
    let total = 0;
    let match = null;
    console.log(`Bought furniture:`);
    while((match = pattern.exec(str)) != null) {
        let product = match.groups.product;
        let price = Number(match.groups.price);
        let quantity = Number(match.groups.quantity);
        console.log(`${product}`);
        total += (price * quantity);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);