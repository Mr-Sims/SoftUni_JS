import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../util.js';
import * as gamesService from '../api/games.js'

const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, formData, event) {
    console.log(formData);

    // if(formData.title == '' || formData.category == '' || formData.summary == '' || formData.maxLevel == '' || formData.imageUrl == '') {
    //     return alert('All fields required!')
    // }

    if (Object.values(formData).some(f => f.trim() == '')) {
        return alert('All fields required!')
    }
    await gamesService.create({
        title: formData.title,
        category: formData.category,
        maxLevel: formData.maxLevel,
        imageUrl: formData.imageUrl,
        summary: formData.summary
    });
    event.target.reset();
    ctx.page.redirect('/');

}