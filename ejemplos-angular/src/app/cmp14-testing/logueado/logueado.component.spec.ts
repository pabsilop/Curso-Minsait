import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueadoComponent } from './logueado.component';

describe('LogueadoComponent', () => {
  let component: LogueadoComponent;
  let fixture: ComponentFixture<LogueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogueadoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Si no estás logueado debería de aparecer la página de logueate', () => {
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('p').textContent).toEqual('Logueate por favor');
  });

  it('Si no estás logueado debería de aparecer la página de logueate', () => {
    component.estasLogueado = true;
    fixture.detectChanges();
    const dom = fixture.debugElement.nativeElement;
    expect(dom.querySelector('p').textContent).toEqual(
      'Bienvenido ' + component.nombre
    );
  });
});
