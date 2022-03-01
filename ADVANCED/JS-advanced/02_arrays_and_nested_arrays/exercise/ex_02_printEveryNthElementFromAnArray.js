function printEveryNth(array, num) {
    let resultArray = [];
    for (let i = 0; i < array.length; i += num) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

// console.log(printEveryNth(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2));

console.log(printEveryNth(['dsa',
'asd', 
'test', 
'tset'], 
2
));

// console.log(printEveryNth(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6));