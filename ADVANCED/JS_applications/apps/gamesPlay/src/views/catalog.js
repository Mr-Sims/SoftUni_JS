import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js';

const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    <!-- Display paragraph: If there is no games  -->
    ${games.length > 0 ? games.map(gameTemplate) : html`<h3 class="no-articles">No articles yet</h3>`}
</section>`;


const gameTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href=${`/details/${game._id}`} class="details-button">Details</a>
    </div>
</div>`;

export async function catalogPage(ctx) {
    const games = await gamesService.getAll()
    ctx.render(catalogTemplate(games))
}