function readText(input) {
    
    let counter = 0
    while (true) {
        let string = input[counter]
        counter++
        if (string === 'Stop') {
            break;
        }
        
        console.log(string)

    }

}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])