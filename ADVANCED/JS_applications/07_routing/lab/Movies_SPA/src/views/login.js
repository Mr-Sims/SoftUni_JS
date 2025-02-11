import { html } from '../lib.js';
import { login } from '../api/data.js'


const loginTemplate = (onSubmit) => html`
<section id="form-login">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>`


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        console.log(email);
        console.log(password);

        
        await login(email, password);
        ctx.updateUserNav();
        ctx.page.redirect('/home');
    }
}


