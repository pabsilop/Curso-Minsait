import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMarcar]',
})
export class MarcarDirective implements OnInit {
  @HostBinding('style.background-color') colorFondo: string = 'white';
  @Input('appMarcar') color: string = 'yellow';

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white';
  }
}
