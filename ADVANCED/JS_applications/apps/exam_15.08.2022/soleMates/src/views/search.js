import { html, nothing } from '../library.js';
import * as contentService from '../services/content.js';
import { getUserData } from '../utility.js';

const searchTemplate = (onSubmit, result = []) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${result.length > 0 ? html`
        <ul class="card-wrapper">
            ${result.map(resultTemplate)}
        </ul>` : html`
        <h2>There are no results found.</h2>`}
    </div>
</section>`;


const resultTemplate = (item) => html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    ${item.isLogged ? html`<a class="details-btn" href="/details/${item._id}">Details</a>` : nothing}
</li>`

export async function searchPage(ctx) {

    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const query = formData.get('search');

        const result = await contentService.searchByQuery(query);
        console.log(result);
        const user = getUserData()

        if (user) {
            if (result.length > 0) {
                for (let item of result) {
                    item.isLogged = true;
                }
            } else {
                for (let item of result) {
                    item.isLogged = true;
                }
            }
        }
        ctx.render(searchTemplate(onSubmit, result))
    }
}