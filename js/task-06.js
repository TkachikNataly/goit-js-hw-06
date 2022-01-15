const elInput = document.querySelector("#validation-input");

const noBlur = (event) => {
    if (event.currentTarget.value.length === Number(elInput.dataset.length)) {
        
        elInput.classList.add('valid');
        elInput.classList.remove('invalid');
    }
    else {
        
        elInput.classList.add('invalid');
        elInput.classList.remove('valid');
    }
};
elInput.addEventListener('blur', noBlur);

