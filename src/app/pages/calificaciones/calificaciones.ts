import { Component } from '@angular/core';
import { DetalleTarjeta } from "../../comun/detalle-tarjeta/detalle-tarjeta";
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';

@Component({
  selector: 'app-calificaciones',
  imports: [DetalleTarjeta],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.css',
})
export class Calificaciones {

  calificacion: number = 5;

  objetoTarjeta!: IDetalleTarjeta;

  
  constructor (){
    this.setObjetoCalificacion();
  }

  actualizaCalificacion (num:number): void{
    this.calificacion +=num;
    this.setObjetoCalificacion();
  }


  private setObjetoCalificacion():void {
    let urlImg: string = './calificaciones/feliz.svg';
    let altImg: string = 'Emoji contento';

    let classCssSubTitulo: string = 'text-center text-success';

    if (this.calificacion < 5){
      urlImg= './calificaciones/llorando.svg';
      altImg= 'Emoji llorando';
      classCssSubTitulo = 'text-center text-danger'
    }
    
    this.objetoTarjeta = {
      titulo: `Calificación en el módulo de Optativa`,
      subTitulo: `${this.calificacion}`,
      classCssTitulo: 'text-center',
      classCssSubTitulo,
      urlImg,
      altImg
    };
  }
}
