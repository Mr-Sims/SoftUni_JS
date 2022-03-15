function attachEvents() {
    document.getElementById('refresh').addEventListener('click',  loadMessages)
    document.getElementById('submit').addEventListener('click', createMessage)

    loadMessages()

}

attachEvents();

async function loadMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const res = await fetch(url)
    const data = await res.json()

    const messages = Object.values(data)

    let messagesContainer = document.getElementById('messages')

    messagesContainer.value = messages.map(m => `${m.author}: ${m.content}`).join('\n')
}

async function createMessage() {
    const author = document.querySelector('input[name="author"]')
    const content = document.querySelector('input[name="content"]')
    
    const message = {author: author.value.trim(), content: content.value.trim()}
    // console.log(input.value);
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

    author.value = ''
    content.value = ''
}