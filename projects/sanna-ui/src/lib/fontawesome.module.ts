import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import './fontawesome.config';

/**
 * Módulo que configura automáticamente Font Awesome con todos los iconos 
 * necesarios para los componentes de Sanna UI.
 * 
 * Este módulo se auto-configura al importarse, por lo que no es necesario
 * que los proyectos que usen sanna-ui instalen o configuren Font Awesome manualmente.
 */
@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class SannaUiFontAwesomeModule { 
  constructor() {
  }
}