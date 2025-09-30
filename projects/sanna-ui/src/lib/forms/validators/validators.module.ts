import { NgModule } from '@angular/core';
import { LettersOnlyDirective } from './letters-only.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  imports: [
    LettersOnlyDirective,
    NumbersOnlyDirective
  ],
  exports: [
    LettersOnlyDirective,
    NumbersOnlyDirective
  ]
})
export class ValidatorsModule { }
