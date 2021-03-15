function birthday(input) {
    let hallRent = Number(input[0])
    let cake = hallRent * 0.2
    let drinks = cake - (cake * 0.45) 
    let animator = hallRent / 3
    res = hallRent + cake + drinks + animator
    console.log(res)

}

birthday(["2250"])