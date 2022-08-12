import * as api from './api.js'

const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    allGames: '/data/games?sortBy=_createdOn%20desc',
    createGame: '/data/games',
}

export async function getRecent() {
    return api.get(endpoints.recent)
}

export async function getAll() {
    return api.get(endpoints.allGames)
}

export async function create(data) {
    return api.post(endpoints.createGame, data)

}