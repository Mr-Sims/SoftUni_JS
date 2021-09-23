function sumFirstLast(arr) {
    let first = Number([...arr].shift());
    let last = Number([...arr].pop());

    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
