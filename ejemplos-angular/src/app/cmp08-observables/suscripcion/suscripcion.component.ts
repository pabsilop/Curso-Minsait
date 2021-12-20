import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css'],
})
export class SuscripcionComponent implements OnInit {
  @Input() plataforma: string = '';
  @Input() precio: number = 5.5;
  subEstado: boolean = false;
  fechaProximoPago: Date = new Date();
  subscripcionPlataforma: Subscription | null = null;
  cancelarSub$ = new EventEmitter<boolean>();
  alert: any = {
    danger: false,
    info: false,
    success: false,
    mensaje: '',
    mostrar: false,
  };

  constructor(private pagosService: PagosService) {}

  ngOnInit(): void {}

  showAlert(mensaje: string, tipo: string): void {
    this.alert.mostrar = true;
    this.alert.danger = tipo === 'danger';
    this.alert.info = tipo === 'info';
    this.alert.success = tipo === 'success';
    this.alert.mensaje = mensaje;
    setTimeout(() => {
      this.alert.mostrar = false;
    }, 2000);
  }

  getFechaProximoPago(): Date {
    const fecha = new Date();
    fecha.setSeconds(fecha.getSeconds() + 6);
    return fecha;
  }

  activarSuscripcion() {
    const observableSub = new Observable((subscriber: Subscriber<any>) => {
      this.subEstado = true;
      this.fechaProximoPago = this.getFechaProximoPago();

      const subscription = interval(4000).subscribe(() => {
        console.log('Se sigue ejecutando');
        if (this.pagosService.pagarSuscripcion()) {
          this.fechaProximoPago = this.getFechaProximoPago();
          subscriber.next('Te hemos cobrado ' + this.precio);
        } else {
          this.subEstado = false;
          subscriber.error(
            'No te hemos podido cobrar la suscripción. Revisa el método de pago y vuelve a suscribirte.'
          );
          subscription.unsubscribe();
        }
      });

      const subscripcionCancelar = this.cancelarSub$.subscribe(() => {
        this.subEstado = false;
        subscription.unsubscribe();
        subscriber.complete();
        subscripcionCancelar.unsubscribe();
      });
      // const intervalId = setInterval(() => {
      // if (this.pagosService.pagarSuscripcion()) {
      // this.fechaProximoPago = this.getFechaProximoPago()
      // subscriber.next('Te hemos cobrado ' + this.precio)
      // } else {
      // this.subEstado = false
      // subscriber.error('No te hemos podido cobrar la suscripción. Revisa el método de pago y vuelve a suscribirte.')
      // clearInterval(intervalId)
      // }
      // }, 4000)
    });
    this.subscripcionPlataforma = observableSub.subscribe({
      next: (msg: string) => this.showAlert(msg, 'success'),
      error: (err: string) => this.showAlert(err, 'danger'),
      complete: () =>
        this.showAlert(
          'Has cancelado la suscripción 😥 te echaremos de menos',
          'info'
        ),
    });
  }

  cancelarSubscripcion() {
    this.cancelarSub$.emit(true);
  }
}
