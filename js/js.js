const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const numero = document.querySelector('#numero').value;
  const monto = document.querySelector('#monto').value;
  if (numero && monto) {
    const url = `https://api.recargas.com.ar/recargar?numero=${numero}&monto=${monto}`;
    window.location.href = url;
  }
});
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const numero = document.querySelector('#numero').value;
  const monto = document.querySelector('#monto').value;
  
  // Validación del número de teléfono
  const regexTelefono = /^(\+?54)?\s?(9)?\d{8}$/;
  if (!regexTelefono.test(numero)) {
    alert('Por favor, ingrese un número de teléfono válido');
    return;
  }
  
  // Validación del monto
  if (isNaN(parseInt(monto))) {
    alert('Por favor, ingrese un monto válido');
    return;
  }
  
  const url = `https://api.recargas.com.ar/recargar?numero=${numero}&monto=${monto}`;
  window.location.href = url;
});

