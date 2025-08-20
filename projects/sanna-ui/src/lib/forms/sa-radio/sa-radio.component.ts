import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-radio',
  templateUrl: './sa-radio.component.html',
  styleUrls: ['./sa-radio.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaRadioComponent),
      multi: true
    }
  ]
})
export class SaRadioComponent implements ControlValueAccessor {
  @Input() value: any = '';
  @Input() size: RadioSize = 'md';
  @Input() status: RadioStatus = 'default';
  @Input() label: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';

  @Output() valueChange = new EventEmitter<any>();
  @Output() change = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  selectedValue: any = null;
  isFocused: boolean = false;
  private _generatedId: string;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor() {
    this._generatedId = `sa-radio-${Math.random().toString(36).substr(2, 9)}`;
  }

  get radioId(): string {
    return this.id || this._generatedId;
  }

  get isChecked(): boolean {
    return this.selectedValue === this.value;
  }

  get radioClasses(): string {
    const sizeMap = {
      'sm': 'form-check-sm',
      'md': '', // Bootstrap default
      'lg': 'form-check-lg'
    };

    const baseClasses = ['form-check-input'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      // Note: Bootstrap doesn't have built-in size classes for radios
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
    
    return sizeMap[this.size] || 'form-check-label label-md';
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
    this.selectedValue = value;
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

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedValue = this.value;
      this.onChange(this.selectedValue);
      this.valueChange.emit(this.selectedValue);
      this.change.emit(event);
    }
  }

  onRadioFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onRadioBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }
}
