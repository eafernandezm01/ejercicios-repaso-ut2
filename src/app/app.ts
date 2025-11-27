import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMenu } from './interfaces/IMenu';
import { Menu } from './comun/menu/menu';
import { Header } from "./comun/header/header";
import { Footer } from "./comun/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menu!: IMenu[];

  constructor() {
    this.menu = [
      { titulo: 'PERSONAJES', ruta: 'detallepersonaje' },
      { titulo: 'SALUDAR', ruta: 'saludar' },
      { titulo: 'SEMÁFORO', ruta: 'semaforo' },
      { titulo: 'MIS PROFES', ruta: 'misprofes' },
      { titulo: 'IMAGEN x DÍA', ruta: 'imagenDia' },
      { titulo: 'CALIFICACIONES', ruta: 'calificaciones' },
      { titulo: 'CARRUSEL', ruta: 'carrusel' },
      { titulo: 'PLAYLIST', ruta: 'playlist' },
    ];
  }
}
