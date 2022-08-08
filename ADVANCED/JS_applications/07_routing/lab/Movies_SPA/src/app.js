import { render, page } from './lib.js';
import { getUserData, loadMovie } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';


const root = document.querySelector('main');

page(decorateContext)  // <-- this is done so that we don't have to add the decorator func as ref each time we add a new pathname and section

page('/home', catalogPage);
page('/create', createPage);
page('/details/:id', loadMovie, detailsPage)
page('/edit/:id', loadMovie, editPage);
page('/login', loginPage)
page('/register', registerPage)
page.redirect('/', '/home')

updateUserNav()

page.start();

function decorateContext (ctx, next) {
    ctx.render = (template) => render(template, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav(){
    const userData = getUserData()
    if (userData) {
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
        document.querySelector('#welcomeMsg').textContent = `Welcome ${userData.email}`;
    }
    else {
        [...document.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
    }
}

document.querySelector('#logoutBtn').addEventListener('click', async () => {
    await logout()
    updateUserNav()
    page.redirect('/home')
})
