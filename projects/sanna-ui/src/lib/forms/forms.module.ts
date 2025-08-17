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
import { SaDateComponent } from './sa-date/sa-date.component';
import { SaSwitchComponent } from './sa-switch/sa-switch.component';

@NgModule({
  declarations: [
    SaInputComponent,
    SaSelectComponent,
    SaTextareaComponent,
    SaCheckboxComponent,
    SaRadioComponent,
    SaDateComponent,
    SaSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SannaIconModule,
  ],
  exports: [
    SaInputComponent,
    SaSelectComponent,
    SaTextareaComponent,
    SaCheckboxComponent,
    SaRadioComponent,
    SaDateComponent,
    SaSwitchComponent,
  ]
})
export class SannaFormsModule { }

// Exportamos los componentes para que estén disponibles en toda la librería
export { SaInputComponent } from './sa-input/sa-input.component';
export { SaSelectComponent } from './sa-select/sa-select.component';
export { SaTextareaComponent } from './sa-textarea/sa-textarea.component';
export { SaCheckboxComponent } from './sa-checkbox/sa-checkbox.component';
export { SaRadioComponent } from './sa-radio/sa-radio.component';
export { SaDateComponent } from './sa-date/sa-date.component';
export { SaSwitchComponent } from './sa-switch/sa-switch.component';