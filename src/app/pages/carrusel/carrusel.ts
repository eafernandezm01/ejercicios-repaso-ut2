import { Component } from '@angular/core';
import { DetalleTarjeta } from '../../comun/detalle-tarjeta/detalle-tarjeta';
import { CARRUSEL_DE_FOTOS, ICarrusel } from '../../interfaces/ICarrusel';
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';

@Component({
  selector: 'app-carrusel',
  imports: [DetalleTarjeta],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {
  misFotos!: ICarrusel[];
  actual!: IDetalleTarjeta;

  private indice: number = -1;
  haySiguiente: boolean = false;
  hayAnterior: boolean = false;

  constructor() {
    this.misFotos = CARRUSEL_DE_FOTOS;
    this.setSiguiente();
  }

  setSiguiente(): void {
    let aux = this.indice + 1;
    this.visibilidadBotones(aux);
    this.actual = this.getDetalleTarjeta(this.misFotos[aux]);
    this.indice = aux;
  }

  setAnterior(): void {
    let aux = this.indice - 1;
    this.visibilidadBotones(aux);
    this.actual = this.getDetalleTarjeta(this.misFotos[aux]);
    this.indice = aux;
  }

  private visibilidadBotones(aux: number) {
    this.haySiguiente = true;
    this.hayAnterior = true;
    if (aux === this.misFotos.length - 1) {
      this.haySiguiente = false;
    }
    if (aux === 0) {
      this.hayAnterior = false;
    }
  }

  private getDetalleTarjeta(foto: ICarrusel): IDetalleTarjeta {
    return {
      urlImg: foto.urlImg,
      altImg: foto.desc,
      titulo: foto.tit,
      desc: foto.desc,
      classCssTitulo: 'text-center',
      classCssDesc: 'text-center'
    };
  }
}
