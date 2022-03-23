import { updateUserNav } from "./app.js";
import { showSection, e } from "./dom.js";
import { showLoginPage } from "./login.js";

const catalogSection = document.getElementById('catalogSection')
catalogSection.remove()
const ul = catalogSection.querySelector('ul')
export function showCatalogPage() {
    showSection(catalogSection)
    loadMovies();
}

async function loadMovies() {
    ul.replaceChildren(e('p', {}, 'Loading...'))
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const url = 'http://localhost:3030/data/movies'
    const options = {
        method: 'get',
        headers: {}
    }
    if ( userData != null) {
        options.headers['X-Authorization'] = userData.token 
    }

    const res = await fetch(url, options)

    if ( res.status == 403) {
        sessionStorage.removeItem('userData')
        updateUserNav()
        showLoginPage()
    }


    const movies = await res.json()

    ul.replaceChildren(...movies.map(createMovieCard))

}

function createMovieCard(movie) {
    return e('li', {}, movie.title)
}