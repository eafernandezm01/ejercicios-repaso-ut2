import { Component } from '@angular/core';
import { IProfes } from '../../interfaces/IMisProfes';

@Component({
  selector: 'app-mis-profes',
  imports: [],
  templateUrl: './mis-profes.html',
  styleUrl: './mis-profes.css',
})
export class MisProfes {
  misProfes: IProfes[] = [
    { profe: 'Eva', modulo: ['Optativa'] },
    { profe: 'Saúl', modulo: ['Acceso a datos', 'Proyecto'] }
  ];
}
