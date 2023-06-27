import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spectator, byValue, createComponentFactory } from '@ngneat/spectator';
import { FormularioRxComponent } from './formulario-rx.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormularioRxComponent', () => {
  let spectator: Spectator<FormularioRxComponent>;
  const createComponent = createComponentFactory({ component: FormularioRxComponent, imports: [ReactiveFormsModule]});

  beforeEach(() => spectator = createComponent());
  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
  it('should ', () => {
    expect(spectator.query(byValue('Send'))).toBeDefined();
  });
});
