import { Component } from '@angular/core';

/*
    Crea una página que contenga:
        - botón saludar que al pinchar sobre él se muestre un saludo y la fecha actual. 
        - botón adiós que al pinchar sobre él muestre un mensaje de despedida quitando el mensaje que hubiera previamente.
    Para ocultar/mostrar mensaje usa una directiva de control de flujo.
*/
@Component({
  selector: 'app-saludar',
  imports: [],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css',
})
export class Saludar {
  saludar: boolean = true;

  getHoy (): string {
    return new Date().toLocaleDateString();
  }


}
