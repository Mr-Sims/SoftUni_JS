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
    /////////////////////////////////////////////////////////
    // let elementsInput = Array.from(document.getElementsByTagName('input'));

    // const resultArr = [];
    // let tableRows = Array.from(document.getElementsByTagName('tr'));
    // const checkedCols = [];

    // for (let i = 0; i < tableRows.length; i++) {
    //     const row = tableRows[i];
    //     const obj = {};

    //     for (let y = 0; y < row.children.length; y++) {
    //         const element = row.children[y];
    //         if (i == 0) {
    //             if (element.children[0].checked) {
    //                 checkedCols.push(y);
    //             }
    //             continue;
    //         }

    //         if (checkedCols.includes(y)) {
    //             let propertyName = elementsInput[y].name;
    //             obj[propertyName] = element.textContent;
    //         }
    //     }
    //     if (i !== 0) {
    //         resultArr.push(obj);
    //     }
    // }

    // document.getElementById('output').value = JSON.stringify(resultArr);
}
