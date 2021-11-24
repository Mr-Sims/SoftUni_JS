function solve(...input) {
    const args = {}

    for (let el of input) {
        const elType = typeof (el)
        if (args[elType] == undefined) {
            args[elType] = [];
        }
        args[elType].push(el)
        console.log(`${typeof(el)}: ${el}`)

    }
    const sorted = Object.entries(args).sort(([, a], [, b]) => b.length - a.length);
    
    for (let el of sorted) {
        console.log(`${el[0]} = ${el[1].length}`)
    }
}

solve('cat', 42, function () { console.log('Hello world!'); })


solve({ name: 'bob' }, 3.333, 9.999)