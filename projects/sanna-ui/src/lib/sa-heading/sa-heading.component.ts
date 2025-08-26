import { Component, Input, ViewEncapsulation } from '@angular/core';

type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type HeadingWeight = 'bold' | 'regular' | 'light' | 'semibold';
type HeadingMargin = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

@Component({
  selector: 'sa-heading',
  templateUrl: './sa-heading.component.html',
  styleUrl: './sa-heading.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaHeadingComponent {
  // Propiedad para el texto del heading - uso simple sin comillas anidadas
  @Input() text: string = '';
  
  // Propiedades con setters/getters para flexibilidad máxima
  private _size: HeadingSize = 'md';
  private _weight: HeadingWeight = 'bold';
  private _mt?: HeadingMargin;
  private _mb?: HeadingMargin;
  private _mr?: HeadingMargin;
  private _ml?: HeadingMargin;

  @Input()
  set size(value: HeadingSize | any) {
    this._size = value || 'md';
  }
  get size(): HeadingSize {
    return this._size;
  }

  @Input()
  set weight(value: HeadingWeight | any) {
    this._weight = value || 'bold';
  }
  get weight(): HeadingWeight {
    return this._weight;
  }

  @Input()
  set mt(value: HeadingMargin | any) {
    this._mt = value;
  }
  get mt(): HeadingMargin | undefined {
    return this._mt;
  }

  @Input()
  set mb(value: HeadingMargin | any) {
    this._mb = value;
  }
  get mb(): HeadingMargin | undefined {
    return this._mb;
  }

  @Input()
  set mr(value: HeadingMargin | any) {
    this._mr = value;
  }
  get mr(): HeadingMargin | undefined {
    return this._mr;
  }

  @Input()
  set ml(value: HeadingMargin | any) {
    this._ml = value;
  }
  get ml(): HeadingMargin | undefined {
    return this._ml;
  }

  get headingClasses(): string {
    const sizeClasses = {
      'xs': 'fs-6',
      'sm': 'fs-5', 
      'md': 'fs-4',
      'lg': 'fs-3',
      'xl': 'fs-2',
      '2xl': 'fs-1',
      '3xl': 'display-6',
      '4xl': 'display-5',
      '5xl': 'display-4'
    };
    const weightClasses = {
      'bold': 'fw-bold',
      'regular': 'fw-normal',
      'light': 'fw-light',
      'semibold': 'fw-semibold'
    };
    const marginTopClass = this.mt ? `mt-${this.mt}` : '';
    const marginBottomClass = this.mb ? `mb-${this.mb}` : '';
    const marginRightClass = this.mr ? `me-${this.mr}` : '';
    const marginLeftClass = this.ml ? `ms-${this.ml}` : '';
    
    return `${sizeClasses[this.size] || 'fs-4'} ${weightClasses[this.weight] || 'fw-bold'} ${marginTopClass} ${marginBottomClass} ${marginRightClass} ${marginLeftClass}`.trim();
  }
}
