// // version 1
// import { html, render } from './node_modules/lit-html/lit-html.js'
// import { cats as catData } from './catSeeder.js'

// const catCard = (cat) => html`
// <li>
//     <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
//     <div class="info">
//         <button class="showBtn">Show status code</button>
//         <div class="status" style="display: none" id="${cat.id}">
//             <h4>Status Code: ${cat.statusCode}</h4>
//             <p>${cat.statusMessage}</p>
//         </div>
//     </div>
// </li>`
// const root = document.getElementById('allCats');

// render(html`<ul>${catData.map(catCard)}</ul>`, root)

// root.addEventListener('click', (ev) => {
//     if (ev.target.tagName == 'BUTTON') {
//         const element = ev.target.parentNode.querySelector('.status')
//         const buttonText = ev.target
//         if (element.style.display == 'none') {
//             buttonText.textContent = 'Hide status code'
//             element.style.display = 'block'
//         } else {
//             buttonText.textContent = 'Show status code'
//             element.style.display = 'none'
//         }
//     }
// })



// // version 2
import { html, render } from './node_modules/lit-html/lit-html.js'
import { cats as catData } from './catSeeder.js'

const catCard = (cat ) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${() => toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        ${cat.info ? html`<div class="status" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>`: null}
    </div>
</li>`
const root = document.getElementById('allCats');
catData.forEach(c => c.info = false)
update()

function update() {
    render(html`<ul>${catData.map(catCard)}</ul>`, root)
}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update()
}