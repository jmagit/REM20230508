import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from '@my/core';
import { CommonServicesModule } from '../common-services';
import { LibrosComponent, LIBROS_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';

@NgModule({
  declarations: [
    LIBROS_COMPONENTES,
  ],
  exports: [
    // LIBROS_COMPONENTES,
    LibrosComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([
      { path: '', component: LibrosComponent },
      { path: 'add', component: LibrosComponent },
      { path: ':id/edit', component: LibrosComponent },
      { path: ':id', component: LibrosComponent },
      { path: ':id/:kk', component: LibrosComponent },
    ]),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentModule, MyCoreModule,
  ]
})
export default class LibrosModule { }
