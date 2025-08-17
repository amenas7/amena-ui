import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-switch',
  templateUrl: './sa-switch.component.html',
  styleUrls: ['./sa-switch.component.scss'],
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
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';

  // Generar ID único si no se proporciona uno
  get uniqueId(): string {
    return this.id || `sa-switch-${Math.random().toString(36).substr(2, 9)}`;
  }

  @Output() valueChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<boolean>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  private onChange = (_: any) => {};
  private onTouched = () => {};

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
    const baseClasses = ['form-check-label'];
    
    if (this.disabled) {
      baseClasses.push('text-muted');
    }

    return baseClasses.join(' ');
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
}
