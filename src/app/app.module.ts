import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MonedaFotoComponent } from './moneda-foto/moneda-foto.component';
import { MonedaDetalleComponent } from './moneda-detalle/moneda-detalle.component';
import { CarritoService } from './carrito.service';
import { CarritoComponent } from './carrito/carrito.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'monedas/:monedaId', component: MonedaDetalleComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MonedaFotoComponent,
    MonedaDetalleComponent,
    CarritoComponent,
    ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CarritoService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/