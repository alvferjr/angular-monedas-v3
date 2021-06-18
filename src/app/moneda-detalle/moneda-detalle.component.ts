import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moneda, monedas } from '../monedas';

@Component({
  selector: 'app-moneda-detalle',
  templateUrl: './moneda-detalle.component.html',
  styleUrls: ['./moneda-detalle.component.css']
})
export class MonedaDetalleComponent implements OnInit {

  moneda: Moneda|undefined;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('monedaId'));

    // Find the product that correspond with the id provided in route.
    this.moneda = monedas.find(moneda => moneda.id === productIdFromRoute);
  }

}