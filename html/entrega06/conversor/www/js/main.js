"use strict";

const url = "https://api.exchangerate-api.com/v4/latest/EUR";

const input = document.querySelector("input#tengo");
const select = document.querySelector("select#divtengo");
const selectout = document.querySelector("select#divquiero");
const button = document.querySelector("button");
const result = document.querySelector("p#quiero");

async function seleccionDivisa(url) {
  const response = await fetch(url);
  const datos = await response.json();
  const coins = Object.keys(datos.rates);

  for (const coin of coins) {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.setAttribute("value", coin);
    option1.innerText = coin;

    option2.setAttribute("value", coin);
    option2.innerText = coin;

    select.append(option1);
    selectout.append(option2);
  }
}

async function conversionDivisa(evento) {
  let option1Div = select.value;
  let option2Div = selectout.value;
  let moneda = input.value;

  let url1 = `https://api.exchangerate-api.com/v4/latest/${option1Div}`;
  const responser = await fetch(url1);
  const divs = await responser.json();
  const div = divs.rates[option2Div];
  let resultado = `${moneda * div}`;
  result.textContent = resultado;
}

button.addEventListener("click", conversionDivisa);
seleccionDivisa(url);
