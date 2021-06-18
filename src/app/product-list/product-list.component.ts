import { Component } from '@angular/core';

import { monedas } from '../monedas';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  monedas = monedas;

  onMuestraFoto() {
    window.alert('Esta es la foto de la moneda');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/