function add(num) {
    function adder (n) {
        num += n;
        return adder;
    }
    adder.toString = function(){
        return '' + num
    };
    return adder;
}

console.log(add(1))
console.log(add(1)(6)(-3).toString())