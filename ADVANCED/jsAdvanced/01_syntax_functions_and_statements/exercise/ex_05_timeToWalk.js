function calculateTime(steps, footLength, speed) {
    let distance = steps * footLength;
    let additionalMinutes = Math.floor(distance / 500);
    let speedMetersSecond = speed / 3.6;
    let time = distance / speedMetersSecond

    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time/60);
    let seconds = Math.round(time - (minutes * 60));
    let result = new Date(0, 0, 0, hours, minutes, seconds);

    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + additionalMinutes < 10 ? "0" : "") + (minutes + additionalMinutes) + ":" + (seconds < 10 ? "0" : "") + seconds)
}

calculateTime(4000, 0.60, 5);
calculateTime(2564, 0.70, 5.5);
