import {render, page} from './library.js'
import { logout } from './services/users.js';
import { getUserData } from './utility.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

const root = document.querySelector('main')


// import * as users from './utility.js'
// window.users = users

page(ctxDecorator)
page('/', homePage);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/search', searchPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
refreshNavigation()
page.start()


function ctxDecorator(ctx, next) {
    ctx.render = ctxRenderer;
    ctx.refreshNavigation = refreshNavigation;
    next();
}

function ctxRenderer(templateExecution) {
    render(templateExecution, root);
}

function onLogout() {
    logout();
    refreshNavigation()
    page.redirect('/');
}

function refreshNavigation() {
    const user = getUserData();
    if(user) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}
