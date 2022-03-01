function subtract() {
    // console.log('TODO:...');
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    const res = Number(num1) - Number(num2);
    const result = document.getElementById('result');
    result.innerHTML = res;
}