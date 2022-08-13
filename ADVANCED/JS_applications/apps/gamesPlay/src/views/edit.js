import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value="${game.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value="${game.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${game.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value="${game.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id
    const game = await gamesService.getById(id)

    ctx.render(editTemplate(game, createSubmitHandler(ctx, onSubmit)))
}


async function onSubmit(ctx, formData, event) {
    const gameId = ctx.params.id
    if (Object.values(formData).some(f => f.trim() == '')) {
        return alert('All fields required!')
    }
    await gamesService.editGame(gameId, {
        title: formData.title,
        category: formData.category,
        maxLevel: formData.maxLevel,
        imageUrl: formData.imageUrl,
        summary: formData.summary
    });
    event.target.reset();
    ctx.page.redirect(`/details/${gameId}`);
}



// export async function editPage(ctx) {
//     const id = ctx.params.id
//     const game = await gamesService.getById(id)
//     console.log(game);

//     ctx.render(editTemplate(game, onSubmit))

//     async function onSubmit(ev) {
//         ev.preventDefault()
//         const formData = Object.fromEntries(new FormData(event.target))
//         // const formData = new FormData(ev.target)
//         // const title = formData.get('title')
//         // console.log(title);
//         console.log(formData);

//         if (Object.values(formData).some(f => f.trim() == '')) {
//             return alert('All fields required!')
//         }

//         await gamesService.editGame(id, {
//             title: formData.title,
//             category: formData.category,
//             maxLevel: formData.maxLevel,
//             imageUrl: formData.imageUrl,
//             summary: formData.summary
//           })
//         ctx.page.redirect(`/details/${id}`)
//     }
// }