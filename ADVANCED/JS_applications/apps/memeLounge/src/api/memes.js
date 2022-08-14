import * as api from './api.js'

const endpoints = {
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    createMeme: '/data/memes',
    getById: '/data/memes/',
    deleteById: '/data/memes/',
    editById: '/data/memes/',
    getMemesByUserId: (id) => `/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
}


export async function getAllMemes() {
    return await api.get(endpoints.getAll);
}

export async function createMeme(data) {
    return await api.post(endpoints.createMeme, data);
}

export async function getMemeById(id) {
    return await api.get(endpoints.getById+id);
}

export async function deleteById(id) {
    return await api.del(endpoints.deleteById+id);
}

export async function editMemeById(id, data) {
    return await api.put(endpoints.editById+id, data);
}

export async function getMemesByUserId(id) {
    return await api.get(endpoints.getMemesByUserId(id));
}
