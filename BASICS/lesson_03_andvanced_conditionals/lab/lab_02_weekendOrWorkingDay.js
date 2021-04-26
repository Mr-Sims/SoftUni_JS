function weekendOrWorkingDay(input){
    let day = input[0]
    let workdays = [, "Tuesday", "Wednesday", "Thursday", "Friday"]
    let weekend = ["Saturday", "Sunday"]
    
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error")
            break;
    }
}

weekendOrWorkingDay(["Monday"])
weekendOrWorkingDay(["Saturday"])
weekendOrWorkingDay(["Moy"])