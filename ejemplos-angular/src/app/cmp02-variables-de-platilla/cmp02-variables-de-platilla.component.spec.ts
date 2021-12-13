import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02VariablesDePlatillaComponent } from './cmp02-variables-de-platilla.component';

describe('Cmp02VariablesDePlatillaComponent', () => {
  let component: Cmp02VariablesDePlatillaComponent;
  let fixture: ComponentFixture<Cmp02VariablesDePlatillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02VariablesDePlatillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02VariablesDePlatillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
