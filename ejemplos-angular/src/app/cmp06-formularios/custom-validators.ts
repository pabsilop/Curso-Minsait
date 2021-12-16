import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

interface IOpcionesPassword {
  mayus?: boolean;
  simbolos?: boolean;
}

function esPasswordSegura(opciones: IOpcionesPassword): ValidatorFn {
  return (control) => {
    let hayMayusculas: boolean = false;
    let haySimbolos: boolean = false;

    if (opciones.mayus) {
      hayMayusculas = control.value.toLowerCase() !== control.value;
    }

    if (opciones.simbolos) {
      haySimbolos = new RegExp('\\W+').test(control.value);
    }

    const objError = {
      esPwsSegura: {
        simbolos: haySimbolos,
        mayus: hayMayusculas,
      },
    };

    return hayMayusculas && haySimbolos ? null : objError;
  };
}

function esUnStark(control: AbstractControl): ValidationErrors | null {
  const nombresStark = [
    'robb',
    'arya',
    'tody',
    'sansa',
    'rickon',
    'bran',
    'nedd',
  ];
  const objError: ValidationErrors = {
    esStark: {
      nombresValidos: nombresStark,
      nombreActual: control.value,
    },
  };
  return nombresStark.includes(control.value.toLowerCase()) ? null : objError;
}

function passwordRepetidaValida(
  control: AbstractControl
): ValidationErrors | null {
  const formulario = control.parent;
  const password = formulario?.value.password;

  const confirmarPassword = control.value;

  if (password === confirmarPassword) {
    return null;
  }

  return {
    confirmarPassword: true,
  };
}

export const CustomValidators = {
  esUnStark,
  esPasswordSegura,
  passwordRepetidaValida,
};
