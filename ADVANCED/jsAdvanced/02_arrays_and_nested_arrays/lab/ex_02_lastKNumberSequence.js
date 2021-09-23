function lastKNumbers(n, k) {
    let = resultArr = [1];

    for (let i = 1; i < n; i++) {
        let currentSum = 0;
        
        for (let j = resultArr.length-1 ; j > (resultArr.length-1)-k; j--) {
            if (typeof resultArr[j] === 'number') {
            currentSum += resultArr[j]
            }
        }
        resultArr.push(currentSum)
    }
    return resultArr;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));