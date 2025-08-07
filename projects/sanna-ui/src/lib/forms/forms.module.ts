import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de formularios
import { SaInputComponent } from './sa-input/sa-input.component';
import { SaSelectComponent } from './sa-select/sa-select.component';

@NgModule({
  declarations: [
    SaInputComponent,
    SaSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SaInputComponent,
    SaSelectComponent,
  ]
})
export class SannaFormsModule { }

// Exportamos los componentes para que estén disponibles en toda la librería
export { SaInputComponent } from './sa-input/sa-input.component';
export { SaSelectComponent } from './sa-select/sa-select.component';