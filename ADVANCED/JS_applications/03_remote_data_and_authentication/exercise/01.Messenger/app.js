function attachEvents() {
    document.getElementById('refresh').addEventListener('click', loadMessages)
    document.getElementById('submit').addEventListener('click', onSubmit)

    loadMessages()
}

attachEvents();

const authorInput = document.querySelector('input[name="author"]')
const contentInput = document.querySelector('input[name="content"]')
let messagesContainer = document.getElementById('messages')

async function onSubmit() {
    const author = authorInput.value
    const content = contentInput.value

    const result = await createMessage({author, content})

    authorInput.value = ''
    contentInput.value = ''
    loadMessages()
}

async function loadMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const res = await fetch(url)
    const data = await res.json()

    const messages = Object.values(data)
    messagesContainer.value = messages.map(m => `${m.author}: ${m.content}`).join('\n')
}

async function createMessage(message) {

    const url = 'http://localhost:3030/jsonstore/messenger';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }

    const res = await fetch(url, options)
    const result = await res.json()

    return result;
}