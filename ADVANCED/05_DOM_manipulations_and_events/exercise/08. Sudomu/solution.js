function solve() {

    const quickCheckBTN = document.getElementsByTagName('button')[0]
    const clearBTN = document.getElementsByTagName('button')[1]

    quickCheckBTN.addEventListener('click', quickCheck);
    clearBTN.addEventListener('click', clear);

    const resultMsgParagraph = document.getElementById('check').children[0];

    const table = document.getElementById('exercise').children[0]

    const tableCells = document.querySelector('tbody')
    const upperLeft = tableCells.children[0].children[0].children[0];
    const upperMid = tableCells.children[0].children[1].children[0];
    const upperRight = tableCells.children[0].children[2].children[0];

    const middleLeft = tableCells.children[1].children[0].children[0];
    const middleMid = tableCells.children[1].children[1].children[0];
    const middleRight = tableCells.children[1].children[2].children[0];

    const bottomLeft = tableCells.children[2].children[0].children[0];
    const bottomMid = tableCells.children[2].children[1].children[0];
    const bottomRight = tableCells.children[2].children[2].children[0];

    function quickCheck() {

        let firstRow = Number(upperLeft.value) + Number(upperMid.value) + Number(upperRight.value);
        let secondRow = Number(middleLeft.value) + Number(middleMid.value) + Number(middleRight.value);
        let thirdRow = Number(bottomLeft.value) + Number(bottomMid.value) + Number(bottomRight.value);

        let firstCol = Number(upperLeft.value) + Number(middleLeft.value) + Number(bottomLeft.value);
        let secondCol = Number(upperMid.value) + Number(middleMid.value) + Number(bottomMid.value);
        let thirdCol = Number(upperRight.value) + Number(middleRight.value) + Number(bottomRight.value);
       
        if (firstRow == secondRow && secondRow == thirdRow && thirdRow == firstCol && firstCol == secondCol && secondCol == thirdCol && thirdCol == 6) {
            table.style.border = '2px solid green'
            resultMsgParagraph.textContent = "You solve it! Congratulations!"
            resultMsgParagraph.style.color = 'green'

        } else {
            table.style.border = '2px solid red'
            resultMsgParagraph.textContent = "NOP! You are not done yet..."
            resultMsgParagraph.style.color = 'red'

        }
    }

    function clear() {
        upperLeft.value = '';
        upperMid.value = '';
        upperRight.value = '';

        middleLeft.value = '';
        middleMid.value = '';
        middleRight.value = '';
        
        bottomLeft.value = '';
        bottomMid.value = '';
        bottomRight.value = '';

        table.style.border = ''
        resultMsgParagraph.textContent = ""
    }
}