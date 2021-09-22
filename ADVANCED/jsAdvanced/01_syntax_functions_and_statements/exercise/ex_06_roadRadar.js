function calculateSpeed(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let speedLimit;

    switch (area) {
        case 'city': speedLimit = cityLimit; break;
        case 'residential': speedLimit = residentialLimit; break;
        case 'interstate': speedLimit = interstateLimit; break;
        case 'motorway': speedLimit = motorwayLimit; break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed > speedLimit) {
        let excede = speed - speedLimit;
        if (excede <= 20) {
            console.log(`The speed is ${excede} km/h faster than the allowed speed of ${speedLimit} - speeding`)
        } else if ( excede <= 40) {
            console.log(`The speed is ${excede} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
        } else if (excede > 40) {
            console.log(`The speed is ${excede} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
        }
    }
}

calculateSpeed(40, 'city');
calculateSpeed(21, 'residential');
calculateSpeed(120, 'interstate');
calculateSpeed(200, 'motorway');
