
window.addEventListener('load', async () => {
    const form = document.querySelector('form');
    // console.log(form)
    form.addEventListener('submit', onLogin)
})

async function onLogin(event) {
    const url = 'http://localhost:3030/users/login'
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    // console.log(email)
    // console.log(password)

    try {
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
            throw new Error(error.message)
        }
        
        const data = await res.json()
        const token = data.accessToken
        localStorage.setItem('token', token)

        window.location = `http://127.0.0.1:5500/js-apps-workshop-master/lesson-03/base/index.html`;
    } catch(err) {alert(err.message)}
    
}

