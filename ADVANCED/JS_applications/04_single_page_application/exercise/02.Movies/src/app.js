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

document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id]
    if (typeof view == 'function') {
        event.preventDefault()
        view()
    }
})





// Order of views
// - catalog (home view)
// - login/register
// - create
// - detals
// - likes
// - edit
// - delete

showHome()

// window.showHome = showHome;
// window.showDetails = showDetails
// window.showCreate = showCreate