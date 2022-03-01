function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let half = arr.length / 2;
    let resArray = arr.slice(half, arr.length);
    return resArray;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);