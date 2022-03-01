function findEqualNeighbours(matrix) {
    const mapper = {};
    let neighbour = 0;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if ((row >= 0 && row < matrix.length) && (col + 1 >= 0 && col + 1 < matrix[row].length)) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    neighbour += 1;
                }
            }
            if ((row + 1 >= 0 && row + 1 < matrix.length) && (col >= 0 && col < matrix[row].length)) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    neighbour += 1;
                }
            }
        }
    }
    return neighbour;

}


findEqualNeighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);


findEqualNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);





/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// nested func try 


// function findEqualNeighbours(matrix) {
//     const mapper = {};
//     let neighbour = 0;

//     function bounds(row, col, matrix) {
//         if ((row >= 0 && row < matrix.length) && (col >= 0 && col < matrix[row].length)){
//             return true;
//         }
//     }

//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[row].length; col++) {

//             if (bounds(row-1, col, matrix)) {
//                 if(matrix[row][col] === matrix[row-1][col]){
//                     neighbour += 1;
//                 }
//             }
//             else if (bounds(row, col-1, matrix)) {
//                 if (matrix[row][col] === matrix[row][col-1]) {
//                     neighbour += 1;
//                 }

//             } else if (bounds(row, col+1, matrix)) {
//                 if (matrix[row][col] === matrix[row][col+1]) {
//                 neighbour += 1;
//                 }
//             } else if (row+1, col, matrix) {
//                 if (matrix[row][col] === matrix[row+1][col]){
//                 neighbour += 1;
//             }
//             }
//         }
//     }

//     return neighbour

// }


// findEqualNeighbours([   
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);


// findEqualNeighbours([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);


/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// foreign solution 

// function findEqualNeighbours(matrix) {
//     let neighbours = 0;
//     for (let row = 0; row < matrix.length; row++) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         // let el = matrix[row][col];

//         // checks pairs next to each other by col
//         if (matrix[row][col] === matrix[row][col + 1]) { neighbours++ }
//         // checks pairs next to each other by row
//         if (row !== matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) { neighbours++ }
//       }
//     }

//     console.log(neighbours);
//   }

//   findEqualNeighbours([   
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);


// findEqualNeighbours([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);