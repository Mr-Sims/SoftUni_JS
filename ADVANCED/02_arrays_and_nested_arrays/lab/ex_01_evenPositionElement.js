function findEvenPosition(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[newArray.length] = array[i]
        }
    }
    console.log(newArray.join(' '))
}

findEvenPosition(['20', '30', '40', '50', '60'])
findEvenPosition(['5', '10'])
