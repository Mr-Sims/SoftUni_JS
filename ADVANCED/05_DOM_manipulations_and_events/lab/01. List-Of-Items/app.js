function addItem() {
    // select input field and read value 
    const input = document.getElementById('newItemText');
       
    // create <li> element and set its content to input value 
    const liElement = document.createElement('li');
    liElement.textContent = input.value; 

    // select <ul> and append the new <li> element
    document.getElementById('items').appendChild(liElement);

    // nice to have = cleat input field
    input.value = ''
    
} 