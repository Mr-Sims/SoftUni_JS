import { page, html, render } from './lib.js'

import { homePage } from './views/home.js'
import { catalogPage } from './views/catalog.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { getUserData } from './util.js'
import { logout } from './api/users.js'
import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { profilePage } from './views/profile.js'


// import * as api from '../src/api/memes.js'
// window.api = api

const main = document.querySelector('main')


page(decorateContext)
page('/', homePage);
page('/memes', catalogPage);
page('/details/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/profile', profilePage);
page('/edit/:id', editPage);
page('/logout', onLogout);
updateNav()
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    next()
}
function renderMain(templateResult) {
    render(templateResult, main)
}

function updateNav() {
    const userData = getUserData();
    if(userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

async function onLogout() {
    logout()
    updateNav()
    page.redirect('/')
}
