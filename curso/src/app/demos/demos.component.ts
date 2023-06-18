import { Component, Injector, OnDestroy, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { Unsubscribable } from 'rxjs';

interface Provincia {
  id: number,
  nombre: string,
}
@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  providers: [ NotificationService ],
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable | undefined;

  private nombre: string = 'mundo'
  fecha = '2023-05-09'
  idProvincia = 2
  public listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'barcelona' },
    { id: 3, nombre: 'MALAGA' },
    { id: 4, nombre: 'ciudad Real' },
  ]
  resultado: string | null = null
  visible = true
  estetica = { importante: true, error: false, urgente: true }

  fontSize = 24;

  constructor(public vm: NotificationService, private injector: Injector) { }

  public get Nombre(): string { return this.nombre }
  public set Nombre(value: string) {
    if(this.nombre == value) return
    this.nombre = value
  }

  public saluda() {
    this.resultado = `Hola ${this.nombre}`
  }
  public despide() {
    this.resultado = `Adios ${this.nombre}`
  }
  public di(algo: string) {
    this.resultado = `Dice ${algo}`
  }

  cambia() {
    this.visible = !this.visible
    this.estetica.importante = !this.estetica.importante
    this.estetica.error = !this.estetica.error
  }

  calcula(a: number, b: number): number { return a + b }

  add(provincia: string): void {
    const id = this.listado.length + 1
    this.listado.push({ id, nombre: provincia })
    this.idProvincia = id
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripción: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

  idiomas = [
    { codigo: 'en-US', region: 'USA' },
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portugal' },
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  doubleDoubleCount: Signal<number> = computed(() => this.doubleCount() * 2);
  prov = signal({ id: 1, nombre: 'Madrid' }, { equal: (a, b) => a.id === b.id })

  init() {
    this.count = signal(0);
    this.doubleCount = computed(() => this.count() * 2);
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    }, {injector: this.injector});
  }

  reset() {
    this.count.set(0)
    this.prov.set({ id: 1, nombre: 'Madrid' })
  }
  up() {
    this.count.update(old => old + 1)
    this.prov.mutate(item => { item.nombre = item.nombre + 'x' })
  }
  down() {
    this.count.update(old => old - 1)
  }
}
