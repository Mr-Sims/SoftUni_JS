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

