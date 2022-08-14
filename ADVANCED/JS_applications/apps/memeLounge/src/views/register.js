import { html } from "../lib.js";
import * as userService from '../api/users.js';
import { notifications } from "../notifications.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const data = {
            username: formData.get('username').trim(),
            email: formData.get('email').trim(),
            password: formData.get('password').trim(),
            repass: formData.get('repeatPass').trim(),
            gender: formData.get('gender').trim(),
        }

        if (Object.values(data).some(f => f == '')){
            notifications('All fields required!');
            return
        }

        if(data.password != data.repass) {
            notifications('Passwords do not match!');
            return
        }
        
        await userService.register(data.username, data.email, data.password, data.gender)
        ev.target.reset()
        ctx.updateNav()
        ctx.page.redirect('/memes')

    }
}