// solution 1
function match(str) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = [];
    let validName = null;
    while((validName = pattern.exec(str))) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");



// solution 2
function match2(str) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let names = str.match(pattern)

    console.log(names.join(' '))
}

match2("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");