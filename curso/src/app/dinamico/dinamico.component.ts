import { Component } from '@angular/core';
import { HomeComponent } from '../main';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {
  menu = [
    { texto: 'demos', icono: '', componente: DemosComponent },
    { texto: 'inicio', icono: '', componente: HomeComponent},
  ]
  seleccionado = this.menu[0].componente

  seleccionar(index: number) {
    this.seleccionado = this.menu[index].componente
  }
}
