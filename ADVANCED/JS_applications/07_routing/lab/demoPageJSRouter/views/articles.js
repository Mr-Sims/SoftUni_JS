import {html, render} from '../node_modules/lit-html/lit-html.js'

const articlesTemplate = (articles) => html`
<h1>Articles<h1>
${articles.map(a => html`
        <article>
            <h4>${a.title}</h3>
            <footer>
                <p>Author: ${a.author}</p>
                <a href="/articles/${a.id}">read more...</a>
            </footer>

        </article>
    `)}
`;

const root = document.getElementById('root')

const getArticles = () => {
    return fetch('http://localhost:3030/jsonstore/articles')
        .then(res => res.json())
        .then(data => Object.values(data))
}


export const articlesView = (ctx) => {
    getArticles()
        .then(articles=>{
            render(articlesTemplate(articles), root)
        });
}