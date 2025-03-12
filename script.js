// Declaracion de Variables usando DOM
const nameValue = document.getElementById('name-input');
const emailValue = document.getElementById('email-input');
const passwordValue = document.getElementById('password-input');
const botonEnviar = document.getElementById('send-form');

const regexNombre = /^[a-zA-Z\s]+$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*])[\S]{8,16}$/;

botonEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  if (nameValue === '' || passwordValue === '' || passwordValue === '') {
    return window.alert('Los campos no pueden estar vacios');
  }
  validar(nameValue.value, passwordValue.value);

});


