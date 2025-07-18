import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SannaUiComponent } from './sanna-ui.component';
import { ButtonComponent } from './button/button.component';

// Importar configuración de FontAwesome
import './fontawesome.config';
import { IconComponent } from './icon/icon.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    SannaUiComponent,
    ButtonComponent,
    IconComponent,
    MessageboxComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SannaUiComponent,
    ButtonComponent,
    IconComponent,
    MessageboxComponent,
    InputComponent
  ]
})
export class SannaUiModule { }
