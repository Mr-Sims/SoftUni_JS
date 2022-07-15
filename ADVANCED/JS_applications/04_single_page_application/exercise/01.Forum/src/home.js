import { showDetails } from "./details.js";


const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.querySelector('[name="cancel"]').addEventListener('click', clearForm)

section.remove()

export async function showHome(ev) {
    // ev && ev.preventDefault(); // if event 
    ev?.preventDefault() // if event
    document.getElementById('main').replaceChildren('Loading ... ');

    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    const posts = await res.json();

    document.getElementById('main').replaceChildren(section);
}

function createPostPreview(post) {
    // 1:11:49
}


async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('topicName');
    const username = formData.get('username');
    const content = formData.get('postText');
    try {
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