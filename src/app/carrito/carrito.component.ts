import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items = this.carritoService.getItems();
  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
  }

}