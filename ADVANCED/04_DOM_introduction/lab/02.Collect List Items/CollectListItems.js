function extractText() {
    const items = document.getElementsByTagName('li');
    // let textarea = document.querySelector('#result');
    // for (let item of Array.from(result)) {
    //     textarea.value += item.innerText + '\n';
    // }

    const result = [];

    for (let item of items) {
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n');

}