// // solution with event delegation
function solve() {
    let formContainer = document.getElementById('container');
    let petName = formContainer.querySelector('[placeholder="Name"]');
    let petAge = formContainer.querySelector('[placeholder="Age"]');
    let petKind = formContainer.querySelector('[placeholder="Kind"]');
    let petCurrentOwner = formContainer.querySelector('[placeholder="Current Owner"]');

    let adoptionSection = document.querySelector('#adoption ul');

    let adoptedSection = document.querySelector('#adopted ul');
    document.addEventListener('click', main);

    function main(ev) {
        if (ev.target.textContent == 'Add') {
            addPet(ev);
        }
        if (ev.target.textContent == 'Contact with owner') {
            contactWithOwner(ev);
        }
        if (ev.target.textContent == 'Yes! I take it!') {
            adoptPet(ev);
        }
        if (ev.target.textContent == 'Checked') {
            checked(ev);
        }
    }

    function addPet(ev) {
        if (petName.value.length > 0 && petAge.value.length > 0 && (Number(petAge.value) != undefined && !isNaN(petAge.value)) && petKind.value.length > 0 && petCurrentOwner.value.length > 0) {
            let liElement = document.createElement('li');
            let paragraph = document.createElement('p');
            paragraph.innerHTML = `<strong>${petName.value}</strong> is a <strong>${petAge.value}</strong> year old <strong>${petKind.value}</strong>`;
            let span = document.createElement('span');
            span.textContent = `Owner: ${petCurrentOwner.value}`;
            let buttonContact = document.createElement('button');
            buttonContact.textContent = 'Contact with owner';

            liElement.appendChild(paragraph);
            liElement.appendChild(span);
            liElement.appendChild(buttonContact);
            ev.preventDefault();
            adoptionSection.appendChild(liElement);
            petName.value = '';
            petAge.value = '';
            petKind.value = '';
            petCurrentOwner.value = '';
        }
        else {
            ev.preventDefault();
        }
    }

    function contactWithOwner(ev) {
        let liElement = ev.target.parentNode;
        let btn = ev.target;
        liElement.removeChild(btn);
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.placeholder = 'Enter your names';
        let confirmBTN = document.createElement('button');
        confirmBTN.textContent = 'Yes! I take it!';
        div.appendChild(input);
        div.appendChild(confirmBTN);
        liElement.appendChild(div);
        ev.preventDefault();
    }

    function adoptPet(ev) {
        let parentDiv = ev.target.parentNode;
        let input = parentDiv.querySelector('[placeholder="Enter your names"]');
        if (input.value.length > 0) {
            let liElement = parentDiv.parentNode;
            adoptionSection.removeChild(liElement);
            liElement.removeChild(parentDiv);
            let span = liElement.querySelector('span');
            span.textContent = `New Owner: ${input.value}`;

            let checkedButton = document.createElement('button');
            checkedButton.textContent = 'Checked';

            liElement.appendChild(checkedButton);
            adoptedSection.appendChild(liElement);
            ev.preventDefault();
        } else {
            ev.preventDefault();
        }
    }

    function checked(ev) {
        let liElement = ev.target.parentNode;
        adoptedSection.removeChild(liElement);
        ev.preventDefault(liElement);
    }

}


// // alternate solution with multiple event-listeners, more funcs and less boilerplate
function solve() {
    // getting references to elements of interest
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    };

    // configure event listeners
    addBtn.addEventListener('click', addPet);

    // add a new pet
    // read input fields
    // validate values
    // create a new list
    // configure event listener for newly created element
    function addPet(ev) {
        ev.preventDefault();
        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        const contactBtn = e('button', {}, 'Contact with owner');
        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e(`span`, {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);
        petList.appendChild(pet);

        for (let item of Object.values(input)) {
            item.value = '';
        }

        // contact owner
        // create confirmation div
        // configure event listener for new butto
        // replace existing button with confirmation div
        function contact() {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {},
                confirmInput,
                confirmBtn
            );

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));
            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }

    // adopt a pet
    // read and validate input
    // create new button for checking
    // configure event listener
    // replace confirmation div with new button
    // change text content of Owner span
    // move pet to other list
    function adopt(input, pet) {
        const newOwner = input.value.trim();
        if (newOwner == '') {
            return;
        }

        const checkBtn = e('button', {}, 'Checked');
        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        adoptedList.appendChild(pet);
        checkBtn.addEventListener('click', deletePet);
        // checking/deleting/ a pet
        // remove element from DOM
        function deletePet(ev) {
            adoptedList.removeChild(pet);
        }
    }

    // create-elements function
    function e(type, attr, ...content) {
        const element = document.createElement(type);
        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    };
}