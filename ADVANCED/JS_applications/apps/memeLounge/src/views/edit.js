import { html } from "../lib.js";
import * as memeService from "../api/memes.js";
import { notifications } from "../notifications.js";

const editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function editPage(ctx) {
   const meme = await memeService.getMemeById(ctx.params.id)

    ctx.render(editTemplate(meme, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target)
        const data = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
        }

        if (Object.values(data).some(f => f == '')) {
            notifications('All fields are required!');
            return
        }

        await memeService.editMemeById(ctx.params.id, data)
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}