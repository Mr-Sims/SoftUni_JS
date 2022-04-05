import * as api from './api/api.js'
import { getAllMovies } from './api/data.js';

import { updateUserNav } from "./app.js";
import { showSection, e } from "./dom.js";
import { showLoginPage } from "./login.js";

const section = document.getElementById('catalogSection')
const ul = section.querySelector('ul')
section.remove()

export function showCatalogPage(ctx) {
    // showSection(section)
    ctx.showSection(section)
    loadMovies();
}

async function loadMovies() {
    ul.replaceChildren(e('p', {}, 'Loading...'))

    // const movies = await api.get('/data/movies')
    const movies = await getAllMovies()


    // const userData = JSON.parse(sessionStorage.getItem('userData')) 
    // const url = 'http://localhost:3030/data/movies'
    // const options = {
    //     method: 'get',
    //     headers: {}
    // }
    // if ( userData != null) {
    //     options.headers['X-Authorization'] = userData.token 
    // }

    // const res = await fetch(url, options)

    // if ( res.status == 403) {
    //     sessionStorage.removeItem('userData')
    //     updateUserNav()
    //     showLoginPage()
    // }


    // const movies = await res.json()

    ul.replaceChildren(...movies.map(createMovieCard))

}

function createMovieCard(movie) {
    return e('li', {}, movie.title)
}