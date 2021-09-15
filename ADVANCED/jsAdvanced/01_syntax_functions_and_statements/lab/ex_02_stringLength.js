function stringLength(a, b, c) {
    let resultTotal = 0;
    resultTotal += Number(a.length) + Number(b.length) + Number(c.length);
    resultAver = Number(resultTotal / 3).toFixed(0);
    console.log(resultTotal);
    console.log(resultAver)

}


function stringLength1(a, b, c) {
    let resultTotal = a.length + b.length + c.length;
    resultAver = (resultTotal / 3).toFixed(0);
    console.log(resultTotal);
    console.log(resultAver)
}

stringLength1('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')