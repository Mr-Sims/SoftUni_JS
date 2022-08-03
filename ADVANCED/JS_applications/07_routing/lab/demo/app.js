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



const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
}

const root = document.getElementById('root')

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash] 
    
    root.innerHTML = template()
    
 })