// // solution 1
function calculateTime(steps, footLength, speed) {
    let distance = steps * footLength;
    let additionalMinutes = Math.floor(distance / 500);
    let speedMetersSecond = speed / 3.6;
    let time = distance / speedMetersSecond

    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time/60);
    let seconds = Math.round(time - (minutes * 60));

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + additionalMinutes < 10 ? "0" : "") + (minutes + additionalMinutes) + ":" + (seconds < 10 ? "0" : "") + seconds)
}



// calculateTime(4000, 0.60, 5);
// calculateTime(2564, 0.70, 5.5);



// // solution 2
function calculateTime(steps, footPrint, speedKmH) {
    let distance = steps * footPrint;
    let speed = speedKmH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;

    let hours = Math.floor(time/3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

calculateTime(4000, 0.60, 5);
calculateTime(2564, 0.70, 5.5);