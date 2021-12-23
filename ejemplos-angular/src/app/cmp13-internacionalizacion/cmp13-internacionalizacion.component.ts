import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp13-internacionalizacion',
  templateUrl: './cmp13-internacionalizacion.component.html',
  styleUrls: ['./cmp13-internacionalizacion.component.css'],
})
export class Cmp13InternacionalizacionComponent implements OnInit {
  precio: number = 12.8;
  fecha: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
