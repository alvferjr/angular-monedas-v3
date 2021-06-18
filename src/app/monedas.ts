export interface Moneda {
  id: number;
  pais: string;
  valor: string;
  anio: number;
  ceca: string;
  descripcion: string;
  comentario: string;
  fotografia: string;
  rutaFotografia: string;

}

export const monedas = [
  {
    id: 1,
    pais: 'España',
    valor: '20€',
    anio: 2020,
    ceca: 'Madrid',
    descripcion: 'Moneda de plata. No circulada. Perfecto estado',
    comentario: 'Homenaje a sanitarios pandemia Covid',
    fotografia: 'SI',
    rutaFotografia: 'imagenes/Covid.jpg'
  },
  {
    id: 2,
    pais: 'España',
    valor: '5 ptas',
    anio: 1890,
    ceca: 'Madrid',
    descripcion: 'Alfonso XII. Circulada. Desgastada por el uso',
    comentario: 'Moneda de plata',
    fotografia: 'NO',
    rutaFotografia: ''
  },
  {
    id: 3,
    pais: 'El Vaticano',
    valor: '100 ptas',
    anio: 1982,
    ceca: 'Madrid',
    descripcion: 'Moneda de plata. No circulada. Perfecto estado',
    comentario: 'Conmemorativa del viaje de Juan Pablo II a España',
    fotografia: 'SI',
    rutaFotografia: 'imagenes/JuanPa.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/