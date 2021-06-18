import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Moneda } from '../monedas';

@Component({
  selector: 'app-moneda-foto',
  templateUrl: './moneda-foto.component.html',
  styleUrls: ['./moneda-foto.component.css']
})
export class MonedaFotoComponent implements OnInit {

  @Input() moneda!: Moneda;
  @Output() muestraFoto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}