function invalidNumber(input) {
    let num = Number(input[0]);
    let isValid = false;
    if (num >= 100 && num <= 200 || num === 0) {
        isValid = true
    } else {
        isValid = false
    }
    if (isValid === false) {
        console.log("invalid")
    }
}

invalidNumber(["75"])
invalidNumber(["150"])
invalidNumber(["-1"])