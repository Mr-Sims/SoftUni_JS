function rotate(array, num) {
    for (let i = 0; i < num; i++ ) {
        let elRotate = array.pop();
        array.unshift(elRotate);
    }
    console.log(array.join(' '))
}

// rotate(['1', 
// '2', 
// '3', 
// '4'], 
// 2); 

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);