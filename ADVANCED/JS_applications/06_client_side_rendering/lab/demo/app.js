import { renderTemplate } from './engine.js'

async function start() {
    const data = await(await fetch('./data.json')).json();
    const templateString = await(await fetch('./article.html')).text();

    const main = document.querySelector('main')

    const template = renderTemplate(templateString)
    // console.log(template);

    main.innerHTML = data.map(template).join('')
}

start();