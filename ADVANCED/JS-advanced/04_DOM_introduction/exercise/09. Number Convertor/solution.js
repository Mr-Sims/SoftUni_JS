function solve() {
    let inputValue = document.querySelector('#input');
    let resultField = document.querySelector('#result');
    let convertButton = document.querySelectorAll('button')[0];
    let selectMenuTO = document.querySelector('#selectMenuTo');

    let optionBinary = document.createElement('option');
    let optionBinaryText = document.createTextNode('Binary');
    optionBinary.appendChild(optionBinaryText);
    optionBinary.setAttribute('value', 'binary');
    selectMenuTO.appendChild(optionBinary);

    let optionHexadecimal = document.createElement('option');
    let optionHexadecimalText = document.createTextNode('Hexadecimal');
    optionHexadecimal.appendChild(optionHexadecimalText);
    optionHexadecimal.setAttribute('value', 'hexadecimal');
    selectMenuTO.appendChild(optionHexadecimal);


    convertButton.addEventListener('click', convert);


    function convert(ev) {
        if (selectMenuTO.value == 'binary') {
            function convertToBinary(x) {
                let bin = 0;
                let rem, i = 1, step = 1;
                while (x != 0) {
                    rem = x % 2;
                    x = parseInt(x / 2);
                    bin = bin + rem * i;
                    i = i * 10;
                }
                return bin;
            }
            resultField.value = convertToBinary(inputValue.value);
           
            // // using toString()
            // const number = Number(inputValue.value);
            // const result = number.toString(2);
            // resultField.value = result;
        }
        else if (selectMenuTO.value == 'hexadecimal') {
            let num = Number(inputValue.value)
            let result = num.toString(16)
            resultField.value = result.toUpperCase();

        }
    }
}