function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let days = 0
    let spendDays = 0
    let counter = 2

    while (true) {
        let command = input[counter];
        let amount = Number(input[counter + 1]);
        counter += 2;
        days++

        if (command === "save") {
            moneyAvailable += amount;
            spendDays = 0;
        } else if (command === 'spend') {
            spendDays++
            if (amount > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= amount;
            }
        }
        if (moneyAvailable >= moneyNeeded) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`)
            break;
        }

    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]) 
//You saved the money for 2 days.

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
// You can't save the money.
//5
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])
//You saved the money for 4 days.