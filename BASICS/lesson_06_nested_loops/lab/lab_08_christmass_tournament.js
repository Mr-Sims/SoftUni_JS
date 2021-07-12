function christmasTournament(input) {
    let counter = 0;
    let money = 0;
    let dayWin = 0;
    let dayLoss = 0;
    let tournamentDuration = Number(input[counter]);
    counter++;

    for (days = 1; days <= tournamentDuration; days++) {
        let dayMoney = 0;
        let currentDaywins = 0;
        let currentDayloses = 0;
        let command = input[counter];
        counter++;
        while (command != "Finish") {
            let game = command;
            let outcome = input[counter];
            counter++;
            if (outcome === "win") {
                currentDaywins++;
                dayMoney += 20;
            } else if (outcome === "lose") {
                currentDayloses++;
            }
            command = input[counter];
            counter++;
        }
        if (currentDaywins > currentDayloses) {
            dayWin++;
            dayMoney *= 1.1
            money += dayMoney
        } else {
            dayLoss++;
            money += dayMoney
        }
    }
    if (dayWin > dayLoss) {
        money *= 1.2
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }
}

christmasTournament(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])

christmasTournament(["3",
    "darts", "lose", "handball", "lose", "judo", "win", "Finish",
    "snooker", "lose", "swimming", "lose", "squash", "lose", "table tennis", "win", "Finish",
    "volleyball", "win", "basketball", "win", "Finish"])