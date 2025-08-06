import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaUiComponent } from './sanna-ui.component';
import { SannaUiFontAwesomeModule } from './fontawesome.module';

// Componentes
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaIconComponent } from './sa-icon/sa-icon.component';
import { SaMessageboxComponent } from './sa-messagebox/sa-messagebox.component';
import { SaInputComponent } from './forms/sa-input/sa-input.component';
import { SaHeadingComponent } from './sa-heading/sa-heading.component';
import { SaTextComponent } from './sa-text/sa-text.component';
import { SaTableComponent } from './sa-table/sa-table.component';
import { SaColumnDefDirective } from './sa-table/sa-column-def.directive';


@NgModule({
  declarations: [
    SannaUiComponent,
    SaButtonComponent,
    SaIconComponent,
    SaMessageboxComponent,
    SaInputComponent,
    SaHeadingComponent,
    SaTextComponent,
    SaTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SannaUiFontAwesomeModule,
    SaColumnDefDirective
  ],
  exports: [
    SannaUiComponent,
    SaButtonComponent,
    SaIconComponent,
    SaMessageboxComponent,
    SaInputComponent,
    SaHeadingComponent,
    SaTextComponent,
    SaTableComponent,
    SaColumnDefDirective,
    SannaUiFontAwesomeModule
  ]
})
export class SannaUiModule { }
