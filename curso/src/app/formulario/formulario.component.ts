import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { NotificationService } from '../common-services';
import { RESTDAOService } from '../base-code';

// export abstract class RESTDAOService<T, K> {
//   protected baseUrl = environment.apiURL;
//   constructor(protected http: HttpClient, entidad: string, protected option = {}) {
//     this.baseUrl += entidad;
//   }
//   query(): Observable<Array<T>> { return this.http.get<Array<T>>(this.baseUrl, this.option); }
//   get(id: K): Observable<T> { return this.http.get<T>(this.baseUrl + '/' + id, this.option); }
//   add(item: T): Observable<T> { return this.http.post<T>(this.baseUrl, item, this.option); }
//   change(id: K, item: T): Observable<T> { return this.http.put<T>(this.baseUrl + '/' + id, item, this.option); }
//   remove(id: K): Observable<T> { return this.http.delete<T>(this.baseUrl + '/' + id, this.option); }
// }


@Injectable({providedIn: 'root'})
export class PersonasDAOService extends RESTDAOService<any, number> {
  constructor() {
    super('personas')
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  elemento: any = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com' }
  modo: 'add' | 'edit' = 'edit'

  constructor(private dao: PersonasDAOService, private notify: NotificationService) {}

  add() {
    this.modo = 'add'
    this.elemento = { id: null, nombre: '', apellidos: '', edad: null, nif: '', email: '' }
  }
  edit() {
    this.modo = 'edit'
    // this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com' }
    this.dao.get(+this.elemento.id).subscribe({
      next: data => this.elemento = data,
      error: err => this.notify.add(err.message)
    })
  }

  send() {
    alert(`${this.modo}: ${JSON.stringify(this.elemento)}`)
    switch(this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe({
          next: data => alert("Creado"),
          error: err => this.notify.add(err.message)
        })
        break;
      case 'edit':
        this.dao.change(+this.elemento.id, this.elemento).subscribe({
          next: data => alert("Modificado"),
          error: err => this.notify.add(err.message)
        })
        break;
    }
  }
  cancel() {
    alert(`cancelado`)
  }
}
