import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'default' | 'success' | 'warning' | 'error';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'medium';
  @Input() variant: InputVariant = 'default';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() pattern?: string;
  @Input() autocomplete?: string;
  @Input() label?: string;
  @Input() helperText?: string;
  @Input() errorText?: string;
  @Input() showPasswordToggle: boolean = false;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() input = new EventEmitter<Event>();

  value: string = '';
  showPassword: boolean = false;
  isFocused: boolean = false;

  // ControlValueAccessor implementation
  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Event handlers
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.input.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.onTouched();
    this.focus.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Computed properties
  get inputType(): string {
    if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
      return 'text';
    }
    return this.type;
  }

  get inputClasses(): string {
    const classes = [
      'input',
      `input-${this.size}`,
      `input-${this.variant}`,
      this.isFocused ? 'focused' : '',
      this.disabled ? 'disabled' : '',
      this.readonly ? 'readonly' : '',
      this.errorText ? 'error' : '',
      this.leftIcon ? 'has-left-icon' : '',
      this.rightIcon ? 'has-right-icon' : '',
      this.showPasswordToggle ? 'has-password-toggle' : ''
    ];
    return classes.filter(Boolean).join(' ');
  }

  get hasError(): boolean {
    return !!this.errorText;
  }

  get showPasswordToggleButton(): boolean {
    return this.type === 'password' && this.showPasswordToggle;
  }
}
