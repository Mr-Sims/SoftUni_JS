function oldBooks(input) {
    let target = input[0];
    let index = 1;
    let command = input[index];
    let is_found = false;
    while (command != 'No More Books') {
        if (command === target) {
            is_found = true
            break;
        }
        index++
        command = input[index];
    }
    if (is_found) {
        console.log(`You checked ${index-1} books and found it.`);
    }else {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${index-1} books.`)
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"])
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])

