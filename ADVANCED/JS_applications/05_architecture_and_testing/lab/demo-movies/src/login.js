import * as api from './api/data.js'

import { showSection } from "./dom.js";
import {showHomePage} from "./home.js";
import {updateUserNav} from './app.js';

const section = document.getElementById('loginSection')
section.remove()
const form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

export function showLoginPage(ctx) {
    ctx.showSection(section)
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target)
    const email = formData.get('email')
    const password = formData.get('password')

    await api.login(email, password)

    // try {
    // const url = 'http://localhost:3030/users/login'
    // const options = {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({email, password})
    // }
    // const res = await fetch(url, options)

    // if(res.ok != true) {
    //     const error = await res.message
    //     throw new Error(error)
    // }
    // const data = await res.json()
    // const userData = {
    //     userName: data.username,
    //     id: data._id,
    //     token: data.accessToken
    // }
    // sessionStorage.setItem('userData', JSON.stringify(userData))
    form.reset()
    updateUserNav()
    showHomePage()
}
