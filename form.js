let inputs = document.querySelectorAll('form input');
let form = document.getElementById('form')
let errors = new Array();

let resetErrors = (input) => {
    input.style.className.remove('error');
}

let checkInputs = (inputs) => {    
    for (let input of inputs) {
        if (input.value === '') {
            errors.push(input);
            input.classList.add('error');
        }
    }
    
    if(errors.length === 0) {
        return true;
    }

    return alert('Debe completar todos los campos.');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checked = checkInputs(inputs);
    
    if (checked ) return form.submit(); 
})