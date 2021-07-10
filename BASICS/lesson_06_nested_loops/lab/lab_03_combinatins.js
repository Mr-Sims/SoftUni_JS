function combinations(input) {
    let targetNum = Number(input[0]);
    let comboCount = 0

    for (i = 0; i <= targetNum; i++) {
        for (j = 0; j <= targetNum; j++) {
            for (k = 0; k <= targetNum; k++) {
                if (i + j + k === targetNum) {
                    comboCount++;
                }
            }
        }
    }
    console.log(comboCount)
}

combinations(["5"])