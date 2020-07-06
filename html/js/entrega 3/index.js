"use strict";

//   ############# Ejercicio 1 ###############

/* Dada la función LetterCount(str) toma el parámetro str que se está pasando y
 devuelve la primera palabra de mayor longitud.Por ejemplo: Hoy es un día estupendo 
 y fantástico.debe devolver fantástico porque es la primera palabra que más letras
  tiene. */

const myString = prompt(`Escribe un mensaje`);

function countLetter(str) {
  return str
    .split(" ")
    .reduce((primera, segunda) =>
      segunda.length > primera.length ? segunda : primera
    );
}

const message = countLetter(myString);
console.log(`la palabra más larga es ${message}`);

// #########################  Ejercicio 2 ###########################

/* Haz que la función BinaryConverter(str) devuelva la forma decimal del valor
binario. Por ejemplo: si se pasa 101 el programa debe retornar un 5, si se pasa
1000 debe retornar un 8, etc.Si no sabes como convertir un número binario a decimal. */

let binary = prompt(' Número binario que se convertira a decimal.');
function binaryConverterDecimal() {

  numero = binary.split('');
  let decimal = 0;
  const numeroReverse = numero.reverse();
  for (let i = 0; i < numeroReverse.length; i++) {
    decimal += Math.pow(2, i) * numeroReverse[i];
  }
  alert('El resulatado es:  ' + decimal);
}
binaryConverterDecimal();

/* let binari = "1000";

function binariEnDecimal(str) {
return str
 .split("")
  .reverse()
  .map((value, index) => (value ? 2 ** index : 0))
  .reduce((acumulator,current) => acumulator + current);
}
console.log(`el numero binario ${binari}, es en decimal ${binariEnDecimal(binari)}`); */

//  ########################## Ejercicio 3 ###########################

/* Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa 
y devuelva true si el parámetro es un palíndromo, (la cadena se lee igual 
hacia adelante que hacia atrás) de lo contrario devuelve false.
Por ejemplo: Arriba la birra debería devolver true, se lee igual del 
derecho que del revés. */

const mensaje = prompt(`Escribe un mensaje para comprobar si es un palidrome`);

function Palindrome(str) {
  const mensajeOrdenado = mensaje.toLowerCase().replace(/ /g, "");
  const reverseMensaje = mensajeOrdenado
    .split("")
    .reverse()
    .join("");
  return mensajeOrdenado === reverseMensaje;
}
console.log(Palindrome(mensaje));
