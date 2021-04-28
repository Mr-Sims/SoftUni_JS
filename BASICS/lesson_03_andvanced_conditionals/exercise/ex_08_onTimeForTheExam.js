function onTime(input){
    let examHour = Number(input[0])
    let examMin = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMin = Number(input[3])
    let examTotalTime = examHour * 60 + examMin
    let arrivalTotalTime = arrivalHour * 60 + arrivalMin 
    let diff = 0

    if (arrivalTotalTime > examTotalTime){
        diff = arrivalTotalTime - examTotalTime
        if (diff <= 59){
            console.log("Late")
            console.log(`${diff} minutes after the start`)
        }
        if (diff>= 60){
            let lateHour = diff / 60
            let lateMin = diff % 60
            if (lateMin < 10){
                console.log(`Late`)
                console.log(`${Math.floor(lateHour)}:0${lateMin} hours after the start`)
            }else if (lateMin >= 10){
                console.log(`Late`)
                console.log(`${Math.floor(lateHour)}:${lateMin} hours after the start`)
            }
        }
    }else if (arrivalTotalTime === examTotalTime){
        console.log(`On time`)
    }else if (arrivalTotalTime < examTotalTime && arrivalTotalTime >= (examTotalTime - 30)){
        diff = examTotalTime - arrivalTotalTime
        console.log(`On time`)
        console.log(`${diff} minutes before the start`)
    }else if (arrivalTotalTime < (examTotalTime - 30)){
        diff = examTotalTime - arrivalTotalTime
        if (diff <= 59){
            console.log(`Early`)
            console.log(`${diff} minutes before the start`)
        }else if (diff >= 60){
            let earlyHour = diff / 60
            let earlyMin = diff % 60
            if (earlyMin < 10){
                console.log(`Early`)
                console.log(`${Math.floor(earlyHour)}:0${earlyMin} hours before the start`)
            }else if (earlyMin >= 10){
                console.log(`Early`)
                console.log(`${Math.floor(earlyHour)}:${earlyMin} hours before the start`)
            }
        }
    }
}

onTime(["9", "30", "9", "50"])
onTime(["9", "00", "10", "30"])
onTime(["10", "00", "10", "00"])
onTime(["9", "00", "8", "30"])
onTime(["14", "00", "13", "55"])
onTime(["11", "30", "10", "55"])
onTime(["16", "00", "15", "00"])
onTime(["11", "30", "8", "12"])
onTime(["11", "30", "12", "29"])






