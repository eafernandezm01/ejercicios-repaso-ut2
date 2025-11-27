import { Component, Input } from '@angular/core';
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-tarjeta',
  imports: [],
  templateUrl: './detalle-tarjeta.html',
  styleUrl: './detalle-tarjeta.css',
})
export class DetalleTarjeta {
  @Input()
  detalleTarjeta!: IDetalleTarjeta;

  constructor(private sanitizer: DomSanitizer) {}

  /**
   ERROR RuntimeError: NG0904: unsafe value used in a resource 
   URL context (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss) 
   at DetalleTarjeta_Conditional_2_Template (detalle-tarjeta.html:6:13)
   */
  getURLSeguraVideo(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
