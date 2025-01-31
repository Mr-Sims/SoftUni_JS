import { html } from '../lib.js';

const homeTemplate = () => html`
<h1>FORUM Home</h1>
<div class="splash drop">
    <p>Welcome to Forum</p>
    <div>
        <a href="/topics">Browse User Topics</a>
    </div>
</div>`

export function showHome(ctx) {
    ctx.render(homeTemplate())
}