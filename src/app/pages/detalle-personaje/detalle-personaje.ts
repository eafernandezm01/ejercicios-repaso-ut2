import { Component } from '@angular/core';
import { IPersonaje, TIPO_PESONAJE } from '../../interfaces/IPersonaje';
import { Personaje } from '../../comun/personaje/personaje';

@Component({
  selector: 'app-detalle-personaje',
  imports: [Personaje],
  templateUrl: './detalle-personaje.html',
  styleUrl: './detalle-personaje.css',
})
export class DetallePersonaje {

    gandalf: IPersonaje = {
      nombre: 'Gandalf',
      nivel: 70,
      tipo: TIPO_PESONAJE.mago,
      vida: 0,
      imagen: './gandalf.png',
    };

    ladybug: IPersonaje = {
      nombre: 'LadyBug',
      nivel: 40,
      tipo: TIPO_PESONAJE.druida,
      vida: 100,
      imagen: './ladybug.webp',
    };
}
