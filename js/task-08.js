
const form = document.querySelector('.login-form');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('Все поля должны быть заполнены!');
    event.currentTarget.reset();
  }
  else {
    const userInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(userInfo);
    
  }
});

