import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SannaUiComponent } from './sanna-ui.component';
import { SannaUiFontAwesomeModule } from './fontawesome.module';

// Componentes
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaMessageboxComponent } from './sa-messagebox/sa-messagebox.component';
import { SaHeadingComponent } from './sa-heading/sa-heading.component';
import { SaTextComponent } from './sa-text/sa-text.component';
import { SaTableComponent } from './sa-table/sa-table.component';
import { SaColumnDefDirective } from './sa-table/sa-column-def.directive';
import { SaTagComponent } from './sa-tag/sa-tag.component';
import { SaLegendComponent } from './sa-legend/sa-legend.component';

// Módulos
import { SannaFormsModule } from './forms/forms.module';
import { SannaIconModule } from './sa-icon/icon.module';

@NgModule({
  declarations: [
    SannaUiComponent,
    SaButtonComponent,
    SaMessageboxComponent,
    SaHeadingComponent,
    SaTextComponent,
    SaTableComponent,
    SaTagComponent,
    SaLegendComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SannaUiFontAwesomeModule,
    SannaFormsModule,
    SannaIconModule,
    SaColumnDefDirective
  ],
  exports: [
    SannaUiComponent,
    SaButtonComponent,
    SaMessageboxComponent,
    SaHeadingComponent,
    SaTextComponent,
    SaTableComponent,
    SaTagComponent,
    SaLegendComponent,
    SaColumnDefDirective,
    SannaUiFontAwesomeModule,
    SannaFormsModule,
    SannaIconModule
  ]
})
export class SannaUiModule { }