import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-textarea',
  templateUrl: './sa-textarea.component.html',
  styleUrls: ['./sa-textarea.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaTextareaComponent),
      multi: true
    }
  ]
})
export class SaTextareaComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() size: TextareaSize = 'md';
  @Input() status: TextareaStatus = 'default';
  @Input() label: string = '';
  
  private _noLabel: boolean = false;
  @Input()
  set noLabel(value: boolean | any) {
    this._noLabel = value === true || value === 'true';
  }
  get noLabel(): boolean {
    return this._noLabel;
  }

  private _hideLabel: boolean = false;
  @Input()
  set hideLabel(value: boolean | any) {
    this._hideLabel = value === true || value === 'true';
  }
  get hideLabel(): boolean {
    return this._hideLabel;
  }
  @Input() placeholder: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() rows: number = 3;
  @Input() cols: number = 50;
  @Input() minlength: number | null = null;
  @Input() maxlength: number | null = null;
  @Input() resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'vertical';
  @Input() height: number | null = null; // Altura fija en píxeles
  
  // Soporte para ngClass
  @Input() class: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() change = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  get textareaClasses(): string {
    const sizeMap = {
      'sm': 'form-control-sm',
      'md': 'form-control-md',
      'lg': 'form-control-lg'
    };

    const baseClasses = ['form-control'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      baseClasses.push(sizeMap[this.size]);
    }
    
    if (this.status === 'error' || this.errorText) {
      baseClasses.push('is-invalid');
    } else if (this.status === 'success') {
      baseClasses.push('is-valid');
    }

    return baseClasses.join(' ');
  }

  get labelClasses(): string {
    const sizeMap = {
      'sm': 'form-label label-sm',
      'md': 'form-label label-md',
      'lg': 'form-label label-lg'
    };
    
    const baseClasses = sizeMap[this.size] || 'form-label label-md';
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel && !this.hideLabel) {
      return `${baseClasses} ghost-label`;
    }
    
    return baseClasses;
  }

  get shouldShowLabel(): boolean {
    // Si hideLabel está activo, nunca mostrar el label
    if (this.hideLabel) {
      return false;
    }
    // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
    return !!this.label || this.noLabel;
  }

  get textareaStyles(): any {
    const styles: any = {};
    
    if (this.height !== null) {
      // Cuando se especifica altura, usar altura fija y deshabilitar resize
      styles.height = `${this.height}px`;
      styles.resize = 'none';
      styles.overflowY = 'auto'; // Habilitar scroll vertical
    } else {
      // Comportamiento normal cuando no hay altura especificada
      styles.resize = this.resize;
    }
    
    return styles;
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onModelChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onTextareaFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onTextareaBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  onTextareaChange(event: Event) {
    this.change.emit(event);
  }
}
