function matchDate(input) {
    let str = input;
    let pattern = /\b[0-9]{2}([\/\.-])[A-Z][a-z]{2}\1[0-9]{4}\b/g;

    let dates = str.match(pattern);
    let delimiterPattern = /[\.\/-]/g;
    for (let date of dates) {
        let [day, month, year] = date.split(delimiterPattern);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDate("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")