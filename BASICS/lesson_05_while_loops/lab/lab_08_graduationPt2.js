function graduation(input) {
    let studentName = input[0];
    let year = 1;
    let fail = 0;
    let grades = 0
    while (year <= 12) {
        let grade = Number(input[year]);
        if (grade < 4) {
            fail += 1;
            if (fail === 2) {
                console.log(`${studentName} has been excluded at ${year} grade`)
                break;
            }
            continue;
        }
        year++
        grades += grade
    }
    if (fail < 2) {
        let average = grades / (year - 1)
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`)
    }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])

