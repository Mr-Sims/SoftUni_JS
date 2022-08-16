import * as requester from '../services/requester.js';


const endpoints = {
    getAll: '/data/shoes?sortBy=_createdOn%20desc',
    create: '/data/shoes',
    getById: '/data/shoes/',
    editById: '/data/shoes/',
    deleteById: '/data/shoes/',
    searchByQuery: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
}

export async function getAllItems() {
    return await requester.get(endpoints.getAll);
}

export async function createItem(data) {
    return await requester.post(endpoints.create, data);
}

export async function getById(id) {
    return await requester.get(endpoints.getById + id)
}

export async function editById(id, data) {
    return await requester.put(endpoints.editById+id, data)
}

export async function deleteById(id) {
    return await requester.del(endpoints.deleteById+id);
}

export async function searchByQuery(query) {
    return await requester.get(endpoints.searchByQuery(query))
}
