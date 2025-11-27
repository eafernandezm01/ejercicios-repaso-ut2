export interface IPlaylist {
  cancion: string;
  artista?: ARTISTAS;
  urlVideo: string;
}

export enum ARTISTAS {
  AVB = 'Armin Van Buuren',
  PVD = 'Paul Van Dyk',
  TIESTO = 'Tiësto',
  EP = 'Eric Prydz',
  ARGY = 'Argy'
}

export const MI_LISTA: IPlaylist[] = [
  {
    cancion: 'In And Out Of Love',
    artista: ARTISTAS.AVB,
    urlVideo: 'https://www.youtube.com/embed/TxvpctgU_s8?si=ZEx1WclftM1iWhxp',
  },
  {
    cancion: 'Set Me Free',
    artista: ARTISTAS.AVB,
    urlVideo: 'https://www.youtube.com/embed/kBQHAP3SbjU',
  },
  {
    cancion: 'Bring Me To Life',
    artista: ARTISTAS.TIESTO,
    urlVideo: 'https://www.youtube.com/embed/RTz6E3gL_Ac?list=RDRTz6E3gL_Ac',
  },
  {
    cancion: 'Lifting You Higher',
    artista: ARTISTAS.AVB,
    urlVideo: 'https://www.youtube.com/embed/kBQHAP3SbjU',
  },
  {
    cancion: 'Always you',
    artista: ARTISTAS.AVB,
    urlVideo: 'https://www.youtube.com/embed/1xX9vq48igU?list=RD1xX9vq48igU',
  },
  {
    cancion: 'Adagio for Strings',
    artista: ARTISTAS.TIESTO,
    urlVideo: 'https://www.youtube.com/embed/PyD4QQgJ6O4?si=s0Sa9ivhjWiALQiX',
  },
  {
    cancion: 'Duality',
    artista: ARTISTAS.PVD,
    urlVideo: 'https://www.youtube.com/embed/2wnzgR06or0?si=3znU0kOAyqj-7Kkb',
  },
  {
    cancion: 'Opus',
    artista: ARTISTAS.EP,
    urlVideo: 'https://www.youtube.com/embed/gt1pKrwxAJU?list=RDgt1pKrwxAJU',
  },
  {
    cancion: 'Aria',
    artista: ARTISTAS.ARGY,
    urlVideo: 'https://www.youtube.com/embed/QZk3WKJc1ME?si=NksxmjIvKt1c7H2T',
  },
   {
    cancion: 'Power',
    artista: ARTISTAS.PVD,
    urlVideo: 'https://www.youtube.com/embed/6ACQj_l6MFE?si=uk2a2Qygxnj-H-vt',
  },
];
