function findDiagonalSums(array) {
    let main = 0;
    let second = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++ ) {
            if (row === col) {
                main += array[row][col];
            }       
        }
    }

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++ ) {
            if ((row + col) === array.length-1) {
                second += array[row][col];
            }       
        }
    }
    console.log(main, second);
}




findDiagonalSums([[20, 40],
    [10, 60]]);

findDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);


function solve(matrix) {
    let main = 0;
    let second = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
        second += matrix[i][(matrix.length - 1) - i]
    }
    console.log(main, second);
}

solve([[20, 40],
    [10, 60]]);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);