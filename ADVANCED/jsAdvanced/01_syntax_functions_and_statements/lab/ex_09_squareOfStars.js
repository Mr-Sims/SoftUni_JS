function squareOfStars(side) {
    for (let i = 1; i <= side; i++) {
        let res = '';
        for (let j = 1; j <= side; j++ ) {
            res += '* '
        }
        console.log(res.trimRight())
    }
}

  
function squareOfStars1(num) {
    const symbol = '*';
    for (let i = 0; i < num; i++) {
      console.log((symbol + ' ').repeat(num).trimRight())
    }
}

squareOfStars(5)
squareOfStars(10)