function passwordGuess(input) {
    let password = "s3cr3t!P@ssw0rd"
    let new_pass = input[0]
    if (new_pass == password){
        console.log ("Welcome")
    }else{
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])