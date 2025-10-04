import { Component, Input, HostBinding } from '@angular/core';

export type TagType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
export type TagSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'sa-tag',
  templateUrl: './sa-tag.component.html',
  styleUrl: './sa-tag.component.scss',
  host: {
    '[class.tag-inline]': 'true'
  }
})
export class SaTagComponent {
  // Propiedades con setters/getters para flexibilidad máxima
  private _text: string = '';
  private _type: TagType = 'primary';
  private _size: TagSize = 'medium';

  // Soporte para ngClass
  @Input() class: string = '';

  @Input()
  set text(value: string | any) {
    this._text = value || '';
  }
  get text(): string {
    return this._text;
  }

  @Input()
  set type(value: TagType | any) {
    this._type = value || 'primary';
  }
  get type(): TagType {
    return this._type;
  }

  @Input()
  set size(value: TagSize | any) {
    this._size = value || 'medium';
  }
  get size(): TagSize {
    return this._size;
  }

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  get tagClasses(): string {
    const classes = [
      'tag',
      `tag-${this.type}`,
      this.getSizeClass()
    ];
    return classes.filter(Boolean).join(' ');
  }

  private getSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'tag-sm';
      case 'medium':
        return 'tag-md';
      case 'large':
        return 'tag-lg';
      default:
        return 'tag-md';
    }
  }


}
