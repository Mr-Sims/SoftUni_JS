const homeTemplate = () => `
<h1>HOME<h1>
<p>Lorem ipsum dolor sit amet</p>`;

const articlesTemplate = () => `
<h1>Articles<h1>
<p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p>
<p>Lorem ipsum dolor sit amet</p>`;

const aboutTemplate = () => `
<h1>ABUT<h1>
<p>We are the alpha nad omega Lorem ipsum dolor sit amet</p>`;

const notFoundTemplate = () => `<h1>Page not found</h1>`;


const routes = {
    '/':homeTemplate,
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
};

const root = document.getElementById('root');

const navigate = (pathname, pushState = true) => {
    if(pushState) {
        history.pushState({}, '', pathname);
    }

    let template = routes[pathname];

    if(!template) {
        template = notFoundTemplate;
    }

    root.innerHTML = template();
}


document.body.addEventListener('click', (e) => {
    if(e.target.tagName == 'A') {
        e.preventDefault();

        let url = new URL(e.target.href);

        navigate(url.pathname);
    }
});

window.addEventListener('popstate', (e) => {
    navigate(location.pathname, false)
});

navigate(location.pathname, false)