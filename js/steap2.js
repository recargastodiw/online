const tarjetaForm = document.querySelector('#tarjeta-form');
tarjetaForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const dni = document.querySelector('#dni').value;
  const numero = document.querySelector('#numero').value;
  const vencimiento = document.querySelector('#vencimiento').value;
  const cvv = document.querySelector('#cvv').value;
  
  // Validación del nombre del titular
  if (!nombre || nombre.trim().length === 0) {
    alert('Por favor, ingrese el nombre del titular de la tarjeta');
    return;
  }
  
  // Validación del DNI del titular
  const regexDni = /^\d{7,8}$/;
  if (!regexDni.test(dni)) {
    alert('Por favor, ingrese un número de DNI válido (7 u 8 dígitos)');
    return;
  }
  
  // Validación del número de tarjeta
  const regexTarjeta = /^\d{16,18}$/;
  if (!regexTarjeta.test(numero)) {
    alert('Por favor, ingrese un número de tarjeta válido (16 dígitos)');
    return;
  }
  
  // Validación de la fecha de vencimiento
  const regexVencimiento = /^(0[1-9]|1[0-2])\/(\d{2})$/;
  if (!regexVencimiento.test(vencimiento)) {
    alert('Por favor, ingrese una fecha de vencimiento válida (MM/AA)');
    return;
  }
  
  // Validación del CVV
  const regexCvv = /^\d{3}$/;
  if (!regexCvv.test(cvv)) {
    alert('Por favor, ingrese un CVV válido (3 dígitos)');
    return;
  }
 
});

 function mostrarAlerta() {
  // Generamos un número aleatorio del 1 al 2
 const random = Math.floor(Math.random() * 0) + 1;

  // Obtenemos la referencia al contenedor de la alerta
  const alerta = document.querySelector('.alert');

  // Cambiamos la clase de la alerta según el número generado aleatoriamente
  if (random === 1) {
    alerta.classList.add('alert-success');
    alerta.querySelector('h3').textContent = 'Pago aprobado';
    alerta.querySelector('p').textContent = '¡Gracias por tu compra!';
  } else {
    alerta.classList.add('alert-danger');
    alerta.querySelector('h3').textContent = 'Pago rechazado';
    alerta.querySelector('p').textContent = 'Por favor, verifica los datos de tu tarjeta';
  }

  // Mostramos la alerta
  alerta.style.display = 'block';

  // Después de 3 segundos, ocultamos la alerta
  setTimeout(() => {
    alerta.style.display = 'none';
    // Quitamos las clases de éxito o error
    alerta.classList.remove('alert-success', 'alert-danger');
  }, 3000);
}

// Obtenemos la referencia al botón de submit del formulario de tarjeta
const submitBtn = document.querySelector('#tarjeta-formulario input[type="submit"]');

// Añadimos un evento al botón de submit para que muestre la alerta
submitBtn.addEventListener('click', (event) => {
  // Evitamos que el formulario se envíe
  event.preventDefault();
// Obtenemos la referencia a los campos del formulario
  const numeroInput = document.querySelector('#tarjeta-formulario input[name="numero"]');
  const fechaInput = document.querySelector('#tarjeta-formulario input[name="fecha"]');
  const cvvInput = document.querySelector('#tarjeta-formulario input[name="cvv"]');

  // Verificamos que los campos no estén vacíos
  if (numeroInput.value.trim() === '' || fechaInput.value.trim() === '' || cvvInput.value.trim() === '') {
    // Mostramos una alerta de error
    const alerta = document.querySelector('.alert');
    alerta.classList.add('alert-danger');
    alerta.querySelector('h3').textContent = 'Error';
    alerta.querySelector('p').textContent = 'Por favor, completa todos los campos';
    alerta.style.display = 'block';

    // Después de 3 segundos, ocultamos la alerta
    setTimeout(() => {
      alerta.style.display = 'none';
      alerta.classList.remove('alert-danger');
    }, 3000);
  } else {
    // Mostramos una alerta de éxito
    mostrarAlerta();
  }
});







