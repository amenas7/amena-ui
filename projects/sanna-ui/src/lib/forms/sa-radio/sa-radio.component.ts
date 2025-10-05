import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SaRadioGroupService } from './sa-radio-group.service';
import { Subscription } from 'rxjs';

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
export class SaRadioComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() value: any = '';
  @Input() size: RadioSize = 'md';
  @Input() status: RadioStatus = 'default';
  @Input() label: string = '';
  
  private _noLabel: boolean = false;
  @Input()
  set noLabel(value: boolean | any) {
    this._noLabel = value === true || value === 'true';
  }
  get noLabel(): boolean {
    return this._noLabel;
  }

  private _hideLabel: boolean = false;
  @Input()
  set hideLabel(value: boolean | any) {
    this._hideLabel = value === true || value === 'true';
  }
  get hideLabel(): boolean {
    return this._hideLabel;
  }
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  
  // Soporte para ngClass
  @Input() class: string = '';

  @Output() valueChange = new EventEmitter<any>();
  @Output() change = new EventEmitter<Event>();
  @Output() focusin = new EventEmitter<FocusEvent>();
  @Output() focusout = new EventEmitter<FocusEvent>();

  selectedValue: any = null;
  isFocused: boolean = false;
  private _generatedId: string;
  private subscription: Subscription | null = null;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  constructor(
    private radioGroupService: SaRadioGroupService,
    private cdr: ChangeDetectorRef
  ) {
    this._generatedId = `sa-radio-${Math.random().toString(36).substr(2, 9)}`;
  }

  ngOnInit(): void {
    // Suscribirse a cambios de otros radio buttons del mismo grupo
    this.subscription = this.radioGroupService.change$.subscribe(change => {
      // Si es del mismo grupo, actualizar el valor seleccionado
      if (change.name === this.name) {
        this.selectedValue = change.value;
        // Forzar detección de cambios para actualizar el binding [checked]
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
    
    let classes = sizeMap[this.size] || 'form-check-label label-md';
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel && !this.hideLabel) {
      classes += ' ghost-label';
    }
    
    return classes;
  }

  get shouldShowLabel(): boolean {
    // Si hideLabel está activo, nunca mostrar el label
    if (this.hideLabel) {
      return false;
    }
    // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
    return !!this.label || this.noLabel;
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
    // Angular Forms llamará a writeValue en TODOS los radio buttons del grupo
    // con el mismo valor, así que solo necesitamos guardarlo
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

  onRadioClick(event: Event) {
    if (this.disabled || this.readonly) {
      event.preventDefault();
      return;
    }

    // Actualizar el valor seleccionado
    this.selectedValue = this.value;

    // Notificar a Angular Forms
    this.onChange(this.value);

    // Emitir eventos
    this.valueChange.emit(this.value);
    this.change.emit(event);

    // Notificar a otros radio buttons del mismo grupo
    if (this.name) {
      this.radioGroupService.notifyChange(this.name, this.value);
    }
  }

  onRadioFocus(event: FocusEvent) {
    this.isFocused = true;
    event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
    this.focusin.emit(event);
  }

  onRadioBlur(event: FocusEvent) {
    this.isFocused = false;
    event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
    this.onTouched();
    this.focusout.emit(event);
  }
}
