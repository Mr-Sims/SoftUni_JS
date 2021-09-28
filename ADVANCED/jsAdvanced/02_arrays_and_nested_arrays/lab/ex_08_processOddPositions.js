function process(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            resultArray.unshift((array[i]) * 2);
        }
    }
    console.log(resultArray.join(' '));
}

// alternate solution using built-in methods
function solve(arr) {
    return arr.filter((a, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
  }
  

process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3]);
