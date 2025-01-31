import { logout } from './api/data.js';
import { render, page } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showTopics } from './views/topics.js';

const root = document.querySelector('main');
document.querySelector('#logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', showHome);
page('/topics', showTopics);
page('/create', () => console.log('create'));
page('/login', showLogin);
page('/register', showRegister);

page.start();
updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const user = getUserData()
    if (user) {
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user').style.display = 'inline-block';
    }
    else {
        document.querySelector('.guest').style.display = 'inline-block';
        document.querySelector('.user').style.display = 'none';
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}