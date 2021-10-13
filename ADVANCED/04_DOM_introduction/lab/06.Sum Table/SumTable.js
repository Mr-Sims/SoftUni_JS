function sumTable() {
    const elements = document.querySelectorAll('table tr');
    let result = 0;
    for (let i = 1; i < elements.length-1; i++){
        result += Number(elements[i].lastChild.textContent);
    }
    document.getElementById('sum').textContent = result;
}