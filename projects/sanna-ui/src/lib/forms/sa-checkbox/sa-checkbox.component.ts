import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-checkbox',
  templateUrl: './sa-checkbox.component.html',
  styleUrls: ['./sa-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaCheckboxComponent),
      multi: true
    }
  ]
})
export class SaCheckboxComponent implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() size: CheckboxSize = 'md';
  @Input() status: CheckboxStatus = 'default';
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
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() indeterminate: boolean = false;
  @Input() bold: boolean = false;
  
  // Soporte para ngClass
  @Input() class: string = '';

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<Event>();
  @Output() focusin = new EventEmitter<FocusEvent>();
  @Output() focusout = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;
  private _generatedId: string;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  constructor() {
    this._generatedId = `sa-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  }

  get checkboxId(): string {
    return this.id || this._generatedId;
  }

  get checkboxClasses(): string {
    const sizeMap = {
      'sm': 'form-check-sm',
      'md': '', // Bootstrap default
      'lg': 'form-check-lg'
    };

    const baseClasses = ['form-check-input'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      // Note: Bootstrap doesn't have built-in size classes for checkboxes
      // We'll handle this in CSS
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
      'sm': 'form-check-label label-sm',
      'md': 'form-check-label label-md',
      'lg': 'form-check-label label-lg'
    };
    
    let classes = sizeMap[this.size] || 'form-check-label label-md';
    
    if (this.bold) {
      classes += ' label-bold';
    }
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel && !this.hideLabel) {
      classes += ' ghost-label';
    }
    
    return classes;
  }

  get shouldShowLabel(): boolean {
    // Si hideLabel está activo, nunca mostrar el label
    if (this.hideLabel) {
      return false;
    }
    // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
    return !!this.label || this.noLabel;
  }

  get containerClasses(): string {
    const sizeMap = {
      'sm': 'form-check-sm',
      'md': '', // Bootstrap default
      'lg': 'form-check-lg'
    };

    const baseClasses = ['form-check'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      baseClasses.push(sizeMap[this.size]);
    }

    return baseClasses.join(' ');
  }

  writeValue(value: any): void {
    this.checked = !!value;
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

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.onChange(this.checked);
    this.checkedChange.emit(this.checked);
    this.change.emit(event);
  }

  onCheckboxFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focusin.emit(event);
  }

  onCheckboxBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.focusout.emit(event);
  }
}
