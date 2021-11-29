function solve() {
    const [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    const movieSection = document.querySelector('#movies ul')
    const archiveSection = document.querySelector('#archive ul')
    const addMovieBTN = document.querySelector('#container button');
    addMovieBTN.addEventListener('click', addMovie);
    const clearBTN = archiveSection.parentElement.querySelector('button')
    clearBTN.addEventListener('click', clearAll)

    function addMovie(e) {
        e.preventDefault()
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement('li');
            movie.innerHTML =
                `<span>${name.value}</span>
                        <strong>Hall: ${hall.value}</strong>
                        <div>
                            <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                            <input placeholder="Tickets Sold">
                            <button>Archive</button>
                        </div>`
            movieSection.appendChild(movie);
            name.value = ''
            hall.value = ''
            ticketPrice.value = ''
            const button = movie.querySelector('div button')
            button.addEventListener('click', addToArchive)
        }

    }

    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector('input');
        const ticketPrice = e.target.parentElement.querySelector('strong')
        const movieName = e.target.parentElement.parentElement.querySelector('span');

        if (inputValue.value !== '' && !isNaN(Number(inputValue.value))) {
            const income = Number(inputValue.value) * Number(ticketPrice.innerHTML)

            const liEl = document.createElement('li')
            liEl.innerHTML =
                `<span>${movieName.innerHTML}</span>
                <strong>Total amount: ${income.toFixed(2)}</strong>
                <button>Delete</button>`
            archiveSection.appendChild(liEl);

            const deleteButton = liEl.querySelector('button')
            deleteButton.addEventListener('click', deleteMovie)

            const elToDelete = e.target.parentElement.parentElement
            elToDelete.parentElement.removeChild(elToDelete)
        }
    }

    function deleteMovie(e) {
        const elToDelete = e.target.parentElement
        elToDelete.parentElement.removeChild(elToDelete)
    }

    function clearAll(e) {
        const arr = e.target.parentElement.querySelectorAll('ul li')
        for (let el of arr) {
            el.parentElement.removeChild(el)
        }
    }
}