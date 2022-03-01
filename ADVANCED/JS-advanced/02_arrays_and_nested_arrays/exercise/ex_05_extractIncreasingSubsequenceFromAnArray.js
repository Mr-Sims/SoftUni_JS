function extractSubsequence(array) {
    // let currentBiggest = array[0];
    // let subsequence = [array[0]];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] >= currentBiggest) {
    //         currentBiggest = array[i];
    //         subsequence.push(array[i]);
    //     }
    // }
    // return subsequence;


    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // solution using filter() method
    // let biggest = Number.MIN_SAFE_INTEGER;
    // const result = array.filter((el) => {
    //     if (el >= biggest) {
    //         biggest = el;
    //         return true;
    //     }else {
    //         return false;
    //     }
    // })
    // return result;



    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // solution using forEach() method
    // const result = [];
    // let biggest = Number.MIN_SAFE_INTEGER;
    // array.forEach(element => {
    //     if (element >= biggest) {
    //         result.push(element)
    //         biggest = element;
    //     }
    // });
    // return result


     //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // solution using reduce() method

    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    array.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
        return accumulated;
    }, result)
    return result;
}

console.log(extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(extractSubsequence([1, 2, 3, 4]));

console.log(extractSubsequence([20, 3, 2, 15, 6, 1]));