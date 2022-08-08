import {html, render} from '../node_modules/lit-html/lit-html.js'

const createArticleHandler = (ctx, e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let title = formData.get('title')
    let content = formData.get('content')
    let author = formData.get('author')

    fetch('http://localhost:3030/jsonstore/articles', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, content, author})
    })
    .then(res=>res.json())
    .then(article=> {
        ctx.page.redirect(`/articles/${article._id}`)
    })
}

const createTemplate = (ctx) => html`
    <!-- <form @submit=${createArticleHandler.bind({}, ctx)}> -->
    <form @submit=${(e) => createArticleHandler(ctx, e)}>
    <!-- this is done because we need the 'pageJS' functionality in order for us to able to redirect -->
    <!-- we can also simply import the page.js on top and then we won't need to bind or pass it -->

    <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title">
    </div>

    <div>
        <label for="content">Content</label>
        <textarea name="content" id="" cols="30" rows="5"></textarea>
    </div>

    <div>
        <label for="author">Author</label>
        <input type="text" id="author" name="author"/>
    </div>

    <div>
        <input type="submit" value="Create" />
    </div>
    </form>
`; 

const root = document.querySelector('#root')

export const createView = (ctx) => {
    render(createTemplate(ctx), root)
}