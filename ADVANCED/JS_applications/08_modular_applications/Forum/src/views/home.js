import { getTopicCount } from '../api/data.js';
import { html, until } from '../lib.js';

const homeTemplate = (promise) => html`
<h1>FORUM Home</h1>
<div class="splash drop main">
    <p>Welcome to Forum</p>
    <div>
        <a href="/topics">Browse ${until(promise, 'topics')} topics</a>
    </div>
</div>`

export function showHome(ctx) {
    ctx.render(homeTemplate(loadHome()))

}

async function loadHome() {
    const count = await getTopicCount();
    return count
}