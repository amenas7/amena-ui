import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SannaUiComponent } from './sanna-ui.component';
import './fontawesome.config';

// Componentes
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaIconComponent } from './sa-icon/sa-icon.component';
import { SaMessageboxComponent } from './sa-messagebox/sa-messagebox.component';
import { SaInputComponent } from './forms/sa-input/sa-input.component';
import { SaHeadingComponent } from './sa-heading/sa-heading.component';
import { SaTextComponent } from './sa-text/sa-text.component';


@NgModule({
  declarations: [
    SannaUiComponent,
    SaButtonComponent,
    SaIconComponent,
    SaMessageboxComponent,
    SaInputComponent,
    SaHeadingComponent,
    SaTextComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SannaUiComponent,
    SaButtonComponent,
    SaIconComponent,
    SaMessageboxComponent,
    SaInputComponent,
    SaHeadingComponent
  ]
})
export class SannaUiModule { }
