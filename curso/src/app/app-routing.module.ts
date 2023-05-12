import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import GraficoSvgComponent from './grafico-svg/grafico-svg.component';
import { LibrosComponent } from './libros';
import { PageNotFoundComponent } from './main';
import { HomeComponent } from './main/home/home.component';
import { AuthGuard, AuthService, InRoleGuard, LoginFormComponent, RegisterUserComponent } from './security';

export function svgFiles(url: UrlSegment[]) {
  return url.length === 1 && url[0].path.endsWith('.svg') ? ({consumed: url}) : null;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  { path: 'contactos', component: ContactosListComponent },
  { path: 'contactos/add', component: ContactosAddComponent, canActivate: [AuthGuard], data: { redirectTo: '/login' } },
  { path: 'contactos/:id/edit', component: ContactosEditComponent, canDeactivate: [() => inject(AuthService).isAutenticated] },
  { path: 'contactos/:id', component: ContactosViewComponent },
  { path: 'contactos/:id/:kk', component: ContactosViewComponent },
  { path: 'alysia/baxendale', redirectTo: '/contactos/43' },
  { path: 'libros', children: [
    { path: '', component: LibrosComponent },
    { path: 'add', component: LibrosComponent },
    { path: ':id/edit', component: LibrosComponent },
    { path: ':id', component: LibrosComponent },
    { path: ':id/:kk', component: LibrosComponent },
  ], canActivate: [InRoleGuard], data: { roles: ['Empleados']}},
  // { path: 'libros', loadChildren: () => import('./libros/modulo.module'), canActivate: [InRoleGuard], data: { roles: ['Empleados']}  },
  { path: 'login', component: LoginFormComponent },
  { path: 'registro', component: RegisterUserComponent },
  { path: 'config',  loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},

  { matcher: svgFiles, component: GraficoSvgComponent},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
