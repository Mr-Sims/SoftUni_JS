import { html } from '../lib.js';

const loginTemplate = () => html`
<section id="login">
    <article>
        <h2>Login</h2>
        <form id="loginForm">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input type="submit" value="Login">
        </form>
    </article>
</section>`;


export async function loginPage(ctx) {
    ctx.render(loginTemplate());
}

