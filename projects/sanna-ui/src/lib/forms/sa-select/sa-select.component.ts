import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectStatus = 'default' | 'success' | 'error';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'sa-select',
  templateUrl: './sa-select.component.html',
  styleUrls: ['./sa-select.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaSelectComponent),
      multi: true
    }
  ]
})
export class SaSelectComponent implements ControlValueAccessor {
  @Input() value: string | number = '';
  @Input() options: SelectOption[] = [];
  @Input() size: SelectSize = 'md';
  @Input() status: SelectStatus = 'default';
  @Input() label: string = '';
  @Input() noLabel: boolean = false;
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '--Seleccione--';
  @Input() showPlaceholder: boolean = true;

  @Output() valueChange = new EventEmitter<string | number>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  get selectClasses(): string {
    const sizeMap = {
      'sm': 'form-select-sm',
      'md': '', // Bootstrap default
      'lg': 'form-select-lg'
    };

    const baseClasses = ['form-select'];
    
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
    if (this.noLabel) {
      return `${baseClasses} ghost-label`;
    }
    
    return baseClasses;
  }

  get shouldShowLabel(): boolean {
    return !!this.label || this.noLabel;
  }

  get hasValidSelection(): boolean {
    if (!this.showPlaceholder) return true;
    return this.value !== '' && this.value !== null && this.value !== undefined;
  }

  writeValue(value: any): void {
    this.value = value ?? '';
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

  onModelChange(value: string | number) {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onSelectFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onSelectBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }
}