window.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('login')
    form.addEventListener('submit', onLogin);

})

async function onLogin(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const email = formData.get('email')
    const password = formData.get('password')

    const url = 'http://localhost:3030/users/login'
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {
        const response = await fetch(url, options)
        if (response.ok != true) {
            const error = response.json()
            throw new Error(error.message)
        }

        const data = await response.json()

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('userData', JSON.stringify(userData))
        window.location = 'http://127.0.0.1:5500/03_remote_data_and_authentication/exercise/05.Fisher-Game/index.html'
    } catch (err) {
        alert(err.message)
    }

}