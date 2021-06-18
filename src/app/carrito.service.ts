import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moneda, monedas } from './monedas';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items: Moneda[] = [];

  constructor(private http:HttpClient) { }

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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}