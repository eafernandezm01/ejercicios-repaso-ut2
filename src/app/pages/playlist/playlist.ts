import { Component } from '@angular/core';
import { DetalleTarjeta } from '../../comun/detalle-tarjeta/detalle-tarjeta';
import { ARTISTAS, IPlaylist, MI_LISTA } from '../../interfaces/IPlaylist';
import { IDetalleTarjeta } from '../../interfaces/IDetalleTarjeta';

@Component({
  selector: 'app-playlist',
  imports: [DetalleTarjeta],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist {
  listaArtistas!: ARTISTAS[];
  listaCanciones!: IPlaylist[];

  constructor() {
    this.listaArtistas = Object.values(ARTISTAS);
    this.setListaArtista();
  }

  setListaArtista(artista?: ARTISTAS): void {
    if (artista) {
      this.listaCanciones = MI_LISTA.filter((aux) => aux.artista === artista);
    } else {
      this.listaCanciones = MI_LISTA;
    }
  }

  getDetalleTarjeta(cancion: IPlaylist): IDetalleTarjeta {
    return {
      titulo: cancion.cancion,
      subTitulo: cancion.artista,
      classCssTitulo: 'text-center',
      classCssSubTitulo: 'text-center',
      urlVideo: cancion.urlVideo,
    };
  }
}
