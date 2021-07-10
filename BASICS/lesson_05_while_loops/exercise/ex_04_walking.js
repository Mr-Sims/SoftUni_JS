function walking(input) {
    let goal = 10000;
    let steps = 0;
    let counter = 0;
    

    while (steps < goal) {
        let command = input[counter];
        if (command === "Going home") {
            steps += Number(input[counter + 1]);
            break;
        }
        let currentSteps = Number(command);
        counter++;
        steps += currentSteps;
    }
    let stepsDiff = Math.abs(goal - steps);
    if (steps > goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsDiff} steps over the goal!`);
    } else {
        console.log(`${stepsDiff} more steps to reach goal.`);
    }
}

walking(["1000", "1500", "2000", "6500"]) 
//Goal reached! Good job!
//1000 steps over the goal!````     


walking(["1500", "300", "2500", "3000", "Going home", "200"])
//2500 more steps to reach goal.

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
//Goal reached! Good job!
//298 steps over the goal!

walking(["125", "250", "4000", "30", "2678", "4682"])
//Goal reached! Good job!
//1765 steps over the goal!
