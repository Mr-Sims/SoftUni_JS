function smallestTwo(arr) {
    arr.sort((a, b) => a - b);
    let resArray = [];

    for (let i = 0; i <= 1; i++) {
        resArray.push(arr[i]);
        
    }
    console.log(resArray.join(' '));
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
