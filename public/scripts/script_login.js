// Declaracion de Variables usando DOM
const emailValue = document.getElementById('email-input');
const passwordValue = document.getElementById('password-input');
const botonEnviar = document.getElementById('send-form');

// Envio de datos
botonEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  if (passwordValue.value === '' || emailValue.value === '') {
    return window.alert('Los campos no pueden estar vacios');
  }
  // Capturar informacion del usuari
  const password = passwordValue.value;
  const email = emailValue.value;
  // Envio
  registerUser('/login', { password, email });
});

// Metodo asíncrono para el enviar los datos
const registerUser = async (url, data = {}) => {
  // RECIBIR DATOS
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    validateResponse(response);
  } catch (error) {
    console.error('ERROR:', error.message);
    window.alert('Ocurrió un error en la comunicación con el servidor.');
  }
};

const validateResponse = async (response) => {
  const responseData = await response.json();
  // CREAR USUARIO EXITOSAMENTE
  if (response.ok) {
    window.alert(responseData.message);
    return setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }
  const errores = [];
  if (responseData.status === 'error') {
    if (Array.isArray(responseData.error)) {
      responseData.error.forEach(err => {
        errores.push(err.message);
      });
      showErrors(errores);
    } else {
      window.alert(responseData.message); // Mostrar error general
    }
  }
};

const showErrors = (arreglo) => {
  if (arreglo.length === 1) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === 'error1') {
        document.getElementById('error-name').innerHTML = 'El nombre debe poseer mas de seis caracteres y debe contener únicamente letras';
      } else if (arreglo[i] === 'error2') {
        document.getElementById('error-email').innerHTML = 'El correo debe ser un correo valido';
      } else {
        document.getElementById('error-password').innerHTML = 'La contraseña debe tener una mayúscula, una minúscula y uno de los siguientes caracteres: .!@#$%^&*';
      }
    }
  }
};
