function matchPhone(input) {
    let str = input;
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let phoneNums = str.match(pattern)

    console.log(phoneNums.join(', '))
}

matchPhone("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")

function matchPhone2(input) {
    let str = input;
    let pattern = /\+[359]+-[2]-[0-9]{3}-[0-9]{4}\b|\+[359]+ [2] [0-9]{3} [0-9]{4}\b/g;

    let phones = [];
    let phone = null;
    while((phone = pattern.exec(str))) {
        phones.push(phone[0]);
    }
    console.log(phones.join(', '));
}

matchPhone2("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")


