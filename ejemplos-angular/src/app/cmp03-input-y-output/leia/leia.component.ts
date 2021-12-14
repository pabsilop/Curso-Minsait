import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css'],
})
export class LeiaComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() nombreCambiado = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  cambiarNombre(event: any) {
    this.nombreCambiado.emit(event.target.value);
  }
}
