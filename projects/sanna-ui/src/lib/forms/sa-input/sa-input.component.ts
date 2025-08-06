import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
export type InputStatus = 'default' | 'success' | 'warning' | 'error';

@Component({
  selector: 'sa-input',
  templateUrl: './sa-input.component.html',
  styleUrls: ['./sa-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaInputComponent),
      multi: true
    }
  ]
})
export class SaInputComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() size: InputSize = 'md';
  @Input() status: InputStatus = 'default';
  @Input() label: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() autocomplete: string = 'off';
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() minlength: number | null = null;
  @Input() maxlength: number | null = null;
  @Input() pattern: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  showPassword: boolean = false;
  isFocused: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  get inputClasses(): string {
    const sizeMap = {
      'sm': 'input-small',
      'md': 'input-medium',
      'lg': 'input-large'
    };

    return [
      'input',
      sizeMap[this.size],
      `input-${this.status}`,
      this.leftIcon ? 'has-left-icon' : '',
      this.rightIcon || this.type === 'password' ? 'has-right-icon' : '',
      this.disabled ? 'disabled' : '',
      this.readonly ? 'readonly' : '',
      this.isFocused ? 'focused' : ''
    ].filter(Boolean).join(' ');
  }

  get inputType(): string {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
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

  onModelChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onInputFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onInputBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}