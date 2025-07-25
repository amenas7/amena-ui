import { Component, Input } from '@angular/core';

type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type HeadingWeight = 'bold' | 'regular' | 'light' | 'semibold';
type HeadingMargin = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

@Component({
  selector: 'sa-heading',
  templateUrl: './sa-heading.component.html',
  styleUrl: './sa-heading.component.scss'
})
export class SaHeadingComponent {
  @Input() children: string = '';
  @Input() size: HeadingSize = 'md';
  @Input() weight: HeadingWeight = 'bold';
  @Input() mt?: HeadingMargin;
  @Input() mb?: HeadingMargin;
  @Input() mr?: HeadingMargin;
  @Input() ml?: HeadingMargin;

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
