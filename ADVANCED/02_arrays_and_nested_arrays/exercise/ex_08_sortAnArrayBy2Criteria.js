// trainer solution

// function sortArray(arr) {
//     arr.sort((a, b) => {
//         if (a.length > b.length) {
//             return 1;
//         } else if( a.length == b.length) {
//             return a.localeCompare(b);
//         } else {
//             return -1;
//         }
//     })
 
//     console.log(arr.join('\n'));
// }


// own solution
function solve(arr) {
    
    arr.sort((a, b) => {
        
        if (a.length === b.length) {
            return a.localeCompare(b)
        } else {
            return a.length - b.length
        }
    });

    arr.forEach(element => console.log(element));

}



sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'Deny', 'omen', 'Default']);