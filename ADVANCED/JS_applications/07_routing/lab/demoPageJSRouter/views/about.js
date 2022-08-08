import {html, render} from '../node_modules/lit-html/lit-html.js'

const aboutTemplate = () => html`
<h1>ABUT<h1>
<p>We are the alpha nad omega Lorem ipsum dolor sit amet</p>`;

const root = document.getElementById('root')


export const aboutView = (ctx) => {
   render(aboutTemplate(), root)

}