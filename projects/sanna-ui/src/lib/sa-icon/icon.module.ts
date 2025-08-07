import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SannaUiFontAwesomeModule } from '../fontawesome.module';
import { SaIconComponent } from './sa-icon.component';

@NgModule({
  declarations: [
    SaIconComponent,
  ],
  imports: [
    CommonModule,
    SannaUiFontAwesomeModule,
  ],
  exports: [
    SaIconComponent,
  ]
})
export class SannaIconModule { }

// Exportamos el componente para que esté disponible en toda la librería
export { SaIconComponent } from './sa-icon.component';
