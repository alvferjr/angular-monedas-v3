import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moneda, monedas } from '../monedas';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-moneda-detalle',
  templateUrl: './moneda-detalle.component.html',
  styleUrls: ['./moneda-detalle.component.css']
})
export class MonedaDetalleComponent implements OnInit {

  moneda: Moneda|undefined;

  constructor( private route: ActivatedRoute , 
               private carrito: CarritoService) {
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('monedaId'));

    // Find the product that correspond with the id provided in route.
    this.moneda = monedas.find(moneda => moneda.id === productIdFromRoute);
  }

  addToCart(moneda: Moneda) {
    this.carrito.addToCart(moneda);
    window.alert('Your product has been added to the cart!');
  }

}