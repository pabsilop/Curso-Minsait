import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../cmp07-servicios/servicios/auth.service';
import { socket } from '../../main';

@Component({
  selector: 'app-cmp10-autenticacion',
  templateUrl: './cmp10-autenticacion.component.html',
  styleUrls: ['./cmp10-autenticacion.component.css'],
})
export class Cmp10AutenticacionComponent implements OnInit {
  formNoticia: FormGroup;
  noticias: Array<any> = [];
  switchVista: boolean = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private zone: NgZone
  ) {
    this.formNoticia = new FormGroup({
      titulo: new FormControl(''),
      contenido: new FormControl(''),
      // userId: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //👇 ESTO 👇 DEBERIA DE IR EN UN SERVICIO DE NOTICIAS
    this.http
      .get('http://localhost:3200/noticias')
      .subscribe((noticias: any) => {
        console.log(noticias);
        this.noticias = noticias;
      });

    socket.on('nuevaNoticia', (nuevaNoticia) => {
      this.zone.run(() => {
        this.noticias.push(nuevaNoticia);
      });
    });
  }

  guardarNoticia(): void {
    const noticia = { ...this.formNoticia.value };
    noticia.userId = this.auth.getUserIdFromToken();

    console.log(noticia);
    //👇 ESTO 👇 DEBERIA DE IR EN UN SERVICIO DE NOTICIAS
    this.http
      .post('http://localhost:3200/noticias', noticia)
      .subscribe((nuevaNoticia: any) => {
        alert('La noticia se ha publicado correctamente');
      });
  }
}
