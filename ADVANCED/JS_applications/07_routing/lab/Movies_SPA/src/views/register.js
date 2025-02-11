import { html } from '../lib.js';
import { register } from '../api/data.js'

const registerTemplate = (onSubmit) => html`
<section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;


export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPassword').trim();

        if (email == '' || password == '' || repass == '') {
            alert('All fields are required!')
            throw new Error('All fields are required!')
        }
        if(password != repass) {
            alert('Passwords do not match!')
            throw new Error('Passwords do not match!')

        }

        await register(email, password)

        ctx.updateUserNav()
        ctx.page.redirect('/home')




    }

}
