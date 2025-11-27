import { Routes } from '@angular/router';
import { Saludar } from './pages/saludar/saludar';
import { Semaforo } from './pages/semaforo/semaforo';
import { MisProfes } from './pages/mis-profes/mis-profes';
import { ImagenDia } from './pages/imagen-dia/imagen-dia';
import { Calificaciones } from './pages/calificaciones/calificaciones';

export const routes: Routes = [
  { path: 'saludar', component: Saludar },
  { path: 'semaforo', component: Semaforo },
  { path: 'misprofes', component: MisProfes },
  { path: 'imagenDia', component: ImagenDia },
  { path: 'calificaciones', component: Calificaciones }
];
