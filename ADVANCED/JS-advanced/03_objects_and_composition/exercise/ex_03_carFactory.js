function carFactory(obj) {
    let result = {};
    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else if (power <= 200) {
            return { power: 200, volume: 3500 };
        }
    }
    let wheelSize = obj.wheelsize % 2 == 0 ? obj.wheelsize-1 : obj.wheelsize;

    result.model = obj.model;
    result.engine = getEngine(obj.power);
    result.carriage = { type: `${obj.carriage}`, color: `${obj.color}` },
    result.wheels = new Array(4).fill(wheelSize, 0, 4);
    return result;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));

console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}))