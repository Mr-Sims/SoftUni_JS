import { createTopic } from '../api/data.js';
import { inputField } from '../common/input.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (onSubmit, errorMsg, errors, values) => html`
<div class="drop main">
    <form @submit=${onSubmit}>
        <h1>Create new Topic</h1>
        ${errorMsg ? html`<p class="error-msg">${errorMsg}</p>` : null}
        ${inputField('Topic Title', 'text', 'title', values.title, errors.title)}
        ${inputField('Content', 'textarea', 'content', values.content, errors.content)}
        <div class="center">
            <input class="action" type="submit" value="Publish Topic"/>
        </div>
    </form>
</div>
`;

export function createPage(ctx) {

    update()

    function update(errorMsg = '', errors = {}, values = {}) {
        ctx.render(createTemplate(
            createSubmitHandler(onSubmit, 'title', 'content'),
            errorMsg,
            errors,
            values
        ))
    }



    async function onSubmit(data) {
        try {
            const missing = Object.entries(data).filter(([k, v]) => v == '');

            if (missing.length > 0) {
                const errors = missing.reduce((a, [k]) => Object.assign(a, { [k]: true }), {});
                throw {
                    error: new Error('All fields are required!'),
                    errors: errors
                }
            }
           
            const result = await createTopic(data);
            console.log(result);
            ctx.page.redirect('/topic/' + result._id);

        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors, data);
        }
    }
}



