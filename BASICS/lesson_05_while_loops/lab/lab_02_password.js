function password(input) {
    let username = input[0];
    let pass = input[1];

    let counter = 2;

    while (true) {
        let logTry = input[counter];
        if (logTry === pass) {
            console.log(`Welcome ${username}!`);
            break;
        }
        counter++
    }
}

password(["Nakov", "1234", "Pass", "1324", "1234"])