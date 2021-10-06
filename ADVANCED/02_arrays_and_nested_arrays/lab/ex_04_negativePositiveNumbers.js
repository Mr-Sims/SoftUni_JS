function negativePositive(arr) {
    let res = [];

    for (let num of arr) {
        if (num < 0) {
            res.unshift(num);
        } else {
            res.push(num);
        }
    }
    console.log(res.join('\n'))
}


negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);