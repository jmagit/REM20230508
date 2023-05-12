import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoggerService, MyCoreModule } from '@my/core';
import { NotificationService } from '../common-services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosComponent],
      providers: [NotificationService, LoggerService],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, MyCoreModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
