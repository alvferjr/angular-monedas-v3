import { Injectable } from '@angular/core';
import { Moneda, monedas } from './monedas';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items: Moneda[] = [];

  constructor() { }

  addToCart(moneda: Moneda) {
    this.items.push(moneda);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}