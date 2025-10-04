import { Component, Input, HostBinding } from '@angular/core';
import { TooltipPosition } from '../types/tooltip.types';

@Component({
  selector: 'sa-legend',
  templateUrl: './sa-legend.component.html',
  styleUrl: './sa-legend.component.scss',
  host: {
    'style': 'display: inline-block; vertical-align: middle;'
  }
})
export class SaLegendComponent {
  // Propiedades privadas
  private _color: string = '#cccccc';
  private _tooltip?: string;
  private _tooltipPosition: TooltipPosition = 'top';

  // Soporte para ngClass
  @Input() class: string = '';

  @Input()
  set color(value: string | any) {
    this._color = value || '#cccccc';
  }
  get color(): string {
    return this._color;
  }

  @Input()
  set tooltip(value: string | any) {
    this._tooltip = value;
  }
  get tooltip(): string | undefined {
    return this._tooltip;
  }

  @Input()
  set tooltipPosition(value: TooltipPosition | any) {
    this._tooltipPosition = value || 'top';
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  // Determinar si el tooltip necesita múltiples líneas
  get isLongTooltip(): boolean {
    if (!this.tooltip) return false;
    // Considerar texto largo si tiene más de 60 caracteres o contiene saltos de línea
    return this.tooltip.length > 60 || this.tooltip.includes('\n');
  }
}
