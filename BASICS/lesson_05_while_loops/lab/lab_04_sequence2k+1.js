function sequence2k1(input) {
    let primaryNum = Number(input[0]);
    let startNum = 1;

    while (startNum <= primaryNum) {
        console.log(startNum);
        startNum = (startNum * 2) + 1;
    }
}

sequence2k1(['3'])
sequence2k1(['8'])
sequence2k1(['17'])
sequence2k1(['31'])