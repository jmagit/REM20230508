import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ContactosComponent } from '../contactos';
import { LibrosComponent } from '../libros';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { texto: 'contactos', icon: 'fa-solid fa-address-book', componente: ContactosComponent},
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent },
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
    { texto: 'formulario', icono: 'fa-solid fa-chalkboard-user', componente: FormularioComponent },
    { texto: 'libros', icono: 'fa-solid fa-book', componente: LibrosComponent },
  ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seleccionado: any = this.menu[0].componente

  seleccionar(index: number) {
    this.seleccionado = this.menu[index].componente
  }
}
