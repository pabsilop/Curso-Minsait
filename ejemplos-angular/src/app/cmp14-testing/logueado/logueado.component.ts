import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/cmp07-servicios/servicios/auth.service';

@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.component.html',
  styleUrls: ['./logueado.component.css'],
})
export class LogueadoComponent implements OnInit {
  estasLogueado: boolean = false;
  nombre: string = 'Charles Falco';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
