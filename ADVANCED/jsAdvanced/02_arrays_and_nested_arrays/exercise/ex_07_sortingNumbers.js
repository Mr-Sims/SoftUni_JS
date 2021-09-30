function sortNums(array) {
    array.sort((a, b) => a - b);
  
    let resultAr = []
    while (array.length > 0) {
        resultAr.push(array.shift());
        resultAr.push(array.pop());
    }
    return resultAr;
}



console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));