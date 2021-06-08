function examPrep(input) {
    let badGradesLimit = Number(input[0]);
    let index = 1;
    let command = input[index];
    let badScores = 0;
    let totalScore = 0
    let need_break = false;
    let problemName = ''
    let problemNumber = 0
    while (command != 'Enough') {
        problemName = command;
        index++
        let problemScore = Number(input[index]);
        problemNumber += 1
        totalScore += problemScore
        if (problemScore <= 4) {
            badScores += 1;
            if (badScores === badGradesLimit) {
                need_break = true;
                break;
            }
        }
        index++
        command = input[index]
    }
    if (need_break) {
        console.log(`You need a break, ${badGradesLimit} poor grades.`);
    } else {
        let average = totalScore / (problemNumber)
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${problemNumber}`);
        console.log(`Last problem: ${problemName}`)
    }
}

//examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])