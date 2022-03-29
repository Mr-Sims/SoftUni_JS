import { showHome } from './home.js';
import { showLogin } from './login.js'
import { showRegister } from './register.js'
// import { showCreate } from './create.js';
import { showDetails } from './details.js'


// create placeholder modules for each view
// configure and test navigation 
// implement modules
// - create async funcs from requests
// - implement DOM logic

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    
}
const nav = document.querySelector('nav')
document.getElementById('logoutBtn').addEventListener('click', onLogout)

nav.addEventListener('click', (event) => {
    const view = views[event.target.id]
    if (typeof view == 'function') {
        event.preventDefault()
        view()
    }
})
updateNav()

showHome()

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    if ( userData != null) {
        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');

    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');

    }
}

async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation()
    const {token} = JSON.parse(sessionStorage.getItem('userData'))
    const url = 'http://localhost:3030/users/logout'
    const options = {
        headers: {
            'X-Authorization': token
        }
    }
    await fetch(url, options)
    sessionStorage.removeItem('userData')
    updateNav()
    showLogin()
}


// Order of views
// x catalog (home view)
// x login
// x logout
// - register
// - create
// - detals
// - likes
// - edit
// - delete

// 2:22:24


// window.showHome = showHome;
// window.showDetails = showDetails
// window.showCreate = showCreate