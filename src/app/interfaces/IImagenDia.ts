export interface IImagenDia {
  nombre: string;
  urlImagen: string;
  altImagen: string;
  esFinde: boolean;
}

export const DATOSIMAGENDIA: IImagenDia[] = [
  { nombre: 'Lunes', urlImagen: './imagen-dia/Lunes.png', altImagen: 'Imágen del Lunes', esFinde: false },
  { nombre: 'Martes', urlImagen: './imagen-dia/Martes.png', altImagen: 'Imágen del Martes', esFinde: false },
  { nombre: 'Miércoles', urlImagen: './imagen-dia/Miercoles.png', altImagen: 'Imágen del Miércoles', esFinde: false },
  { nombre: 'Jueves', urlImagen: './imagen-dia/Jueves.png', altImagen: 'Imágen del Jueves', esFinde: false },
  { nombre: 'Viernes', urlImagen: './imagen-dia/Viernes.png', altImagen: 'Imágen del Viernes', esFinde: false },
  { nombre: 'Sábado', urlImagen: './imagen-dia/Sabado.png', altImagen: 'Imágen del Sábado', esFinde: true },
  { nombre: 'Domingo', urlImagen: './imagen-dia/Domingo.png', altImagen: 'Imágen del Domingo', esFinde: true },
];
