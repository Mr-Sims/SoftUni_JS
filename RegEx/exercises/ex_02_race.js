function race(input) {
    let namePattern = /[A-Za-z]/g;
    let kmPattern = /\d/g;
 
    let names = input[0].split(', ');
    let participants = {}

    for (let i = 1; i < input.length-1; i++) {
        let current = input[i];
        let nameMatch = current.match(namePattern)
        let name = nameMatch.join('')
        if (!names.includes(name)) {
            continue;
        }
        let kilometers = current.match(kmPattern)
        kilometers = kilometers.map(x => Number(x)).reduce((a,c) => a+c)
        if(!participants[name]) {
            participants[name] = 0
        }
        participants[name] += kilometers
    }
    let initialSort = Object.entries(participants).sort((a,b) => {
       return b[1] - a[1]
    })
    console.log(`1st place: ${initialSort[0][0]}\n2nd place: ${initialSort[1][0]}\n3rd place: ${initialSort[2][0]}`)
}



race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);