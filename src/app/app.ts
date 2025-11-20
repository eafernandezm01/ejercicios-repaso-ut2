import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMenu } from './interfaces/IMenu';
import { Menu } from './comun/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menu!: IMenu[];

  constructor() {
    this.menu = [
      { titulo: 'SALUDAR', ruta: 'saludar' },
      { titulo: 'SEMÁFORO', ruta: 'semaforo' },
      { titulo: 'MIS PROFES', ruta: 'misprofes' },
    ];
  }
}
