function medio(){

// Obtener los valores de las cajas de texto
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let numero3 = document.getElementById("numero3").value;


//Validación
  if (numero1.trim() === "" || numero2.trim() === "" || numero3.trim() === "") {
    alert("Por favor, complete todos los campos.");
  } else if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, ingrese solo números válidos.");
  } else {
    alert("Validación correcta.");
  }
// Encontrar el valor intermedio
let valorIntermedio;

if (numero1 > numero2) {
  if (numero1 < numero3) {
    valorIntermedio = numero1;
  } else if (numero2 > numero3) {
    valorIntermedio = numero2;
  } else {
    valorIntermedio = numero3;
  }
} else {
  if (numero1 > numero3) {
    valorIntermedio = numero1;
  } else if (numero2 < numero3) {
    valorIntermedio = numero2;
  } else {
    valorIntermedio = numero3;
  }
}



// Mostrar el valor intermedio en la caja de texto
document.form1.resultado.value = valorIntermedio;
}
