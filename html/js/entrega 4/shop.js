"use strict";
const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];

class CartItem {
  units = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.units++;
  }
}
class Item {
  constructor(name, precio) {
    this.name = name;
    this.precio = precio;
  }
  static crearCatalogo(itemNames, itemPrices) {
    return itemNames.map((nombre, index) => {
      return new Item(nombre, itemPrices[index]);
    });
  }
}

class User {
  #cart = [];
  constructor(name) {
    this.name = name;
  }
  addToCart(item) {
    for (let i = 0; i < itemNames.length; i++) {
      if (CartItem[i] != itemNames[i]) {
        this.#cart.push(new CartItem(item));
      } else {
        this.#cart[index].increase();
      }
    }
  }
}
class Shop {}
const catalogue = Item.crearCatalogo(itemNames, itemPrices);
console.log(catalogue);
const myUser = new User("Ramiro");
myUser.addToCart(catalogue[1]);
console.log(myUser);
