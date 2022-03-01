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

function solve2() {
    let data = {};

    Array.from(arguments).forEach((line) => {
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (!data[type]) {
            data[type] = 0;
        }
        data[type]++;
    })

    Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`))
}


solve2('cat', 42, function () { console.log('Hello world!'); })


solve2({ name: 'bob' }, 3.333, 9.999)