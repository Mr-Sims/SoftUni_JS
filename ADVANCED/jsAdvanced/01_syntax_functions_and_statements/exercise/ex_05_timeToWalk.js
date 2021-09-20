function calculateTime(steps, footLength, speed) {
    let distance = steps * footLength;
    let additionalMinutes = Math.floor(distance / 500);
    let time = ((distance / 1000) / speed);
    let hours = Math.floor(time);
    let minutes = Number((time * 60).toFixed(2));
    let seconds = Number(((minutes - Math.floor(minutes)) * 60).toFixed());

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    console.log(`${hours}:${Math.floor(minutes+additionalMinutes)}:${seconds}`)
}

calculateTime(4000, 0.60, 5);
calculateTime(2564, 0.70, 5.5);
