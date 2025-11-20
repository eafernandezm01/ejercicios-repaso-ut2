import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css',
})
export class Semaforo {
  rojoActivo: boolean = false;
  amarilloActivo: boolean = false;
  verdeActivo: boolean = false;

  desactivaTodos(): void {
    this.rojoActivo = false;
    this.amarilloActivo = false;
    this.verdeActivo = false;
  }

  activaColor(color: string) {
    this.desactivaTodos();

    switch (color) {
      case 'R':
        this.rojoActivo = true;
        break;
      case 'A':
        this.amarilloActivo = true;
        break;
      case 'V':
        this.verdeActivo = true;
        break;
      default:
        break;
    }
  }
}
