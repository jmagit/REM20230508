import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicoComponent } from './dinamico.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoggerService } from '@my/core';
import { NotificationService } from '../common-services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DinamicoComponent', () => {
  let component: DinamicoComponent;
  let fixture: ComponentFixture<DinamicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicoComponent],
      providers: [NotificationService, LoggerService],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
