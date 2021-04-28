function volleyball(input){
    let yearType = input[0]
    let p = Number(input[1])
    let h = Number(input[2])
    let totalWeekends = 48
    let weekendsSofia = totalWeekends - h
    let playWeekendsSofia = weekendsSofia * (3/4)
    let playHoliday = p * (2/3)
    let totalPlay = playWeekendsSofia + h + playHoliday
    if (yearType === "leap"){
        totalPlay *= 1.15
        console.log(Math.floor(totalPlay))
    }else if (yearType === "normal"){
        console.log(Math.floor(totalPlay))
    }
}

volleyball(["leap", "5", "2"])
volleyball(["normal",  "3", "2"])
