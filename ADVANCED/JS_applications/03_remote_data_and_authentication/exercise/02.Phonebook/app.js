function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate)
    document.getElementById('phonebook').addEventListener('click', onDelete)
}

attachEvents();

const list = document.getElementById('phonebook')
const personInput = document.getElementById('person')
const phoneInput = document.getElementById('phone')

async function onDelete(ev) {
    const id = ev.target.dataset.id
    if (id != undefined) {
        deleteContact(id)
        loadContacts()
    }
}

async function onCreate() {
    const person = personInput.value
    const phone = phoneInput.value
    if (person != '' && phone != '') {
        await createContact({ person, phone })
        personInput.value = ''
        phoneInput.value = ''
        loadContacts()
    } else {
        alert('Please fill all fields!')
    }
}

async function loadContacts() {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook')
    const data = await res.json()
    list.replaceChildren(...Object.values(data).map(el => createItem(el)))
}

function createItem(contact) {
    const liElement = document.createElement('li')
    liElement.innerHTML = `${contact.person}: ${contact.phone} <button data-id="${contact._id}">[Delete]</button>`
    return liElement
}

async function createContact(contact) {
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    }
    const res = await fetch(url, options)
    const result = await res.json()
    console.log((result));
    return result
}

async function deleteContact(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id
    const options = {
        method: 'delete',
    }
    const res = await fetch(url, options)
    const result = await res.json()

    return result
}