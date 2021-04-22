function swimmingRecord(input){
    let recodSeconds = Number(input[0])
    let distanceMeters = Number(input[1])
    let secondsPerMeter = Number(input[2])
    let waterResistance = 12.5

    let result = ``
    let total = (distanceMeters * secondsPerMeter)
    let resistance = Math.floor(distanceMeters / 15) * waterResistance
    total += resistance
    if (total < recodSeconds){
        result = `Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`
    }else{
        result = `No, he failed! He was ${(total - recodSeconds).toFixed(2)} seconds slower.`
    }
    console.log(result)
}

swimmingRecord(["10464", "1500", "20"])
swimmingRecord(["55555.67", "3017", "5.03"])

