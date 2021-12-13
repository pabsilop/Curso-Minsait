import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-variables-de-platilla',
  templateUrl: './cmp02-variables-de-platilla.component.html',
  styleUrls: ['./cmp02-variables-de-platilla.component.css'],
})
export class Cmp02VariablesDePlatillaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saludar(nombre: string): void {
    alert('Hola ' + nombre);
  }
  saludar2(input: HTMLElement): void {
    alert('Hola $(input.value)');
  }
}
