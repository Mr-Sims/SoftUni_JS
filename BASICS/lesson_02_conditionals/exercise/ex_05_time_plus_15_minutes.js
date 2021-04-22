function timePlus(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])
    let extraMinutes = minutes + 15
    let result = ``
    if (extraMinutes <= 59){
        result = `${hour}:${extraMinutes}`
    }else{
        hour += 1
        let currentMinutes = extraMinutes % 60
        if (hour == 24){
            if (currentMinutes < 10){
                result = `0:0${currentMinutes}`
            }else if (currentMinutes >= 10){
                result = `0:${currentMinutes}`
            }
        }if (hour > 0 && hour <= 23){
            if (currentMinutes < 10){
                result = `${hour}:0${currentMinutes}` 
            }else if (currentMinutes >= 10){
                result = `${hour}:${currentMinutes}`
            }
        } 
    }   
    console.log(result)
}

timePlus(["0", "01"])