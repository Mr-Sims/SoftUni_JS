window.addEventListener('load', async () => {
    const form = document.querySelector('form');
    // console.log(form)
    form.addEventListener('submit', onRegister)
})

async function onRegister(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/users/register'

    const form = event.target;
    const formData = new FormData(form)

    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    const rePass = formData.get('rePass').trim()

    try {
        if (password != rePass) {
            alert('Passwords do not match')
            return
        }

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }
        const res = await fetch(url, options)

        if (res.ok != true) {
            const error = await res.json()
            throw new Error(error.message)
        }
        const data = await res.json()
        const token = data.accessToken
        
        localStorage.setItem('token', token)

        window.location = `http://127.0.0.1:5500/js-apps-workshop-master/lesson-03/base/index.html`;

    } catch (err) { alert(err.message) }

}