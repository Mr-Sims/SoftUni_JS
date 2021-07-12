function travelling(input) {
    let counter = 0
    let command = input[counter]
    
    while (command != 'End') {
        
        let destination = command;
        counter++;
        let minBudget = Number(input[counter]);
        counter++;
        let amount = 0;
        while(true) {
            let deposit = Number(input[counter]);
            counter++;
            amount += deposit
            if (amount >= minBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
        command = input[counter]
    }
}

//travelling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]) 

travelling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]) 

