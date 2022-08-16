import * as requester from '../services/requester.js';
import { clearUserData, setUserData } from '../utility.js';


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(email, password) {
    const result = await requester.post(endpoints.login, {email, password});
    
    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken,
    };
    
    setUserData(userData);
    return userData;
}

export async function register(email, password) {
    const result = await requester.post(endpoints.register, {email, password});
    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken,
    };
    
    setUserData(userData);
    return userData;
}

export function logout() {
    requester.get(endpoints.logout);
    clearUserData()
}


/*
export function logout() {
    api.get(endpoints.logout);
    clearUserData();
}
*/