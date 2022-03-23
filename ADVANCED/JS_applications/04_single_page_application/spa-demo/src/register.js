import { showSection } from "./dom.js";
import {showHomePage} from "./home.js";
import {updateUserNav} from './app.js'

const section = document.getElementById('registerSection')
section.remove()
const form = section.querySelector('form')
form.addEventListener('submit', onSubmit)

export function showRegisterPage() {
    showSection(section)
}

async function onSubmit(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const repass = formData.get('repass').trim()

    if ( password != repass) {
        alert('passwords do not match')
        return;
    }
    if (email == '' || password == '' || repass == '') {
        alert('All fields must be completed!')
        return
    }
    try {
        const url = 'http://localhost:3030/users/register'
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }

        const res = await fetch(url, options)
        if (res.ok != true) {
            const error = await res.json()
            throw new Error(error)
        }
        const data = await res.json()
        const userData = {
            userName: data.username,
            id: data._id,
            token: data.accessToken
        }
        sessionStorage.setItem('userData', JSON.stringify(userData))
    
        updateUserNav()
        showHomePage()



    } catch(err) {
        alert(err.message)
    }
}