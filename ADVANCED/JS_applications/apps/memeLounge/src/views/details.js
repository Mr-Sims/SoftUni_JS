import { html, nothing } from "../lib.js";
import * as memeService from '../api/memes.js';
import {getUserData} from '../util.js';

const detailsTemplate = (meme, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${meme.owner
                 ? html`
                 <a class="button warning" href="/edit/${meme._id}">Edit</a>
                 <button @click=${onDelete} class="button danger" href="javascript:void(0)">Delete</button>`
                 : nothing}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const meme = await memeService.getMemeById(ctx.params.id);
    const user = getUserData();
   
    meme.owner = user?.id == meme._ownerId;
    // this is the same as the line above
    // if(user) {
    //     meme.owner = user.id == meme._ownerId;
    // }

    ctx.render(detailsTemplate(meme, onDelete));

    async function onDelete(ev) {
        ev.preventDefault();
        if(confirm('Are you sure you want to delete this meme?')) {
            await memeService.deleteById(meme._id);
            ctx.page.redirect('/memes');
        }
    }
}