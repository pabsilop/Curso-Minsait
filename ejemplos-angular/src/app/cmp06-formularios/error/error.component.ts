import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() errores: ValidationErrors | null = {};
  mensajesErrores: Array<string> = [];

  constructor() {}

  ngOnChanges(): void {
    this.mensajesErrores = [];

    for (let key in this.errores) {
      if (key === 'required') {
        this.mensajesErrores.push('El campo es obligatorio');
      } else if (key === 'minlength') {
        const error = this.errores[key];
        const msg = `Te faltan ${error.requiredLength - error.actualLength}/${
          error.requiredLength
        } carácteres`;
        this.mensajesErrores.push(msg);
      } else if (key === 'pattern') {
        const error = this.errores[key];
        const msg = `El ${error.actualValue} no comple con el siguiente patrón: ${error.requiredPattern}`;
        this.mensajesErrores.push(msg);
      } else if (key === 'esStark') {
        const error = this.errores[key];
        const msg = `${
          error.nombreActual
        } no es un Stark (${error.nombresValidos.join(', ')})`;
        this.mensajesErrores.push(msg);
      } else if (key === 'esPwsSegura') {
        const error = this.errores[key];
        if (!error.simbolos) {
          this.mensajesErrores.push(
            'La contraseña tiene que tener algún símbolo de puntuación'
          );
        }
        if (!error.mayus) {
          this.mensajesErrores.push(
            'La contraseña tiene que tener alguna letra mayúscula'
          );
        }
      } else if (key === 'confirmarPassword') {
        this.mensajesErrores.push('Las contraseñas tienen que ser iguales');
      }
    }
  }

  ngOnInit(): void {}
}
