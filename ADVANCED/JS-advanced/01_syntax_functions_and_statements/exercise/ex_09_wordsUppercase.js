function upper(str) {
    str = str.split(/\W/)

    let res = []
    for (let el of str) {
        if (el) {
            res.push(el.toUpperCase())
        }
    }

    console.log(res.join(', '))

}

upper('Hi, how are you?');
upper('hello')
upper('Functions in JS can be nested, i.e. hold other functions')



