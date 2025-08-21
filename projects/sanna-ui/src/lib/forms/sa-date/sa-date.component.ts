import { Component, Input, Output, EventEmitter, forwardRef, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type DateSize = 'sm' | 'md' | 'lg';
export type DateStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-date',
  templateUrl: './sa-date.component.html',
  styleUrls: ['./sa-date.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaDateComponent),
      multi: true
    }
  ]
})
export class SaDateComponent implements ControlValueAccessor, OnInit {
  @Input() value: string = '';
  @Input() size: DateSize = 'md';
  @Input() status: DateStatus = 'default';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() min: string = '';
  @Input() max: string = '';
  @Input() blockFutureDates: boolean = false;
  @Input() showCurrentDate: boolean = false;

  @Output() valueChange = new EventEmitter<string>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  @ViewChild('dateInput', { static: false }) dateInput!: ElementRef<HTMLInputElement>;

  isFocused: boolean = false;
  private _generatedId: string;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor() {
    this._generatedId = `sa-date-${Math.random().toString(36).substr(2, 9)}`;
    
    // Si showCurrentDate está habilitado, establecer fecha actual
    if (this.showCurrentDate && !this.value) {
      this.value = this.getCurrentDateISO();
    }
  }

  ngOnInit() {
    // Configurar límites de fecha
    if (this.blockFutureDates && !this.max) {
      this.max = this.getCurrentDateISO();
    }
    
    // Si showCurrentDate está habilitado y no hay valor, establecer fecha actual
    if (this.showCurrentDate && !this.value) {
      this.value = this.getCurrentDateISO();
      this.onChange(this.value);
    }
  }

  get dateId(): string {
    return this.id || this._generatedId;
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

  private getCurrentDateISO(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  writeValue(value: any): void {
    this.value = value || '';
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

  openCalendar(event: MouseEvent) {
    // Prevenir propagación del evento
    event.preventDefault();
    event.stopPropagation();
    
    // Si el input no está deshabilitado ni en solo lectura
    if (!this.disabled && !this.readonly) {
      // Usar ViewChild para acceder al input
      const inputElement = this.dateInput?.nativeElement;
      
      if (inputElement) {
        // Enfocar el input primero
        inputElement.focus();
        
        // Intentar abrir el calendario programáticamente
        try {
          inputElement.showPicker();
        } catch (error) {
          // Fallback: simular click en el input
          inputElement.click();
        }
      }
    }
  }
}
