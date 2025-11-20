import { Routes } from '@angular/router';
import { Saludar } from './pages/saludar/saludar';
import { Semaforo } from './pages/semaforo/semaforo';
import { MisProfes } from './pages/mis-profes/mis-profes';

export const routes: Routes = [
  { path: 'saludar', component: Saludar },
  { path: 'semaforo', component: Semaforo },
  { path: 'misprofes', component: MisProfes },
];
