import { LOCALE_ID, NgModule } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from './main';
// import { SecurityModule } from './security';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import GraficoSvgComponent from './grafico-svg/grafico-svg.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, /*SecurityModule,*/ MyCoreModule, CommonServicesModule,
    GraficoSvgComponent,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'dd/MMM/yy' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
