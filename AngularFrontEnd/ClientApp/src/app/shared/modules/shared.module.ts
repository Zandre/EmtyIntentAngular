import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SpinnerComponent} from '../../spinner/spinner.component';
import { FocusDirective } from 'src/app/directives/focus.directive';


@NgModule({
  imports:      [CommonModule],
  declarations: [
    FocusDirective,
    SpinnerComponent],
  exports:      [
    FocusDirective,
    SpinnerComponent],
  providers:    []
})
export class SharedModule { }
