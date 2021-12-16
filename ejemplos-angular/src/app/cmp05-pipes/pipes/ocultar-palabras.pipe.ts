import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras',
})
export class OcultarPalabrasPipe implements PipeTransform {
  transform(value: string, palabras: Array<string>): string {
    palabras.forEach((palabra) => {
      const regExp = new RegExp(palabra, '');
      value = value.replace(regExp, '*'.repeat(palabra.length));
    });
    return value;
  }
}

// {{'no se si me va a tocar la loteria' | ocultarPalabras:['no', 'si']}} => '** se ** me va a tocar la loteria
