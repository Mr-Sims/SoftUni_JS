function circleArea(r) {
    let inputType = typeof (r)
    if (inputType === 'number') {
        let area = r ** 2 * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
} 

circleArea(5)
circleArea('name')