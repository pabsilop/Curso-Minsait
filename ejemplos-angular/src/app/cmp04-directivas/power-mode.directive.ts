import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appPowerMode]',
})
export class PowerModeDirective implements OnInit {
  @HostBinding('style.color') colorFuente: string = 'black';
  @Input('') color: string = 'yellow';
  @HostBinding('style.top') top: string = '50%';
  @HostBinding('style.left') left: string = '50%';

  colores: Array<string> = [
    'red',
    'yellow',
    'blue',
    'orange',
    'purple',
    'green',
  ];

  constructor() {}

  ngOnInit() {}

  getPercentForPosition() {
    return Math.floor(Math.random() * 100) + '%';
  }

  @HostListener('keypress') onKeyboard() {
    const indexRandom = Math.floor(Math.random() * this.colores.length);
    const colorRandom: string = this.colores[indexRandom];
    this.colorFuente = colorRandom;
    this.top = this.getPercentForPosition();
    this.left = this.getPercentForPosition();
  }
}
