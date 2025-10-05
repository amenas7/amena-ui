import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaIconModule } from '../sa-icon/icon.module';

// Componentes de formularios
import { SaInputComponent } from './sa-input/sa-input.component';
import { SaSelectComponent } from './sa-select/sa-select.component';
import { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
import { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
import { SaRadioComponent } from './sa-radio/sa-radio.component';
import { SaRadioGroupComponent } from './sa-radio-group/sa-radio-group.component';
import { SaCalendarComponent } from './sa-calendar/sa-calendar.component';
import { SaSwitchComponent } from './sa-switch/sa-switch.component';

// Directivas de validación
import { ValidatorsModule } from './validators/validators.module';

@NgModule({
  declarations: [
    SaInputComponent,
    SaSelectComponent,
    SaTextareaComponent,
    SaCheckboxComponent,
    SaRadioComponent,
    SaRadioGroupComponent,
    SaCalendarComponent,
    SaSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SannaIconModule,
    ValidatorsModule,
  ],
  exports: [
    SaInputComponent,
    SaSelectComponent,
    SaTextareaComponent,
    SaCheckboxComponent,
    SaRadioComponent,
    SaRadioGroupComponent,
    SaCalendarComponent,
    SaSwitchComponent,
    ValidatorsModule,
  ]
})
export class SannaFormsModule { }

// Exportamos los componentes para que estén disponibles en toda la librería
export { SaInputComponent } from './sa-input/sa-input.component';
export { SaSelectComponent } from './sa-select/sa-select.component';
export { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
export { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
export { SaRadioComponent } from './sa-radio/sa-radio.component';
export { SaRadioGroupComponent } from './sa-radio-group/sa-radio-group.component';
export { SaCalendarComponent } from './sa-calendar/sa-calendar.component';
export { SaSwitchComponent } from './sa-switch/sa-switch.component';

// Exportamos las directivas de validación
export { LettersOnlyDirective } from './validators/letters-only.directive';
export { NumbersOnlyDirective } from './validators/numbers-only.directive';
export { ValidatorsModule } from './validators/validators.module';