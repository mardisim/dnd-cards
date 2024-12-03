import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorDirective } from './form-error.directive';
import { FormErrorRootDirective } from './form-error-root.directive';

@NgModule({
  declarations: [FormErrorDirective, FormErrorRootDirective],
  imports: [CommonModule],
  exports: [FormErrorDirective, FormErrorRootDirective],
})
export class FormErrorModule {}
