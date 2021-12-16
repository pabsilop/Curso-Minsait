import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-vendehumos';

  listaVendeHumos: any = [
    {
      id: 1,
      nombre: 'Josheff Ajram',
      descripcion: 'El morito de confianza',
      categorias: ['Trading'],
      fechaAlta: new Date(2020, 2, 13),
      urlImage:
        'https://www.littiumbykaos.com/wp-content/uploads/2020/09/Captura-de-pantalla-2020-09-29-a-las-13.16.38.png',
      numVotos: 0,
      votadoPor: [2, 3],
      usuarioId: 1,
    },
    {
      id: 2,
      nombre: 'Roberto Gamboa',
      descripcion: 'Kalise para todos... espera tu no eras',
      categorias: ['No se'],
      fechaAlta: new Date(2020, 2, 13),
      urlImage: 'https://pbs.twimg.com/media/EhKkbyrXsAEZC8L.jpg',
      numVotos: 0,
      votadoPor: [2],
      usuarioId: 2,
    },
    {
      id: 3,
      nombre: 'Willyrex',
      descripcion: 'El pirulas',
      categorias: ['NFTs'],
      fechaAlta: new Date(2020, 2, 13),
      urlImage:
        'https://i1.sndcdn.com/artworks-OWyyG93NAgaeGoJe-VK9Gog-t500x500.jpg',
      numVotos: 0,
      votadoPor: [1, 2],
      usuarioId: 3,
    },
  ];
}

// class Vendehumo {
//   constructor(public id: string) {

//   }
// }
