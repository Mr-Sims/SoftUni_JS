function solve() {
    let inputs = {
        fname: document.getElementById('fname'),
        lname: document.getElementById('lname'),
        email: document.getElementById('email'),
        birth: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')
    }

    let workersContainer = document.getElementById('tbody')

    let budgetSum = document.getElementById('sum')

    document.addEventListener('click', main)

    function main(ev) {
        if (ev.target.textContent == 'Hire Worker') {
            addWorker(ev)
        }
        if (ev.target.textContent == 'Fired') {
            fireWorker(ev)
        }
        if (ev.target.textContent == 'Edit') {
            editWorker(ev)
        }
    }

    function addWorker(ev) {
        if (inputs.fname.value != '' && inputs.lname.value != '' && inputs.email.value != '' && inputs.birth.value != '' && inputs.position.value != '' && inputs.salary != '' && inputs.salary.value > 0) {
            let workersTR = document.createElement('tr')
            for (let el in inputs) {
                let td = document.createElement('td')
                td.textContent = inputs[el].value
                workersTR.appendChild(td)
            }

            let firedBTN = document.createElement('button')
            firedBTN.classList.add('fired')
            firedBTN.textContent = 'Fired'
            let editBTN = document.createElement('button')
            editBTN.classList.add('edit')
            editBTN.textContent = 'Edit'

            let buttonsTD = document.createElement('td')
            buttonsTD.appendChild(firedBTN)
            buttonsTD.appendChild(editBTN)
            // buttonsTD.innerHTML = `<button class='fired'>Fired</button> <button class="edit">Edit</button>`

            workersTR.appendChild(buttonsTD)
            workersContainer.appendChild(workersTR)

            let sum = Number(inputs.salary.value) + Number(budgetSum.textContent)
            budgetSum.textContent = sum.toFixed(2)

            for (let el in inputs) {
                inputs[el].value = ''
            }
            ev.preventDefault()
        }
        else {
            ev.preventDefault()
        }
    }

    function editWorker(ev) {
        let worker = ev.target.parentNode.parentNode
        let salary = worker.children[5].textContent
        let sum = Number(budgetSum.textContent) - Number(salary)
        budgetSum.textContent = sum.toFixed(2)

        let editInputs = {
            fname: worker.children[0].textContent,
            lname: worker.children[1].textContent,
            email: worker.children[2].textContent,
            birth: worker.children[3].textContent,
            position: worker.children[4].textContent,
            salary: worker.children[5].textContent,
        }

        for (let el in editInputs) {
			inputs[el].value = editInputs[el]
		};
        workersContainer.removeChild(worker)
    }

    function fireWorker(ev) {
        let worker = ev.target.parentNode.parentNode
        let salary = worker.children[5].textContent
        let sum = Number(budgetSum.textContent) - Number(salary)
        budgetSum.textContent = sum.toFixed(2)
        workersContainer.removeChild(worker)
    }
}

solve()