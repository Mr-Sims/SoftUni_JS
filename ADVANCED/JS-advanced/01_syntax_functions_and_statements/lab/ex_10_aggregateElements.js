function aggregateElements(param) {
    let end = param.length;
    let sum = 0;
    let inverseSum = 0;
    let concat = '';
    for (let i = 0; i < end; i++) {
        sum += Number(param[i]);
        inverseSum += 1/Number(param[i]);
        concat += `${param[i]}`
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}


aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])



// lab demo solution bellow
// function aggregateElements(elements) {
//         aggregate(elements, 0, (a, b) => a + b);
//         aggregate(elements, 0, (a, b) => a + 1 / b);
//         aggregate(elements, '', (a, b) => a + b);
//         function aggregate(arr, initVal, func) {
//             let val = initVal;
//             for (let i = 0; i < arr.length; i++)
//                 val = func(val, arr[i]);
//             console.log(val);
//         }
//     }
    
// aggregateElements([1, 2, 3])
// aggregateElements([2, 4, 8, 16])