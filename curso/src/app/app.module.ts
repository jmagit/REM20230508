import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MainModule, /*SecurityModule,*/ MyCoreModule, CommonServicesModule,
    GraficoSvgComponent,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
