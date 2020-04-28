import { Component } from '@angular/core';

import { ValidationService } from './shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _validationService: ValidationService) {
    // Validation
    this._validationService.setDefaultValidationMessages();
  }
}
