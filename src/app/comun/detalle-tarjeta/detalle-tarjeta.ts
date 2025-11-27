import { Component, Input } from '@angular/core';
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';

@Component({
  selector: 'app-detalle-tarjeta',
  imports: [],
  templateUrl: './detalle-tarjeta.html',
  styleUrl: './detalle-tarjeta.css',
})
export class DetalleTarjeta {
  @Input()
  detalleTarjeta!: IDetalleTarjeta;

  
}
