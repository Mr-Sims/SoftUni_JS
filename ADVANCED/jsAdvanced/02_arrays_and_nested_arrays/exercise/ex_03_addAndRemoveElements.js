function addAndRemove(array) {
    let num = 1;
    let result = [];

    array.forEach((el) => {
    if (el === 'add') {
        result.push(num);
    } else {
        result.pop();
    }
    num++;
}) 
    if (result.length === 0) {
        console.log('Empty')
    } else {
        for (let el of result) {
            console.log(el)
        }
    }
}

// addAndRemove(['add', 
// 'add', 
// 'add', 
// 'add']
// );

// addAndRemove(['add', 
// 'add', 
// 'remove', 
// 'add', 
// 'add']);

addAndRemove(['remove', 
'remove', 
'remove']);