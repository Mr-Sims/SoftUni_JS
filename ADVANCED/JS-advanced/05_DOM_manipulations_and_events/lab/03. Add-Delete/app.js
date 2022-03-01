function addItem() {
    // select input field and read value 
    const input = document.getElementById('newItemText');

    // create <li> element and set its content to input value 
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // create delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';

    button.addEventListener('click', removeElement)

    liElement.appendChild(button)

    // select <ul> and append the new <li> element
    document.getElementById('items').appendChild(liElement);

    // nice to have = cleat input field
    input.value = ''

    function removeElement(ev) {
        // const answer = confirm('Are you sure you want to delete it?')
        // if (answer == true) {
        //     const parent = ev.target.parentElement;
        //     parent.remove();
        // }
        const parent = ev.target.parentElement;
            parent.remove();
    };
}