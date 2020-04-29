import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusDirective } from 'src/app/directives/focus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FocusDirective],
  exports: [FocusDirective],
  providers: []
})
export class SharedModule { }
