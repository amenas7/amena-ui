import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-checkbox',
  templateUrl: './sa-checkbox.component.html',
  styleUrls: ['./sa-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaCheckboxComponent),
      multi: true
    }
  ]
})
export class SaCheckboxComponent implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() size: CheckboxSize = 'md';
  @Input() status: CheckboxStatus = 'default';
  @Input() label: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() indeterminate: boolean = false;
  @Input() bold: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;
  private _generatedId: string;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor() {
    this._generatedId = `sa-checkbox-${Math.random().toString(36).substr(2, 9)}`;
  }

  get checkboxId(): string {
    return this.id || this._generatedId;
  }

  get checkboxClasses(): string {
    const sizeMap = {
      'sm': 'form-check-sm',
      'md': '', // Bootstrap default
      'lg': 'form-check-lg'
    };

    const baseClasses = ['form-check-input'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      // Note: Bootstrap doesn't have built-in size classes for checkboxes
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
    
    let classes = sizeMap[this.size] || 'form-check-label label-md';
    
    if (this.bold) {
      classes += ' label-bold';
    }
    
    return classes;
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
    this.checked = !!value;
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

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.onChange(this.checked);
    this.checkedChange.emit(this.checked);
    this.change.emit(event);
  }

  onCheckboxFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onCheckboxBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }
}
