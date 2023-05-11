import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  elemento: any = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com'}
  modo: 'add' | 'edit' = 'edit'

  add() {
    this.modo = 'add'
    this.elemento = { id: null, nombre: '', apellidos: '', edad: null, nif: '', email: ''}
  }
  edit() {
    this.modo = 'edit'
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com'}
  }

  send() {
    alert(`${this.modo}: ${JSON.stringify(this.elemento)}`)
  }
}
