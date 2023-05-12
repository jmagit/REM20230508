import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService, MyCoreModule } from '@my/core';
import { NotificationService } from '../common-services';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      providers: [NotificationService, LoggerService],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, MyCoreModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
