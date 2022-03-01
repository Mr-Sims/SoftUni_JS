function solve(input) {
    let matrix = []
    for (let row of input) {
        let newRow = row.split(' ').map(x => Number(x))
        matrix.push(newRow)
    }
    let main = 0
    let secondary = 0
    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i]
        secondary += matrix[i][(matrix.length - 1) - i]
    }

    if (main === secondary) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && (row + col) != matrix.length - 1) {
                    matrix[row][col] = main
                }
            }
        }
    }
    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

solve(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);

solve(['1 1 1',
    '1 1 1',
    '1 1 0']
);