import { html } from '../library.js';
import * as services from '../services/users.js';


const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = {
            email: formData.get('email').trim(),
            password: formData.get('password').trim(),
            repass: formData.get('re-password').trim(),
        }

        if (Object.values(data).some(f => f == '')) {
            return alert('All fields are required!')
        }

        if(data.password != data.repass) {
            return alert('Passwords do not match!')
        }

        await services.register(data.email, data.password)
        ev.target.reset();

        ctx.refreshNavigation()
        ctx.page.redirect('/dashboard');



    }
}