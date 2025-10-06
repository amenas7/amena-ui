import { Component, Input, forwardRef, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SaRadioComponent } from '../sa-radio/sa-radio.component';

export type RadioGroupSize = 'sm' | 'md' | 'lg';
export type RadioGroupStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-radio-group',
  templateUrl: './sa-radio-group.component.html',
  styleUrls: ['./sa-radio-group.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaRadioGroupComponent),
      multi: true
    }
  ]
})
export class SaRadioGroupComponent implements ControlValueAccessor, AfterContentInit, OnChanges {
  @Input() label: string = '';
  @Input() size: RadioGroupSize = 'md';
  @Input() status: RadioGroupStatus = 'default';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

  @ContentChildren(SaRadioComponent) radios!: QueryList<SaRadioComponent>;

  value: any = null;
  isTouched: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  ngAfterContentInit(): void {
    // Sincronizar propiedades del grupo con los radios hijos
    this.radios.forEach((radio) => {
      radio.name = this.name;
      radio.size = this.size;
      radio.status = this.status;
      radio.disabled = this.disabled;

      // Suscribirse a cambios de valor en cada radio
      radio.valueChange.subscribe((value: any) => {
        this.value = value;
        this.onChange(value);
        this.isTouched = true;
        this.onTouched();
      });
    });

    // Actualizar estado cuando cambian los radios
    this.radios.changes.subscribe(() => {
      this.updateRadiosProperties();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si hay radios inicializados, actualizar sus propiedades
    if (this.radios && this.radios.length > 0) {
      this.updateRadiosProperties();
    }
  }

  private updateRadiosProperties(): void {
    this.radios.forEach((radio) => {
      radio.name = this.name;
      radio.size = this.size;
      radio.status = this.status;
      radio.disabled = this.disabled;
    });
  }

  get labelClasses(): string {
    const sizeMap = {
      'sm': 'form-label label-sm',
      'md': 'form-label label-md',
      'lg': 'form-label label-lg'
    };

    return sizeMap[this.size] || 'form-label label-md';
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
    this.value = value;
    // Actualizar el valor seleccionado en los radios hijos usando selectedValue
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.selectedValue = value;
      });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.radios) {
      this.radios.forEach((radio) => {
        radio.disabled = isDisabled;
      });
    }
  }
}
