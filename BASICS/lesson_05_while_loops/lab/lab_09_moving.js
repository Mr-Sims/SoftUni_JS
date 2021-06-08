function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let totalSpace = width * length * height;
    let index = 3;
    let command = input[index];
    let allBoxes = 0;
    
    while (command != 'Done') {
        totalSpace -= Number(command);
        if (totalSpace <= 0) {
            break;
        }
        index++
        command = input[index]
    }
    if (totalSpace > 0) {
        console.log(`${totalSpace} Cubic meters left.`)
    }else {
        console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`)
    }
}


moving(["10", "10", "2", "20", "20", "20", "20", "122"])
moving(["10", "1", "2", "4", "6", "Done"])