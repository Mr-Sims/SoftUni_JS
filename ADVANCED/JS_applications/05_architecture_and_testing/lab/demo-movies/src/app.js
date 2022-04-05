import { logout } from './api/data.js';
import {showCatalogPage} from './catalog.js'
import { e, showSection } from './dom.js';
import { showHomePage, showAboutPage } from "./home.js";
import {showLoginPage} from './login.js'
import {showRegisterPage} from './register.js'



showHomePage()
document.querySelector('nav').addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', onLogout)

const views = {
    'home': showHomePage,
    'catalog': showCatalogPage,
    'about': showAboutPage,
    'login': showLoginPage,
    'register': showRegisterPage,
}

const links = {
    'homeBtn': 'home',
    'catalogBtn': 'catalog',
    'aboutBtn': 'about',
    'loginBtn': 'login',
    'registerBtn': 'register',
}
updateUserNav()

const ctx = {
    updateUserNav,
    goTo,
    showSection,
}

function onNavigate(ev) {
    if (ev.target.tagName == 'A') {
        const name = links[ev.target.id]
        if (name) {
            ev.preventDefault()
            goTo(name)
        }
    }
}

function goTo(name, ...params) {
    const view = views[name];
    if(typeof view == 'function') {
        view(ctx, ...params)
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
   
   await logout()
   
    // const { token } = JSON.parse(sessionStorage.getItem('userData'))
    // const url = 'http://localhost:3030/users/logout'
    // const options = {
    //     headers: {
    //         'X-Authorization': token
    //     }
    // }
    // const res = await fetch(url, options)
    // sessionStorage.removeItem('userData')
    updateUserNav()
    showHomePage()
}