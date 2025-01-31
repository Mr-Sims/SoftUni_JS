import { html } from '../lib.js';

const registerTemplate = () => html`
<div class="narrow drop center">
    <header><h1>Register</h1></header>
    <form>
        <label for="email"><span>Email</span><input type="text" name="email"></label>
        <label for="password"><span>Password</span><input type="password" name="password"></label>
        <label for="repass"><span>Repeat </span><input type="password" name="repass"></label>
        
        <input class="action" type="submit" value="Sign up">
    </form>

</div>`;

export function showRegister(ctx) {
    ctx.render(registerTemplate());
}