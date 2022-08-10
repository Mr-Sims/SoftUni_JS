import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    getAllFurniture: '/data/catalog',
    getById: '/data/catalog/',
    getMy: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    edit: '/data/catalog/',
    delete: '/data/catalog/',
}

export async function getAll() {
    return api.get(endpoints.getAllFurniture);
}

export async function getById(id) {
    return api.get(endpoints.getById+id);
}

export async function getMyItems(userId) {
    return api.get(endpoints.getMy(userId));
}

export function createItem(data) {
    return api.post(endpoints.create, data)
}

export function editItem(id, data) {
    return api.put(endpoints.edit + id, data)
}

export function deleteItem(id) {
    return api.del(endpoints.delete + id)
}