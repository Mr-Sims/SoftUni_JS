import page from '../node_modules/page/page.mjs';
import { addRender } from './middleware/render.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from '../src/api/users.js'
import { addsession } from './middleware/session.js';

// for testing in the browser console
// import * as api from '../src/api/games.js';
// window.api = api

page(addsession)
page(addRender);

page('/', homePage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout);



page.start();

async function onLogout() {
    logout()
    page.redirect('/')
}

