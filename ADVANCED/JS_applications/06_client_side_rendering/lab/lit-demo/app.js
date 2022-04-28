import { html, render } from './node_modules/lit-html/lit-html.js';

const articleTemplate = (onSubmit, data) => html`
<article>
    <h3>${data.title}</h3>
    <div class=${data.color}>
        <p>${data.content}</p>
    </div>
    <footer>Author: ${data.author}</footer>
    <div class="comments">
    <form @submit=${onSubmit}>
        <textarea name="comment"></textarea>
        <button>Submit Comment</button>
    </form>
    <ul> 
        ${data.comments.map(commentTemplate)}
    </ul>
    </div>
</article>`;

const commentTemplate = (comment) => html`<p>${comment.content}</p>`;

start();



async function start() {
    const data = await (await fetch('./data.json')).json();

    const main = document.querySelector('main');
    const renderBtn = document.getElementById('renderBtn')
    renderBtn.addEventListener('click', onRender)

    const changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', onChange)

    function onRender() {
        data[0].author += `1` 
        const result = data.map(a => articleTemplate(onSubmit.bind(null, a), a))
        render(result, main)
    }

    function onSubmit(article, event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const content = formData.get('comment')
        console.log(content);

        article.comments.push({content})
        const form = event.target
        form.reset()
        onRender()

    }

    function onChange() {
        data.shift()

        data.unshift({
            'title': 'First Article',
            'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus dolorum, consequuntur obcaecati quam mollitia nobis expedita ad iste numquam porro quae facere adipisci totam nemo vitae impedit laborum accusantium!',
            'author': 'John Smith',
            'color': 'green',
            'comments': []
        })
        onRender()
    }

}

