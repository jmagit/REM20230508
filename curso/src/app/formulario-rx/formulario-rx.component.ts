import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder, AbstractControlOptions, UntypedFormArray } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pwdOrg = control.get('passwordValue');
  const pwdCopy = control.get('passwordConfirm');
  return pwdOrg && pwdCopy && pwdOrg.value === pwdCopy.value ? null : { passwordMatchValidator: true };
};

@Component({
  selector: 'app-formulario-rx',
  templateUrl: './formulario-rx.component.html',
  styleUrls: ['./formulario-rx.component.css']
})
export class FormularioRxComponent {
  elemento: any = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com' }
  modo: 'add' | 'edit' = 'edit'

  model = { user: 'usuario', password: 'P@$$w0rd', roles: [{ role: 'Admin' }, { role: 'User' }] };
  public miForm: FormGroup = new FormGroup({});

  constructor(protected fb: FormBuilder) {
    const fa = new FormArray<FormGroup<{ role: FormControl<string | null> }>>([]);
    // const fa = new UntypedFormArray([]);
    this.model.roles.forEach(r => fa.push(
      new FormGroup({ role: new FormControl(r.role, Validators.required) })
    ));
    this.miForm = new FormGroup({
      user: new FormControl('xx', {nonNullable: true, validators: Validators.required}),
      password: new FormGroup({
        passwordValue: new FormControl('', Validators.minLength(2)),
        passwordConfirm: new FormControl('', Validators.minLength(2)),
      }, passwordMatchValidator),
      roles: new FormArray([]) // fa
    });
    // this.miForm = new FormGroup({
    //   user: new FormControl(this.model.user, Validators.required),
    //   password: new FormGroup({
    //     passwordValue: new FormControl(this.model.password, Validators.minLength(2)),
    //     passwordConfirm: new FormControl(this.model.password, Validators.minLength(2)),
    //   }, passwordMatchValidator),
    //   roles: new FormArray(this.model.roles.map(item => new FormGroup({ role: new FormControl(item.role, Validators.required) })))
    // });
    this.miForm = this.fb.group({
      user: [this.model.user, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      password: this.fb.group({
          passwordValue: [this.model.password, Validators.minLength(2)],
          passwordConfirm: '',
        }, { validator: passwordMatchValidator }),
      roles: this.fb.array(this.model.roles.map(item => this.fb.group({ role: [item.role, Validators.required] })))
    });
// const   profileForm = this.fb.group({
//   firstName: [''],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: [''],
//     state: [''],
//     zip: ['']
//   }),
// });

    this.miForm.valueChanges.subscribe(data => {
      this.elemento = data
    });
    this.miForm.get('user')?.valueChanges.subscribe(data => {
      this.model.user = data
    });

  }
  addRole() {
    (this.miForm.get('roles') as FormArray).push(
      new FormGroup({ role: new FormControl('', Validators.required) })
    );
  }
  deleteRole(ind: number) {
    (this.miForm.get('roles') as FormArray).removeAt(ind);
  }

  add() {
    this.modo = 'add'
    this.elemento = { id: null, nombre: '', apellidos: '', edad: null, nif: '', email: '' }
  }
  edit() {
    this.modo = 'edit'
    this.elemento = { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 99, nif: '4g', email: 'pgrillo@example.com' }
    // this.miForm.setValue(this.model);
    this.miForm.setValue({ user: this.model.user, password: { passwordValue: this.model.user, passwordConfirm: this.model.user }, roles: [] });

  }

  send() {
    alert(`${this.modo}: ${JSON.stringify(this.elemento)}`)
  }
  cancel() {
    // alert(`cancelado`)
    this.miForm.reset();

  }

}
