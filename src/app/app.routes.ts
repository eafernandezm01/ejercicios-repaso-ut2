import { Routes } from '@angular/router';
import { Saludar } from './pages/saludar/saludar';
import { Semaforo } from './pages/semaforo/semaforo';
import { MisProfes } from './pages/mis-profes/mis-profes';
import { ImagenDia } from './pages/imagen-dia/imagen-dia';
import { Calificaciones } from './pages/calificaciones/calificaciones';
import { Carrusel } from './pages/carrusel/carrusel';
import { Playlist } from './pages/playlist/playlist';

import { DetallePersonaje } from './pages/detalle-personaje/detalle-personaje';

export const routes: Routes = [
  { path: 'detallepersonaje', component: DetallePersonaje },
  { path: 'saludar', component: Saludar },
  { path: 'semaforo', component: Semaforo },
  { path: 'misprofes', component: MisProfes },
  { path: 'imagenDia', component: ImagenDia },
  { path: 'calificaciones', component: Calificaciones },
  { path: 'carrusel', component: Carrusel },
  { path: 'playlist', component: Playlist },
  { path: '', redirectTo: 'detallepersonaje', pathMatch: 'full' },
  { path: '**', redirectTo: 'detallepersonaje' },
];
