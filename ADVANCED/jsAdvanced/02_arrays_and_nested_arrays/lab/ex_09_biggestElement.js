function findBiggest(array) {
    let biggest = -99999999;

    for (let row of array) {
        for (let col of row) {
            if (col > biggest) {
                biggest = col;
            }
        }
    }
    return biggest;
}

console.log(findBiggest([[20, 50, 10],
    [8, 33, 145]]));

console.log(findBiggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))