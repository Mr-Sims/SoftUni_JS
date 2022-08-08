import {html, render} from '../node_modules/lit-html/lit-html.js'


const homeTemplate = () => html`
<h1>HOME<h1>
<p>Lorem ipsum dolor sit amet</p>`;

const root = document.getElementById('root')


export const homeView = (ctx) => {
    render(homeTemplate(), root)

}

