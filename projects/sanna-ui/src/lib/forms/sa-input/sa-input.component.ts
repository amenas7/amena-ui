import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel';
export type InputStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-input',
  templateUrl: './sa-input.component.html',
  styleUrls: ['./sa-input.component.scss'],
  //encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaInputComponent),
      multi: true
    }
  ]
})
export class SaInputComponent implements ControlValueAccessor, OnInit {
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
  
  private static idCounter = 0;
  @Input() autocomplete: string = 'off';
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() minlength: number | null = null;
  @Input() maxlength: number | null = null;
  @Input() pattern: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  showPassword: boolean = false;
  isFocused: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    // Generar ID único si no se proporciona
    if (!this.id) {
      this.id = `sa-input-${++SaInputComponent.idCounter}`;
    }
  }

  get inputClasses(): string {
    const sizeMap = {
      'sm': 'form-control-sm',
      'md': '', // Bootstrap default
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
    
    return sizeMap[this.size] || 'form-label label-md';
  }

  get inputGroupClasses(): string {
    const hasIcons = this.leftIcon || this.rightIcon || this.type === 'password';
    
    if (hasIcons) {
      const sizeMap = {
        'sm': 'input-group-sm',
        'md': '', // Bootstrap default
        'lg': 'input-group-lg'
      };
      
      const classes = ['input-group'];
      if (sizeMap[this.size] && sizeMap[this.size] !== '') {
        classes.push(sizeMap[this.size]);
      }
      return classes.join(' ');
    }
    
    return '';
  }

  get inputType(): string {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  get inputStyles(): any {
    const styles: any = {};
    
    if (this.backgroundColor) {
      styles['background-color'] = this.backgroundColor;
    }
    
    if (this.textColor) {
      styles['color'] = this.textColor;
    }
    
    return styles;
  }

  get helperTextClasses(): string {
    const baseClasses = ['form-text'];
    
    const sizeMap = {
      'sm': 'helper-text-sm',
      'md': 'helper-text-md',
      'lg': 'helper-text-lg'
    };
    
    if (sizeMap[this.size]) {
      baseClasses.push(sizeMap[this.size]);
    }
    
    return baseClasses.join(' ');
  }

  get errorTextClasses(): string {
    const baseClasses = ['invalid-feedback', 'd-block'];
    
    const sizeMap = {
      'sm': 'error-text-sm',
      'md': 'error-text-md',
      'lg': 'error-text-lg'
    };
    
    if (sizeMap[this.size]) {
      baseClasses.push(sizeMap[this.size]);
    }
    
    return baseClasses.join(' ');
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