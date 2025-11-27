import { Component } from '@angular/core';
import { DATOSIMAGENDIA, IImagenDia } from '../../interfaces/IImagenDia';
import { DetalleTarjeta } from '../../comun/detalle-tarjeta/detalle-tarjeta';
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';

@Component({
  selector: 'app-imagen-dia',
  imports: [DetalleTarjeta],
  templateUrl: './imagen-dia.html',
  styleUrl: './imagen-dia.css',
})
export class ImagenDia {
  diasSemana: IImagenDia[] = DATOSIMAGENDIA;

  getObjetoDetalle(dato: IImagenDia): IDetalleTarjeta {
    return {
      titulo: dato.nombre.toUpperCase(),
      urlImg: dato.urlImagen,
      altImg: dato.altImagen,
      classCssTitulo: dato.esFinde ? 'text-center text-success' : 'text-center text-danger',
    };
  }
}
