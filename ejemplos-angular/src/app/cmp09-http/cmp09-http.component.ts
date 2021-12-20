import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea';
import { TareasService } from './services/tareas.service';
import { IIdNuevaTarea } from './interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css'],
})
export class Cmp09HttpComponent implements OnInit {
  listaTareas: Array<Tarea> = [];
  formEditar: FormGroup;

  constructor(private tareasService: TareasService) {
    this.formEditar = new FormGroup({
      id: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.getTareas();
  }

  actualizar() {
    console.log(this.formEditar);
    const idTareaEditada = this.formEditar.value.id;
    // this.tareasService.updateTareas()
    this.tareasService
      .updateTarea(this.formEditar.value)
      .subscribe((datosActualizados: Tarea) => {
        console.log('Actualizado');

        const tarea = this.listaTareas.find((t) => t.id === idTareaEditada);
        Object.assign(tarea, datosActualizados);
      });
  }

  rellenarFormulario(t: Tarea) {
    // this.formEditar.controls['titulo'].setValue(t.titulo);
    // this.formEditar.controls['completada'].setValue(t.completada);

    // this.formEditar.setValue({
    //   id: t.id,
    //   titulo: t.titulo,
    //   completada: t.completada
    // })
    this.formEditar.setValue({ ...t });
  }

  getTareas(): void {
    this.tareasService.getTareas().subscribe((tareas: Array<Tarea>) => {
      console.log(tareas);
      this.listaTareas = tareas;
    });
  }

  guardar(): void {
    // const tarea = {
    //   titulo: 'Ver One Piece este finde',
    //   completada: false,
    // };

    const tarea = new Tarea('Ver One Piece este finde', true);
    this.tareasService.createTareas(tarea).subscribe((datos: IIdNuevaTarea) => {
      console.log(datos);
      tarea.id = datos.name;
      this.listaTareas.push(tarea);
    });
  }

  completar(tarea: Tarea): void {
    this.tareasService.completeTarea(tarea).subscribe((datos: any) => {
      tarea.completada = datos.completada;
    });
  }

  eliminar(id: string): void {
    this.tareasService.deleteTarea(id).subscribe(() => {
      // Solución 1
      this.listaTareas = this.listaTareas.filter((t: Tarea) => {
        return t.id !== id;
      });

      //Solucion 2
      //   const pos = this.listaTareas.findIndex((t: Tarea) => t.id === id)
      //   this.listaTareas.splice(pos, 1)
    });
  }
}
