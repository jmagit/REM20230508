import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';
import GraficoSvgComponent from '../grafico-svg/grafico-svg.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { texto: 'formulario', icono: 'fa-solid fa-chalkboard-user', componente: FormularioComponent },
    { texto: 'inicio', icono: 'fa-solid fa-house', componente: HomeComponent},
    { texto: 'demos', icono: 'fa-solid fa-chalkboard-user', componente: DemosComponent },
    { texto: 'gráfico', icono: 'fa-solid fa-image', componente: GraficoSvgComponent},
    { texto: 'calculadora', icono: 'fa-solid fa-calculator', componente: CalculadoraComponent},
  ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seleccionado: any = this.menu[0].componente

  seleccionar(index: number) {
    this.seleccionado = this.menu[index].componente
  }
}
