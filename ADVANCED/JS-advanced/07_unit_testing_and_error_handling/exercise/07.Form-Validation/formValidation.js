function validate(ev) {
    
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', validateForm);

    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', isCompanyHandler)
 
    function validateForm(ev) {
        ev.preventDefault();
        
        let usernameInput = document.getElementById('username');
        const userNameRegEx = /^[a-zA-Z0-9]{3,20}$/;
        let usernameIsValid = userNameRegEx.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid)

        let emailInput = document.getElementById('email');
        const emailRegEx = /^.*@.*\..*$/;
        let emailIsValid = emailRegEx.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        // passwordRegEx = /^[a-zA-Z0-9]{3,15}$/;
        passwordRegEx = /^\w{3,15}$/;

        let passwordIsValid = passwordRegEx.test(passwordInput.value);
        let passwordsAreValid = (passwordIsValid && passwordInput.value == confirmPasswordInput.value)
        setBorder(passwordInput, passwordsAreValid)
        setBorder(confirmPasswordInput, passwordsAreValid)    

        let companyNumberIsValid = false;
        
        let isCompanyCheckbox = document.getElementById('company');
        if(isCompanyCheckbox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            if(companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }
            setBorder(companyNumberInput, companyNumberIsValid);
        }

        let validDiv = document.getElementById('valid')
        let mainInputsAreValid = usernameIsValid && emailIsValid && passwordsAreValid
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none'

    }

    function isCompanyHandler(ev) {
        let companyInfoFieldset = document.getElementById('companyInfo');
        companyInfoFieldset.style.display = ev.target.checked ? 'block' : 'none'; 
    }

    function setBorder(element, isValid) {
        if(isValid) {
            element.style.setProperty('border', 'none')
        } else {
            element.style.setProperty('border', '2px solid red')
        }
    }
}

// function validate() {
//     const userNameRegEx = /(^[a-zA-Z0-9]{3,20}$)/;
//     const passwordRegEx =  /^([\w]{5,15}$)/;
//     const emailRegEx = /(^[\w]+@[\w]+\.[\w]+$)/;

//     let isValid = true;
//     let isChecked = true;

//     const submitButton = document.getElementById('submit');
//     submitButton.addEventListener('click', (e) => {
//         e.preventDefault();

//         const usernameField = document.getElementById('username');
//         if (!userNameRegEx.test(usernameField.value)) {
//             isValid = false;
//             usernameField.style.borderColor = 'red';
//         } else {
//             usernameField.style.border = 'none'
//         }
        
//         const passwordField = document.getElementById('password');
//         const confPasswordField = document.getElementById('confirm-password');

//         if(!passwordRegEx.test(passwordField.value)) {
//             isValid = false;
//             passwordField.style.borderColor = 'red'
//             confPasswordField.style.borderColor = 'red'
//         } else  {
//             passwordField.style.borderColor = 'none'
//             confPasswordField.style.border = 'none'
//         }

//         if (passwordField.value != confPasswordField.value) {
//             isValid = false;
//             passwordField.style.borderColor = 'red'
//             confPasswordField.style.borderColor = 'red'
//         } else {
//             passwordField.style.borderColor = 'none'
//             confPasswordField.style.border = 'none'
//         }

//         const emailField = document.getElementById('email');
//         if (!emailRegEx.test(emailField.value)) {
//             isValid = false;
//             emailField.style.borderColor = 'red'
//         } else {
//             emailField.style.border = 'none'
//         } 

//         const validDiv = document.getElementById('valid')
//         if (isValid) {
//             validDiv.style.display = 'block'
//         } else {
//             validDiv.style.display = 'none';
//         }
//     if (isChecked) {
//         const companyNumber = document.getElementById('companyNumber');
//         if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
//             companyNumber.style.borderColor = 'red';
//         } else {
//             companyNumber.style.border = 'none';
//         }
//     }

//     })

//     document.getElementById('company').addEventListener('change', (e) => {
//         const companyField = document.getElementById('companyInfo')
//         if (e.target.checked) {
//             isChecked = true;
//             companyField.style.display = 'block';
//         } else {
//             isChecked = false;
//             companyField.style.display = 'none'
//         }
//     })

// }


