import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css'],
})
export class Cmp05PipesComponent implements OnInit {
  producto: any = {
    titulo: 'one plus 9',
    descripcion:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error a recusandae, alias minima deleniti pariatur vitae corrupti ratione ducimus repellat provident, maxime est quod molestias voluptatibus. Repudiandae, dolore veniam.',
    precio: 890,
    fechaLanzamiento: new Date(2021, 2, 13),
  };

  tareas: Array<string> = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

  filtroTxt: string = '';

  texto: string = '';

  datosPost1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then(
    (resp) => {
      console.log(resp);
      return resp.json();
    }
  );
  constructor() {}

  ngOnInit(): void {}

  addTarea(event: any): void {
    // this.tareas.push(event.target.value);
    this.tareas = [...this.tareas, event.target.value];
  }

  censurarPalabra(event: any): void {}
}
