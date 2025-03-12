// Declaracion de Variables usando DOM
const nameValue = document.getElementById('name-input');
const emailValue = document.getElementById('email-input');
const passwordValue = document.getElementById('password-input');
const botonEnviar = document.getElementById('send-form');

botonEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  if (nameValue === '' || passwordValue === '' || emailValue === '') {
    return window.alert('Los campos no pueden estar vacios');
  }
  const name = nameValue.value;
  const password = passwordValue.value;
  const email = emailValue.value;
  sendData('/', { name, password, email });
});

const sendData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    return window.alert(response.message);
  }
  return window.alert('Registro Exitoso')
};


