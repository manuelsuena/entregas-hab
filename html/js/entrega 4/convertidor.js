// ##### Conversor de divisa ####

"use strict";

let ammountEuros = prompt("Cantidad de Euros desea cambiar");
const dataUrl = `https://api.exchangerate-api.com/v4/latest/EUR`;

console.log(
  fetch(dataUrl)
    .then(USD => {
      return USD.json();
    })
    .then(data => {
      console.log(
        `${ammountEuros} euros, son ${(data.rates.USD * ammountEuros).toFixed(
          2
        )} USD`
      );
    })
);
const dataUsd = `https://api.exchangerate-api.com/v4/latest/USD`;
console.log(
  fetch(dataUsd)
    .then(Jpy => {
      return Jpy.json();
    })
    .then(data => {
      console.log(
        `${(data.rates.USD * ammountEuros).toFixed(2)} USD, son ${(
          data.rates.USD * ammountEuros
        ).toFixed(2) * data.rates.JPY.toFixed(2)} JPY`
      );
    })
);
