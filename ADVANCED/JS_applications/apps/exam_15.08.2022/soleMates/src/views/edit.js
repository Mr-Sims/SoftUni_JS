import { html } from '../library.js';
import * as contentService from '../services/content.js'


const editTemplate = (item, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${item.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function editPage(ctx) {
    const item = await contentService.getById(ctx.params.id)
    ctx.render(editTemplate(item, onSubmit));
    
    
    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = {
            brand: formData.get('brand'),
            model: formData.get('model'), 
            imageUrl: formData.get('imageUrl'), 
            release: formData.get('release'), 
            designer: formData.get('designer'), 
            value: formData.get('value')
        } 
        
        if(Object.values(data).some(f => f.trim() =='')) {
            return alert('All fields are required!');
        }

        await contentService.editById(ctx.params.id, data)
        ev.target.reset()
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}