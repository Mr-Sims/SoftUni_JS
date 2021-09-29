// const myArr = [10, 20, 30, 41, 50, 60, 70];

// console.log(myArr.join());

// myArr.splice(3, 1, 40); /// first parameter indeicates the start of operations, second parameter indicates how many indices should be deleted and third param onwards are things to be inserted at the given index

// myArr.push(80, 90, 100) /// appends one or more elements to the end of the array

// myArr.pop() /// pops out the last object from the array

// myArr.shift() /// like popleft in python - pops out the the element at the first index from an array

// myArr.unshift() /// adds one or more elements to the beginning of the array

// console.log(myArr.join());




///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
/// sort() for numbers

// const myArrSort = [10, 1111, 30, 41, 29, 50, 60, 70];

// console.log(myArrSort.join());

// myArrSort.sort((a, b) => b - a); /// lambda func (b - a) - returns you acsending, while (a - b) returns descending order
// console.log(myArrSort.join());
/// comparator function bellow that can be used instead of the lambda, but it`s the same and it is un-neccessarily complex
// function compareNumbers(a, b) {
//     if (a > b) {
//          return 1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }




/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/// sort() for Strings

// myArrSortAlpha = ['pudes', 'Mother', 'Super', 'super']
// console.log(myArrSortAlpha.join())

// myArrSortAlpha.sort((a, b) => a.localeCompare(b)); /// sorts array alphabetically acsending. switching a with be makes it descending
// console.log(myArrSortAlpha.join())




//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/// slice method

// const myArr = [10, 20, 30, 41, 50, 60, 70];

// let slicedArr = myArr.slice(1, 3); /// first param is the start(included) and second param is the end(not included)

// console.log(slicedArr.join());




////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/// includes() method

// myArr = [10, 20, 30, 40, 50, 60, 70];

// console.log(myArr.includes(1)); //pretty much self explanatory. could have a second param that indicates from where on to check.

// if (myArr.includes(10)) {
//     console.log('10')
// }





/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/// indexOf() method - returns the index where a given param is found in the array. if el is not found in the list, then method returns -

// myArr = [10, 20, 20, 30, 40, 50, 60, 70];

// console.log(myArr.indexOf(20));



/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/// some() method - tests whether at least 1 element of a given array passes the test by the provided func
/// every() method - tests whether all the elements of a given array pass the test by the provided func

// myArr = [10, 20, 20, 30, 40, 50, 60, 70];
// myArrOdd = [1, 13, 83, 23]
// function isEven(element) {
//     return element % 2 != 0;
// }
// console.log(myArr.every(isEven));
// console.log(myArrOdd.every(isEven));



/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/// map() method

// const myArr = ['10', '20', '20', '30', '40', '50', '60', '70'];

// const nums = myArr.map((x) => Number(x));

// console.log(myArr);
// console.log(nums);



/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/// reduce() method

// const myArr = [1, 2, 3, 4];
// const reducer = (acc, val) => acc + val;

// console.log(myArr.reduce(reducer));

// console.log(myArr.reduce(reducer, 5));




/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/// nested arrays

let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(`row -> ${i}, column -> ${j} -> element is ${arr[i][j]}`)
//     }
// }

// for (let row of arr) {
//     for (let col of row) {
//         console.log(col)
//     }
// }
 




