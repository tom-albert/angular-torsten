import { Directive } from '@angular/core';
import {NG_VALIDATORS, FormControl} from "@angular/forms";

@Directive({
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() { }


}

export function validateEmail(c: FormControl) {
  var VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  var valid = VALID_EMAIL.test(c.value);

  return (!valid) ? {
        validateEmail: {
          valid: false
        }
      } : null;
}