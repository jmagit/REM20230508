/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function MayusculasValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toUpperCase() ? null : { mayusculas: 'No está en mayúsculas' }
  }
}
@Directive({
  selector: '[mayusculas]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MayusculasValidatorDirective, multi: true }]
})
export class MayusculasValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return MayusculasValidator()(control);
  }
}

export function NIFValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null; }
      const err = { nif: { invalidFormat: true, invalidChar: true, message: 'NIF invalido' } };
      if (/^\d{1,8}\w$/.test(control.value)) {
          const letterValue = control.value.substr(control.value.length - 1);
          const numberValue = control.value.substr(0, control.value.length - 1);
          err.nif.invalidFormat = false;
          return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
      } else { return err; }
  };
}
@Directive({
  selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidatorDirective, multi: true }]
})
export class NIFValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return NIFValidator()(control);
  }
}
@Directive({
  selector: '[type][formControlName],[type][formControl],[type][ngModel]',
  providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => TypeValidatorDirective), multi: true }
  ]
})
export class TypeValidatorDirective implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
      const valor = control.value;
      if (valor) {
        const dom = this.elem.nativeElement;
        if (dom.validity) { // dom.checkValidity();
          return dom.validity.typeMismatch ? { 'type': dom.validationMessage } : null;
        }
      }
      return null;
  }
}

export const MIS_VALIDADORES = [ NIFValidatorDirective, TypeValidatorDirective, MayusculasValidatorDirective ]
