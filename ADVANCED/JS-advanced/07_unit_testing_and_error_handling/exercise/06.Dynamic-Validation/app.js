// function validate() {
//     document.getElementById('email').addEventListener('change', onChange);

//     function onChange({target}) {
//         const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        
//         if (pattern.test(target.value)) {
//             target.classList.remove('error')
//         } else ( target.classList.add('error'))
//     }
// }

// alt

function validate() {
    const inputField = document.querySelector('#email');
    const mailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputField.addEventListener('change', onChange);

    function onChange() {
        if (mailPattern.test(inputField.value)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    };
};