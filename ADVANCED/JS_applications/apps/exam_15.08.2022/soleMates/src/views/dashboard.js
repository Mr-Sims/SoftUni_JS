import { html, nothing } from '../library.js';
import * as contentService from '../services/content.js'
import { getUserData } from '../utility.js';

const dashboardTemplate = (items) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    
    ${items.length > 0 ? html`
    <ul class="card-wrapper">
        ${items.map(itemTemplate)}
    </ul>` : html`
    <h2>There are no items added yet.</h2>`}

</section>`;

const itemTemplate = (item) => html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
</li>`;

export async function dashboardPage(ctx) {
    const items = await contentService.getAllItems()
    // const user = getUserData()
    // for (let item of items) {
    //     if (user != null) {
    //         item.user = true
    //     } else {
    //         item.user = false
    //     }
    // }
    ctx.render(dashboardTemplate(items))
}


// ${item.user ? html`<a class="details-btn" href="/details/${item._id}">Details</a>` : nothing} 
