import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    allMovies: '/data/movies',
    movieById: '/data/movies/'
}

export async function getAllMovies() {
    return api.get(endpoints.allMovies);
}


export async function getMovieById(id) {
    return api.get(endpoints.movieById + id)
}

export async function editMovie(id) {
    // TODO finish put editMovie
    // return api.put(endpoints.movieById, )
}















// export async function createIdea(idea) {
//     return api.post('/data/ideas', idea)
// }

// export async function deleteById(id) {
//     return api.del('/data/ideas/' + id)
// }
