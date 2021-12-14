import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble',
})
export class DoblePipe implements PipeTransform {
  transform(value: number, descuento?: number): number {
    let resultado = value * 2;

    if (descuento) {
      resultado -= descuento;
    }
    return resultado;
  }
}
