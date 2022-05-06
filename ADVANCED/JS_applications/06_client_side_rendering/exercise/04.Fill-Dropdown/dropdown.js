import { html, render } from './node_modules/lit-html/lit-html.js'

const selectTemplate = (items) => html`
                                    <select id="menu">
                                        ${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}
                                    </select>`;
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.querySelector('div')

document.querySelector('form').addEventListener('submit', addItem)

getData();

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
     
    update(Object.values(data))
}

function update(items) {
    const result = selectTemplate(items);
    render(result, root);
}

async function addItem(ev) {
    ev.preventDefault();
    let text = document.getElementById('itemText').value;
    // console.log(JSON. stringify(text));
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    if (response.ok) {
        getData()
        document.getElementById('itemText').value = ''
    }
}





// const testItems = [
//     {text: 'Sofia', _id: 'lj2l4kjh2l34h32lk'},
//     {text: 'Vidin', _id: 'l22l4kjh2l34h32lk'},
//     {text: 'Stara Zagora', _id: '222l4kjh2l34h32lk'},
// ]