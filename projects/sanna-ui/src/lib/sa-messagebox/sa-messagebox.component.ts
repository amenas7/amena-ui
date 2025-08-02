import { Component, Input, Attribute, Optional } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sa-messagebox',
  templateUrl: './sa-messagebox.component.html',
  styleUrl: './sa-messagebox.component.scss'
})
export class SaMessageboxComponent {
  // Property que DEBE usar property binding: [message]="'texto'"
  @Input() message: string = '';
  
  // Propiedades con setters/getters para flexibilidad máxima
  private _type: 'success' | 'warning' | 'error' | 'info' = 'success';
  private _iconName?: string;
  private _iconSize?: 'sm' | 'md' | 'lg';
  private _iconColor?: string;

  @Input() 
  set type(value: 'success' | 'warning' | 'error' | 'info' | any) {
    this._type = value || 'success';
  }
  get type(): 'success' | 'warning' | 'error' | 'info' {
    return this._type;
  }

  @Input()
  set iconName(value: string | any) {
    this._iconName = value;
  }
  get iconName(): string | undefined {
    return this._iconName;
  }

  @Input()
  set iconSize(value: 'sm' | 'md' | 'lg' | any) {
    this._iconSize = value;
  }
  get iconSize(): 'sm' | 'md' | 'lg' | undefined {
    return this._iconSize;
  }

  @Input()
  set iconColor(value: string | any) {
    this._iconColor = value;
  }
  get iconColor(): string | undefined {
    return this._iconColor;
  }

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedMessage(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.message);
  }

  get hasIcon(): boolean {
    return !!this.iconName;
  }
}
