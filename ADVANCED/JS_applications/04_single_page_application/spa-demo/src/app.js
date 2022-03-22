// import {showSection} from './dom.js'
import {showCatalogPage} from './catalog.js'
import { showHomePage, showAboutPage } from "./home.js";
import {showLoginPage} from './login.js'

showHomePage()
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,

}


function onNavigate(ev) {
    if (ev.target.tagName == 'A') {
        const view = sections[ev.target.id]
        if (typeof view == 'function') {
            ev.preventDefault();
            view()
        }
    }
}

