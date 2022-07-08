// const table = document.getElementById('results').children[1]
const table = document.querySelector('#results tbody')
const url = 'http://localhost:3030/jsonstore/collections/students'

function main() {
    fillTable();
    newEntry()
}

async function fillTable() {

    const res = await fetch(url);
    const data = await res.json()
    table.replaceChildren()
    Object.values(data).forEach(r => {
        let tableRow = document.createElement('tr')
        // tableRow.innerHTML = `
        // <th>${r.firstName}</th>
        // <th>${r.lastName}</th>
        // <th>${r.facultyNumber}</th>
        // <th>${r.grade}</th>
        // `

        let firstName = document.createElement('th')
        firstName.textContent = r.firstName

        let lastName = document.createElement('th')
        lastName.textContent = r.lastName

        let facultyNumber = document.createElement('th')
        facultyNumber.textContent = r.facultyNumber

        let grade = document.createElement('th')
        grade.textContent = r.grade

        tableRow.appendChild(firstName)
        tableRow.appendChild(lastName)
        tableRow.appendChild(facultyNumber)
        tableRow.appendChild(grade)

        table.appendChild(tableRow)
    })
}

async function newEntry() {
    let form = document.getElementById('form')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let formData = new FormData(form)

        let firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const facultyNumber = formData.get('facultyNumber')
        const grade = Number(formData.get('grade'))

        if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
            alert('All fields required!')
            throw new Error('All fields required!')
        }

        if (isNaN(firstName) == false || isNaN(lastName) == false) {
            alert('Names must not be numbers!')
            throw new Error('Names must not be numbers!')
        }
        if (isNaN(facultyNumber) == true || isNaN(grade) == true) {
            alert('Faculty number and grade must be numbers!')
            throw new Error('Faculty number and grade must be numbers!')
        }

        try {
            const body = {
                firstName,
                lastName,
                facultyNumber,
                grade
            }
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'applicaton/json'
                },
                body: JSON.stringify(body)
            })
            const data = await res.json()
            form.reset()
            fillTable()
        }
        catch (err) {
            alert(err)
        }
    })
}

main();