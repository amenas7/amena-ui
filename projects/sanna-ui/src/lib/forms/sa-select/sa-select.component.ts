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
  
  private _required: boolean = false;
  @Input()
  set required(value: boolean | any) {
    this._required = value === true || value === 'true';
  }
  get required(): boolean {
    return this._required;
  }
  
  private _readonly: boolean = false;
  @Input()
  set readonly(value: boolean | any) {
    this._readonly = value === true || value === 'true';
  }
  get readonly(): boolean {
    return this._readonly;
  }
  
  private _disabled: boolean = false;
  @Input()
  set disabled(value: boolean | any) {
    this._disabled = value === true || value === 'true';
  }
  get disabled(): boolean {
    return this._disabled;
  }
  
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '--Seleccione--';
  
  private _showPlaceholder: boolean = true;
  @Input()
  set showPlaceholder(value: boolean | any) {
    this._showPlaceholder = value === true || value === 'true';
  }
  get showPlaceholder(): boolean {
    return this._showPlaceholder;
  }

  @Output() valueChange = new EventEmitter<string | number>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  get selectClasses(): string {
    const sizeMap = {
      'sm': 'form-select-sm',
      'md': 'form-select-md',
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
    this._disabled = isDisabled;
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