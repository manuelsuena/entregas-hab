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
  default:
    console.log("No has seleccionado una opción correcta");
    break;
}

/*####################  Tercer ejercicio juego de dado hasta llegar a 50 punto */

function dado() {
  return Math.ceil(Math.random() * 6);
}

let totalPuntos = 0;

for (let i = 1; totalPuntos <= 50; i++) {
  const numeroDado = dado();
  totalPuntos += numeroDado;
  if (totalPuntos < 50) {
    console.log(
      `En la tirada ${i}, ha salido un ${numeroDado}. Tienes un total de ${totalPuntos}`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${numeroDado}! ¡Has ganado con un total de ${totalPuntos} puntos!`
    );
  }
}

/* ###################  Ejercicio media de puntuación ######## */

const maria = [62, 34, 55];
const paula = [35, 60, 59];
const rebeca = [40, 39, 63];

function mediaPuntuacion(arrayEquipo) {
  let totalPuntuacion = 0;
  for (let i = 0; i < arrayEquipo.length; i++) {
    totalPuntuacion += arrayEquipo[i];
  }
  return totalPuntuacion / arrayEquipo.length;
}

const mediaMaria = mediaPuntuacion(maria);
const mediaPaula = mediaPuntuacion(paula);
const mediaRebeca = mediaPuntuacion(rebeca);

if (mediaMaria > mediaPaula && mediaMaria > mediaRebeca) {
  console.log(
    `El equipo de María tiene la media más alta. Un total de ${mediaMaria}`
  );
} else if (mediaPaula > mediaMaria && mediaPaula > mediaRebeca) {
  console.log(
    `El equipo de María tiene la media más alta. Un total de ${mediaPaula}`
  );
} else {
  consoleconsole.log(
    `El equipo de María tiene la media más alta. Un total de ${mediaRebeca}`
  );
}
