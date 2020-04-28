import { Injectable } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  setDefaultValidationMessages = (): void => {
      ReactiveFormConfig.set({
          baseConfig: {

          },
          // See https://github.com/rxweb/rxweb/tree/master/packages/reactive-form-validators#form-validation for all available validators
          validationMessage: {
              required: 'Required',
              email: 'Valid email is required',
              minLength: 'Allowed minimum length is {{1}}',
              maxLength: 'Allowed maximum length is {{1}}',
              digit: 'Numeric digits are required',
              range: 'Number between {{1}} - {{2}} is required',
              password: {
                  minLength: "Minimum length of 8 characters is required", // bug that {{1}} does not work here to dynamically adjust according to rule
                  digit    : 'At least one digit is required.',
                  lowerCase: 'At least one lower case character is required.',
                  upperCase: 'At least one upper case character is required.'
              },
            //   passwordMinLengthKey: 'Minimum length of 8 characters is required',
            //   passwordDigitKey: 'At least one digit is required',
            //   passwordLowerCaseKey: 'At least one lower case character is required',
            //   passwordUpperCaseKey: 'At least one upper case character is required'
            }
        });

  }

}
