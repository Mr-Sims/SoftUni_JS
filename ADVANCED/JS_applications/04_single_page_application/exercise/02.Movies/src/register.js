// iniialization
// - find relevant secton

import { updateNav } from './app.js'
import { showView } from './dom.js'
import { showHome } from './home.js'

// - detach section from DOM
const section = document.getElementById('form-sign-up')
const form = section.querySelector('form')
form.addEventListener('submit', onRegister)
section.remove()

// display logic
export function showRegister() {
    showView(section)
}

async function onRegister(event) {
    event.preventDefault()
    const formData = new FormData(form)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const rePass = formData.get('repeatPassword').trim()

    try {
        if (password != rePass) {
            alert('Passwords do not match')
            return
        }

        const url = 'http://localhost:3030/users/register'
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }
        const res = await fetch(url, options)

        if ( res.ok != true) {
            const error = await res.json()
            throw new Error(error)
        }

        const data = await res.json()
        
        sessionStorage.setItem('userData', JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }))

        form.reset()
        updateNav()
        showHome()

    } catch(err) {
        alert(err.message)
    }
}