//own solution
function generateReport() {
    const colHeads = document.getElementsByTagName('th')
    let checkedCols = []

    for (let i = 0; i < colHeads.length; i++) {
        if (colHeads[i].lastChild.checked) {
            checkedCols.push(i)
        }
    }

    const rows = document.querySelectorAll('tbody>tr')

    let finalResult = []
    if (checkedCols.length > 0) {
        for (let row of rows) {
            let obj = {}
            for (let el of checkedCols) {
                let colName = (colHeads[el].textContent).trim().toLowerCase()
                let rowElement = row.children[el].textContent
                obj[colName] = rowElement
            }
            finalResult.push(obj)
        }
        let output = document.getElementById('output')
        output.textContent = JSON.stringify(finalResult)
    }
}



//trainer solution

function generateReport() {
    let elementsInput = Array.from(document.getElementsByTagName('input'));
    const resultArr = [];

    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const object = {};

        for (let j = 0; j < row.children.length; j++) {
            const element = row.children[j];

            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(j);
                }
                continue;
            }
            if (checkedCols.includes(j)) {
                let propName = elementsInput[j].name;
                object[propName] = element.textContent;
            }
        }
        if (i != 0) {
            resultArr.push(object)
        }
    }
    document.getElementById('output').value = JSON.stringify(resultArr);
}
