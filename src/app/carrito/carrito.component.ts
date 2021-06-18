import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items = this.carritoService.getItems();
  checkoutForm = this.formBuilder.group({
    nombre: '',
    direccion: ''
  });

  constructor(private carritoService: CarritoService,private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.carritoService.clearCart();
    console.warn('Se ha procesado tu pedido', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}