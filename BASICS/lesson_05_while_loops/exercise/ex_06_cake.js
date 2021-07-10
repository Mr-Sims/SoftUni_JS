function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakeSize = cakeLength * cakeWidth;
    let counter = 2;

    while (cakeSize > 0) {
        let command = input[counter];
        if (command == 'STOP') {
            break;
        }    
        let cakePieces = Number(command);
        cakeSize -= cakePieces
        counter ++;
    }
    if (cakeSize > 0) {
        console.log(`${cakeSize} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"])
//No more cake left! You need 1 pieces more.

cake(["10", "2", "2", "4", "6", "STOP"])
// 8 pieces are left.

