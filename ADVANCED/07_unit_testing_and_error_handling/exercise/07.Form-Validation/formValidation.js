function validate() {
    const userNameRegEx = /(^[a-zA-Z0-9]{3,20}$)/;
    const passwordRegEx =  /^([\w]{5,15}$)/;
    const emailRegEx = /(^[\w]+@[\w]+\.[\w]+$)/;

    let isValid = true;
    let isChecked = true;

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const usernameField = document.getElementById('username');
        if (!userNameRegEx.test(usernameField.value)) {
            isValid = false;
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.border = 'none'
        }
        
        const passwordField = document.getElementById('password');
        const confPasswordField = document.getElementById('confirm-password');

        if(!passwordRegEx.test(passwordField.value)) {
            isValid = false;
            passwordField.style.borderColor = 'red'
            confPasswordField.style.borderColor = 'red'
        } else  {
            passwordField.style.borderColor = 'none'
            confPasswordField.style.border = 'none'
        }

        if (passwordField.value != confPasswordField.value) {
            isValid = false;
            passwordField.style.borderColor = 'red'
            confPasswordField.style.borderColor = 'red'
        } else {
            passwordField.style.borderColor = 'none'
            confPasswordField.style.border = 'none'
        }

        const emailField = document.getElementById('email');
        if (!emailRegEx.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = 'red'
        } else {
            emailField.style.border = 'none'
        } 

        const validDiv = document.getElementById('valid')
        if (isValid) {
            validDiv.style.display = 'block'
        } else {
            validDiv.style.display = 'none';
        }
    if (isChecked) {
        const companyNumber = document.getElementById('companyNumber');
        if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
            companyNumber.style.borderColor = 'red';
        } else {
            companyNumber.style.border = 'none';
        }
    }

    })

    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo')
        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = 'block';
        } else {
            isChecked = false;
            companyField.style.display = 'none'
        }
    })

}
