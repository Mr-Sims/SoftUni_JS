function calculator() {
    let num1     
    let num2 
    let result

    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(selector1)
        num2 = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value)
        return result
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value)
        return result
    }

    const calculate = {
        init,
        add,
        subtract
    }
    return calculate
}


const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 


