// function add(num) {
//     function adder (n) {
//         num += n;
//         return adder;
//     }
//     adder.toString = function(){
//         return '' + num
//     };
//     return adder;
// }


function add(num) {
    let sum = 0;

    function innerSum(number) {
        sum += number;
        return innerSum
    }
    innerSum.toString = () => {
        return sum;
    }
    return innerSum(num)
}


console.log(add2(1))
console.log(add2(1)(6)(-3).toString())

