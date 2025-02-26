// solution 1
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

// solution 2
function matchDate2(input) {
    let str = input;
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    // let pattern = /\b(?<day>[0-9]{2})([\/\.-])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/g;

    let validDate = null;

    while ((validDate = pattern.exec(str))) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDate2("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")

