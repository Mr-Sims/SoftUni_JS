function sameNumbers(num) {
    let numString = num.toString();
    let same = true;
    let sum = 0;
    let endCycle = numString.length;
    for (let i = 0; i < endCycle-1; i++) {
        if (numString[i] != numString[i + 1]) {
            continue;
        } else {
            same = false;
            break;
        }
    }
    for (let i = 0; i <= endCycle-1; i++) {
        let numToAdd = Number(numString[i]); // it is also valid to use parseInt(numString[i])
        sum += numToAdd;
    }
    console.log(same);
    console.log(sum)
}

sameNumbers(2222222);
sameNumbers(1234);
