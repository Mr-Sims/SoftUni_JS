function evenPowers(input){
    let n = Number(input[0])
    for (i = 0; i <= n; i += 2){
        console.log(2**i)
    }
}
evenPowers(["3"])