import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private carrito: CarritoService) { }

  ngOnInit() {
  }

  shippingCosts = this.carrito.getShippingPrices();

}