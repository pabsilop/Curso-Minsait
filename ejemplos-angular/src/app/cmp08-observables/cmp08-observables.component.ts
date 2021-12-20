import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css'],
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrarHora: boolean = false;
  @ViewChild('btnMostrar') boton!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Mensaje 1');
      setTimeout(() => {
        subscriber.next('Mensaje 2');
      }, 3000);
      setTimeout(() => {
        // subscriber.error('Un error');
        subscriber.complete();
      }, 6000);
      setTimeout(() => {
        // subscriber.error('Un error');
        //Este ya no se mostrará ya que el error y el complete desuscriben al observable como el metodo unSubscribe()
        subscriber.next('Otro mensaje más');
      }, 6000);
    });

    miObservable.subscribe({
      next: (msg: string) => {
        console.log(msg);
      },
      error: (err) => {
        console.log('Hay un error', err);
      },
      complete: () => {
        console.log('Ya no vamos a enviar más mensajes');
      },
    });
  }

  ngAfterViewInit() {
    // fromEvent(this.boton.nativeElement, 'click').subscribe((event) => {
    //   alert('Has clickado el botón');
    // });
    fromEvent<MouseEvent>(document, 'mouseover')
      .pipe(
        filter((event: MouseEvent) => {
          // console.log(event)
          const { clientX, clientY } = event;
          return clientX > 400 && clientY < 300;
        }),
        map((event) => {
          return { x: event.clientX, y: event.clientY };
        })
      )

      .subscribe((event: IPosicionRaton) => {
        console.log('Estás moviendo el ratón');
      });
  }

  toggleMostrarHora(): void {
    this.mostrarHora = !this.mostrarHora;
  }
}

interface IPosicionRaton {
  x: number;
  y: number;
}
