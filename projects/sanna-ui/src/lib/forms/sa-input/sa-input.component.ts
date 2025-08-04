import { Component, Input, Output, EventEmitter, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'default' | 'success' | 'warning' | 'error';

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
export class SaInputComponent implements ControlValueAccessor, OnChanges {
  /** Valor del input (ngModel y reactivo) */
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  /** Placeholder del input */
  @Input() placeholder: string = '';
  /** Tipo de input */
  @Input() type: InputType = 'text';
  /** Tamaño visual */
  @Input() size: InputSize = 'medium';
  /** Variante visual */
  @Input() variant: InputVariant = 'default';
  /** Deshabilitado */
  @Input() disabled: boolean = false;
  /** Solo lectura */
  @Input() readonly: boolean = false;
  /** Requerido */
  @Input() required: boolean = false;
  /** Nombre del input */
  @Input() name: string = '';
  /** ID del input */
  @Input() id: string = '';
  /** Máximo de caracteres */
  @Input() maxlength?: number;
  /** Mínimo de caracteres */
  @Input() minlength?: number;
  /** Patrón de validación */
  @Input() pattern?: string;

  /** Etiqueta */
  @Input() label?: string;
  /** Texto de ayuda */
  @Input() helperText?: string;
  /** Texto de error */
  @Input() errorText?: string;
  /** Mostrar toggle de contraseña */
  @Input() showPasswordToggle: boolean = false;
  /** Icono izquierdo (clase CSS) */
  @Input() leftIcon?: string;
  /** Icono derecho (clase CSS) */
  @Input() rightIcon?: string;

  showPassword: boolean = false;
  isFocused: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    // Forzar ciclo de detección de cambios para Storybook
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

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

  onFocus(event: FocusEvent): void {
    this.isFocused = true;
  }

  onBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.onTouched();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  get inputType(): string {
    if (this.type === 'password' && this.showPasswordToggle && this.showPassword) {
      return 'text';
    }
    return this.type;
  }

  get inputClasses(): any {
    return {
      'input': true,
      [`input-${this.size}`]: !!this.size,
      [`input-${this.variant}`]: !!this.variant,
      'focused': this.isFocused,
      'disabled': this.disabled,
      'readonly': this.readonly,
      'error': !!this.errorText,
      'has-left-icon': !!this.leftIcon,
      'has-right-icon': !!this.rightIcon,
      'has-password-toggle': this.showPasswordToggle
    };
  }

  get hasError(): boolean {
    return !!this.errorText;
  }

  get showPasswordToggleButton(): boolean {
    return this.type === 'password' && this.showPasswordToggle;
  }
}