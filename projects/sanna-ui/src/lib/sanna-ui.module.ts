import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SannaUiComponent } from './sanna-ui.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    SannaUiComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SannaUiComponent,
    ButtonComponent
  ]
})
export class SannaUiModule { }
