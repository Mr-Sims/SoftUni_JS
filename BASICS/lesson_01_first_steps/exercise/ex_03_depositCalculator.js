function depositCalculaor(input) {
    let investment = Number(input[0])
    let term = Number(input[1])
    let interestRate = Number(input[2] / 100)
    let sum = investment + (term * ((investment * interestRate) / 12))
    console.log(sum)
}

depositCalculaor(["200", "3", "5.7"])