// Obtener el select del monto a recargar
const selectMonto = document.getElementById("monto");

// Generar las opciones de 100 a 2000 con múltiplos de 100
for (let i = 1; i <= 20; i++) {
  // Calcular el valor de la opción
  const valor = i * 100;

  // Crear la opción
  const opcion = document.createElement("option");
  opcion.value = valor;
  opcion.text = `$${valor}`;

  // Agregar la opción al select
  selectMonto.appendChild(opcion);
}
