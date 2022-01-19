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

// const noBlur = (event) => {
//     if (event.currentTarget.value.length === elInput.dataset.length) {
        
//         elInput.classList.add('valid');
//         elInput.classList.remove('invalid');
//     }
//     else {
        
//         elInput.classList.add('invalid');
//         elInput.classList.remove('valid');
//     }
// };
// elInput.addEventListener('blur', noBlur);

// const inputRef = document.querySelector('#validation-input');

// const noBlur = (event) => {
//   if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
//     inputRef.classList.add('valid');
//     inputRef.classList.remove('invalid');
//   }
//   else {
//     inputRef.classList.add('invalid');
//     inputRef.classList.remove('valid');
//   }
// };
// inputRef.addEventListener('blur', noBlur);