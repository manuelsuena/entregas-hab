/*######## Primer ejercicio calculadora con IF####### */

"use strict";
const numberSeleccion1 = +prompt("selecciona el primer número");
const numberSeleccion2 = +prompt("selecciona el segundo número");
const opcionSeleccion = 2;
let resultado = 0;

if (opcionSeleccion === 0) {
  resultado = numberSeleccion1 + numberSeleccion2;
} else if (opcionSeleccion === 1) {
  if (numberSeleccion1 > numberSeleccion2)
    resultado = numberSeleccion1 - numberSeleccion2;
  else resultado = numberSeleccion2 - numberSeleccion1;
} else if (opcionSeleccion === 2) {
  if (numberSeleccion1 > numberSeleccion2)
    resultado = numberSeleccion1 / numberSeleccion2;
  else resultado = numberSeleccion2 / numberSeleccion1;
} else if (opcionSeleccion === 3) {
  resultado = numberSeleccion1 * numberSeleccion2;
} else if (opcionSeleccion === 4) {
  resultado = numberSeleccion1 / numberSeleccion2;
} else if (opcionSeleccion === 5) {
  resultado = numberSeleccion1 ** numberSeleccion2;
} else {
  resultado = "No has seleccionado una opción correcta";
}
console.log(
  `Has seleccionado la opción ${opcionSeleccion} y el resultado es ${resultado}`
);

/* ############## Segundo ejercicio Calculadora con switch */

const number1 = +prompt("selecciona el primer numero");
const number2 = +prompt("selecciona el segundo número");
let option = prompt("introduce un signo");

switch (option) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    if (number1 > number2) {
      console.log(number1 - number2);
    } else {
      console.log(number2 - number1);
    }
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "/":
    if (number1 > number2) {
      console.log(number1 / number2);
    } else {
      console.log(number2 / number1);
    }
    break;
  case "**":
    console.log(number1 ** number2);
    break;
  case " ":
    console.log("No has seleccionado una opción correcta");
    break;
}

/*####################  Tercer ejercicio juego de dado hasta llegar a 50 punto */

function dado() {
  return Math.round(Math.random() * (6 - 1) + 1);
}
for (let i = dado(); i < 50; i = i + dado()) {
  if (dado() >= 50) {
    console.log(
      `¡Enhorabuena, ha salido un ${dado()}! ¡Has ganado con un total de ${dado() +
        i} puntos!`
    );
  } else {
    console.log(` Ha salido un ${dado()} . Tienes un total de ${i + dado()}`);
  }
}
