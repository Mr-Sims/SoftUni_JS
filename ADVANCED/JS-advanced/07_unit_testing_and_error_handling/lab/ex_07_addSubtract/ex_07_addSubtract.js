function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = {
    createCalculator
}

// const calculator = createCalculator()
// calculator.add('a')
// console.log((calculator.get()))

// calculator.subtract(4)
// console.log((calculator.get()))