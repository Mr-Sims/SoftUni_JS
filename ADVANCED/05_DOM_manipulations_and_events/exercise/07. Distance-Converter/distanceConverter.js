function attachEventsListeners() {
    const inputValue = document.getElementById('inputDistance');
    const inputUnit = document.getElementById('inputUnits');

    const outputValue = document.getElementById('outputDistance');
    const outputUnit = document.getElementById('outputUnits');

    function convertToMeter(input, unit) {
        const convertTable = {
            km: input * 1000,
            m: input * 1,
            cm: input * 0.01,
            mm: input * 0.001,
            mi: input * 1609.34,
            yrd: input * 0.9144,
            ft: input * 0.3048,
            in: input * 0.0254
        }
        return convertTable[unit]
    }

    function convertMeterToOutput(input, unit) {
        const convertTableOutput = {
            km: input / 1000,
            m: input * 1,
            cm: input / 0.01,
            mm: input / 0.001,
            mi: input / 1609.34,
            yrd: input / 0.9144,
            ft: input / 0.3048,
            in: input / 0.0254 
        }
        return convertTableOutput[unit]
    }


    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', convertFunc);

    function convertFunc(ev) {
        const meters = convertToMeter(Number(inputValue.value), inputUnit.value)
        
        const output = convertMeterToOutput(Number(meters), outputUnit.value)
        outputValue.value = output
    }
}