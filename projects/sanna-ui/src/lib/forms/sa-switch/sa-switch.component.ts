import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-switch',
  templateUrl: './sa-switch.component.html',
  styleUrls: ['./sa-switch.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaSwitchComponent),
      multi: true
    }
  ]
})
export class SaSwitchComponent implements ControlValueAccessor {
  @Input() value: boolean = false;
  @Input() size: SwitchSize = 'md';
  @Input() status: SwitchStatus = 'default';
  @Input() label: string = '';
  
  private _noLabel: boolean = false;
  @Input()
  set noLabel(value: boolean | any) {
    this._noLabel = value === true || value === 'true';
  }
  get noLabel(): boolean {
    return this._noLabel;
  }
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';

  @Output() valueChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<boolean>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  private _generatedId: string;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor() {
    this._generatedId = `sa-switch-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Generar ID único si no se proporciona uno
  get uniqueId(): string {
    return this.id || this._generatedId;
  }

  get switchClasses(): string {
    const baseClasses = ['form-check', 'form-switch'];
    
    // Tamaños personalizados
    if (this.size === 'sm') {
      baseClasses.push('form-switch-sm');
    } else if (this.size === 'md') {
      baseClasses.push('form-switch-md');
    } else if (this.size === 'lg') {
      baseClasses.push('form-switch-lg');
    }
    
    // Estados de validación
    if (this.status === 'error' || this.errorText) {
      baseClasses.push('is-invalid');
    } else if (this.status === 'success') {
      baseClasses.push('is-valid');
    }

    return baseClasses.join(' ');
  }

  get inputClasses(): string {
    const baseClasses = ['form-check-input'];
    
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
    
    const baseClasses = [sizeMap[this.size] || 'form-check-label label-md'];
    
    if (this.disabled) {
      baseClasses.push('text-muted');
    }
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel) {
      baseClasses.push('ghost-label');
    }

    return baseClasses.join(' ');
  }

  get shouldShowLabel(): boolean {
    return !!this.label || this.noLabel;
  }

  writeValue(value: any): void {
    this.value = !!value;
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

  onModelChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.checked;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.change.emit(this.value);
  }

  onInputFocus(event: FocusEvent) {
    this.focus.emit(event);
  }

  onInputBlur(event: FocusEvent) {
    this.onTouched();
    this.blur.emit(event);
  }

  toggleSwitch() {
    if (!this.disabled) {
      this.value = !this.value;
      this.onChange(this.value);
      this.valueChange.emit(this.value);
      this.change.emit(this.value);
    }
  }

  onLabelClick(event: Event) {
    // Prevenir el comportamiento por defecto del label
    event.preventDefault();
    
    // Solo cambiar el estado si no está deshabilitado
    if (!this.disabled) {
      this.value = !this.value;
      this.onChange(this.value);
      this.valueChange.emit(this.value);
      this.change.emit(this.value);
      
      // Marcar como touched para validaciones
      this.onTouched();
    }
  }
}
