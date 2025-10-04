import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sa-text',
  templateUrl: './sa-text.component.html',
  styleUrl: './sa-text.component.scss'
})
export class SaTextComponent {
  // Soporte para ngClass
  @Input() class: string = '';

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }
}
