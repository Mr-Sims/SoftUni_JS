import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(email, password) {
    const result = await api.post(endpoints.login, {email, password});
    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken,
    };

    setUserData(userData);
    return result;
}

export async function register(username, email, password, gender) {
    const result = await api.post(endpoints.register, {username, email, password, gender});
    
    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken,
    }; 
    
    setUserData(userData);
    return result;
}

export function logout() {
    api.get(endpoints.logout);
    clearUserData();
}

