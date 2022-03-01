function solveMagic(matrix) {
    let sums = [];

    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = 0;
        let currentColSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentRowSum += matrix[row][col];
            currentColSum += matrix[col][row];
        }
        sums.push(currentRowSum);
        sums.push(currentColSum);
    }
    return sums.every(val => val === sums[0]);
}

console.log(solveMagic([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
]));

console.log(solveMagic([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(solveMagic([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));