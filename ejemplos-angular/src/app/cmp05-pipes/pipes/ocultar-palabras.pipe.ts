import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras',
})
export class OcultarPalabrasPipe implements PipeTransform {
  transform(texto: string, palabras: string[]): string {
    palabras.forEach((palabra) => {
      texto = texto.replace(palabra.toLowerCase(), '*'.repeat(palabra.length));
    });
    return texto;
  }
}

// {{'no se si me va a tocar la loteria' | ocultarPalabras:['no', 'si']}} => '** se ** me va a tocar la loteria
