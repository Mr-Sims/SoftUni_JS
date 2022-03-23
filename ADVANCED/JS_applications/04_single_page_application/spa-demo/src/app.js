import {showCatalogPage} from './catalog.js'
import { e } from './dom.js';
import { showHomePage, showAboutPage } from "./home.js";
import {showLoginPage} from './login.js'
import {showRegisterPage} from './register.js'


showHomePage()
document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', onLogout)

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage,
}
updateUserNav()

function onNavigate(ev) {
    if (ev.target.tagName == 'A') {
        const view = sections[ev.target.id]
        if (typeof view == 'function') {
            ev.preventDefault();
            view()
        }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    if (userData != null) {
        document.getElementById('userNav').style.display = 'inline-block'
        document.getElementById('guestNav').style.display = 'none'
    } else {
        document.getElementById('userNav').style.display = 'none'
        document.getElementById('guestNav').style.display = 'inline-block'
    }
}

async function onLogout(ev) {
    ev.stopImmediatePropagation()
    const { token } = JSON.parse(sessionStorage.getItem('userData'))

    const url = 'http://localhost:3030/users/logout'
    const options = {
        headers: {
            'X-Authorization': token
        }
    }
    const res = await fetch(url, options)
    sessionStorage.removeItem('userData')
    updateUserNav()
}