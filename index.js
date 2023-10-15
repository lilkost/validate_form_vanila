let form = document.querySelector('.form'),
    inputForm = document.querySelectorAll('.input-val '),
    inputEmail = document.querySelector('.input-val-email'),
    inputPhone = document.querySelector('.input-val-phone')
    inputCheck = document.querySelector('.input-val-chek');


    function validateEmail(email) {
        let emailValRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValRe.test(String(email).toLowerCase());
    }
 
form.onsubmit = function () {

    let emailVal = inputEmail.value,
        phoneVal = inputPhone.value,
        emptyInputs = Array.from(inputForm).filter(input=> input.value === '');
    
    
    inputForm.forEach((input)=> {
        if(input.value === '') {
            input.previousElementSibling.classList.add('text-red-700');
            input.classList.add('border-red-900');
            input.classList.add('text-red-700');

            input.previousElementSibling.classList.remove('text-green-700');
            input.classList.remove('border-green-900');
            input.classList.remove('text-green-700');
            return false;
        }
        else {
            input.previousElementSibling.classList.remove('text-red-700');
            input.classList.remove('border-red-900');
            input.classList.remove('text-red-700');


            input.previousElementSibling.classList.add('text-green-700');
            input.classList.add('border-green-900');
            input.classList.add('text-green-700');
        }
    });


    if(emptyInputs.length !== 0) {
        return false;
    }

    if(!inputCheck.checked) {
        inputCheck.nextElementSibling.classList.add('text-red-700')
        return false;
    }
    else {
        inputCheck.nextElementSibling.classList.remove('text-red-700')
        inputCheck.nextElementSibling.classList.add('text-green-700')
    }

    if(!validateEmail(emailVal)) {
        inputEmail.previousElementSibling.classList.add('text-red-700');
        inputEmail.classList.add('border-red-900');
        inputEmail.classList.add('text-red-700');

        input.previousElementSibling.classList.remove('text-green-700');
        input.classList.remove('border-green-900');
        input.classList.remove('text-green-700');
        return false;
    }
    else {
        inputEmail.previousElementSibling.classList.remove('text-red-700');
        inputEmail.classList.remove('border-red-900');
        inputEmail.classList.remove('text-red-700');

        input.previousElementSibling.classList.add('text-green-700');
        input.classList.add('border-green-900');
        input.classList.add('text-green-700');
    }
}

$("#phoneMask").mask("+7(999) 999-9999");