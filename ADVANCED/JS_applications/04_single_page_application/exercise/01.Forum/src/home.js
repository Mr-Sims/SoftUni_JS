import { showDetails } from "./details.js";


const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

const container = section.querySelector('.topic-container')


section.querySelector('[name="cancel"]').addEventListener('click', clearForm)

section.remove()

export async function showHome(ev) {
    // ev && ev.preventDefault(); // if event 
    ev?.preventDefault() // if event
    document.getElementById('main').replaceChildren('Loading ... ');

    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    const posts = await res.json();
    container.replaceChildren(...Object.values(posts).map(createPostPreview));

    document.getElementById('main').replaceChildren(section);
}

function createPostPreview(post) {
    const element = document.createElement('div')
    element.className = 'topic-name-wrapper';
    element.innerHTML = `
    <div class="topic-name">
        <a href="/details" class="normal" id="${post._id}">
            <h2>${post.title}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.dateCreated}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>
        </div>
    </div>`

    return element 
}


async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();
    try {
        if(title == '' || username == '' || content == '') {
            throw new Error('All fields are required!')
        }

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                username, 
                content,
                dateCreated: new Date()
            })
        })
        if(res.ok != true) {
            const err = await res.json();
            throw new Error(err)
        }
        // const data = await res.json()
        form.reset()
        showHome()
    } 
    catch(err) {
        alert(err.message)
    }
}

function clearForm() {
    form.reset()
}