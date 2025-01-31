import { login } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const loginTemplate = (onSubmit) => html`
<div class="narrow drop center">
    <header><h1>Login</h1></header>
    <form @submit=${onSubmit}>
        <label for="email"><span>Email</span><input type="text" name="email"></label>
        <label for="password"><span>Password</span><input type="password" name="password"></label>
        <input class="action" type="submit" value="Sign in">
    </form>

</div>`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit, 'email', 'password')));

    async function onSubmit(data) {
        console.log(data)
        
        await login(data.email, data.password);
        ctx.updateUserNav();
        ctx.page.redirect('/topics');

    }
}


