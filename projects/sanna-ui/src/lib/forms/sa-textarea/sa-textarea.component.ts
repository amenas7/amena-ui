import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type TextareaSize = 'sm' | 'md' | 'lg';
export type TextareaStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-textarea',
  templateUrl: './sa-textarea.component.html',
  styleUrls: ['./sa-textarea.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaTextareaComponent),
      multi: true
    }
  ]
})
export class SaTextareaComponent implements ControlValueAccessor, OnChanges {
  @Input() value: string = '';
  @Input() size: TextareaSize = 'md';
  @Input() status: TextareaStatus = 'default';
  @Input() label: string = '';

  constructor() {
    this.updateNumbersRegex();
    this.updateLettersRegex();
  }
  
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
  @Input() placeholder: string = '';
  @Input() helperText: string = '';
  @Input() errorText: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() rows: number = 3;
  @Input() cols: number = 50;
  @Input() minlength: number | null = null;
  @Input() maxlength: number | null = null;
  @Input() resize: 'none' | 'both' | 'horizontal' | 'vertical' = 'vertical';
  @Input() height: number | null = null; // Altura fija en píxeles

  // Soporte para ngClass
  @Input() class: string = '';

  // Validaciones integradas
  @Input() saNumbersOnly: boolean = false;
  @Input() allowDecimals: boolean = false;
  @Input() allowNegative: boolean = false;
  @Input() maxDecimals: number = 2;

  @Input() saLettersOnly: boolean = false;
  @Input() allowSpaces: boolean = true;
  @Input() allowAccents: boolean = true;

  @Output() valueChange = new EventEmitter<string>();
  @Output() change = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  isFocused: boolean = false;

  // Referencia al elemento textarea nativo
  @ViewChild('textareaElement', { static: true }) textareaElement!: ElementRef<HTMLTextAreaElement>;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  // Variables para validación de números
  private numbersRegex!: RegExp;
  private isProcessingNumbersInput = false;

  // Variables para validación de letras
  private lettersRegex!: RegExp;

  // HostBinding para soporte de ngClass
  @HostBinding('class')
  get hostClasses(): string {
    return this.class || '';
  }

  get textareaClasses(): string {
    const sizeMap = {
      'sm': 'form-control-sm',
      'md': 'form-control-md',
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
    
    const baseClasses = sizeMap[this.size] || 'form-label label-md';
    
    // Si es noLabel, agregar clase para label fantasma
    if (this.noLabel && !this.hideLabel) {
      return `${baseClasses} ghost-label`;
    }
    
    return baseClasses;
  }

  get shouldShowLabel(): boolean {
    // Si hideLabel está activo, nunca mostrar el label
    if (this.hideLabel) {
      return false;
    }
    // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
    return !!this.label || this.noLabel;
  }

  get textareaStyles(): any {
    const styles: any = {};
    
    if (this.height !== null) {
      // Cuando se especifica altura, usar altura fija y deshabilitar resize
      styles.height = `${this.height}px`;
      styles.resize = 'none';
      styles.overflowY = 'auto'; // Habilitar scroll vertical
    } else {
      // Comportamiento normal cuando no hay altura especificada
      styles.resize = this.resize;
    }
    
    return styles;
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

  onTextareaFocus(event: FocusEvent) {
    this.isFocused = true;
    this.focus.emit(event);
  }

  onTextareaBlur(event: FocusEvent) {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  onTextareaChange(event: Event) {
    this.change.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allowDecimals'] || changes['allowNegative'] || changes['maxDecimals']) {
      this.updateNumbersRegex();
    }
    if (changes['allowSpaces'] || changes['allowAccents']) {
      this.updateLettersRegex();
    }
  }

  // ========== VALIDACIÓN DE NÚMEROS ==========
  private updateNumbersRegex(): void {
    let pattern = '[^0-9';

    if (this.allowDecimals) {
      pattern += '.';
    }

    if (this.allowNegative) {
      pattern += '-';
    }

    pattern += ']';
    this.numbersRegex = new RegExp(pattern, 'g');
  }

  onInputForNumbers(event: any): void {
    if (!this.saNumbersOnly || this.isProcessingNumbersInput) {
      return;
    }

    const initialValue = this.textareaElement.nativeElement.value;
    if (initialValue === undefined || initialValue === null) {
      return;
    }

    this.isProcessingNumbersInput = true;
    let filteredValue = String(initialValue);

    // Primero eliminar todos los caracteres no válidos excepto puntos y signos
    filteredValue = filteredValue.replace(this.numbersRegex, '');

    // Remover puntos decimales si no están permitidos
    if (!this.allowDecimals) {
      filteredValue = filteredValue.replace(/\./g, '');
    }

    // Validar formato de decimales
    if (this.allowDecimals && filteredValue.includes('.')) {
      const parts = filteredValue.split('.');

      // Solo permitir un punto decimal
      if (parts.length > 2) {
        filteredValue = parts[0] + '.' + parts.slice(1).join('');
      }

      // Re-split después de limpiar
      const cleanParts = filteredValue.split('.');

      // Limitar decimales
      if (cleanParts[1] && cleanParts[1].length > this.maxDecimals) {
        filteredValue = cleanParts[0] + '.' + cleanParts[1].substring(0, this.maxDecimals);
      }
    }

    // Remover signo negativo si no está permitido o si está mal posicionado
    if (!this.allowNegative) {
      filteredValue = filteredValue.replace(/-/g, '');
    } else {
      // Solo permitir un signo negativo al inicio
      const hasNegative = filteredValue.startsWith('-');
      filteredValue = filteredValue.replace(/-/g, '');
      if (hasNegative) {
        filteredValue = '-' + filteredValue;
      }
    }

    if (initialValue !== filteredValue) {
      const cursorPosition = this.textareaElement.nativeElement.selectionStart || 0;
      const lengthDiff = initialValue.length - filteredValue.length;

      this.textareaElement.nativeElement.value = filteredValue;
      this.value = filteredValue;
      this.onChange(filteredValue);
      this.valueChange.emit(filteredValue);

      // Ajustar la posición del cursor
      const newCursorPosition = Math.max(0, cursorPosition - lengthDiff);
      this.textareaElement.nativeElement.setSelectionRange(newCursorPosition, newCursorPosition);
    }

    this.isProcessingNumbersInput = false;
  }

  onKeyPressForNumbers(event: KeyboardEvent): void {
    if (!this.saNumbersOnly) {
      return;
    }

    const char = event.key;
    const currentValue = this.textareaElement.nativeElement.value || '';
    const cursorPosition = this.textareaElement.nativeElement.selectionStart || 0;

    // Permitir teclas de control
    if (event.ctrlKey || event.metaKey || event.key === 'Backspace' || event.key === 'Delete' ||
        event.key === 'Tab' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Enter') {
      return;
    }

    // Permitir punto decimal solo si no existe uno ya
    if (this.allowDecimals && char === '.') {
      if (currentValue.includes('.')) {
        event.preventDefault();
        return;
      }
      return;
    }

    // Permitir signo negativo al inicio
    if (this.allowNegative && char === '-') {
      if (cursorPosition === 0 && !currentValue.includes('-')) {
        return;
      }
      event.preventDefault();
      return;
    }

    // Solo permitir números
    if (!/^\d$/.test(char)) {
      event.preventDefault();
      return;
    }

    // Validar máximo de decimales si ya existe un punto
    if (this.allowDecimals && currentValue.includes('.')) {
      const parts = currentValue.split('.');
      const decimalPart = parts[1] || '';
      const selectionStart = this.textareaElement.nativeElement.selectionStart || 0;
      const selectionEnd = this.textareaElement.nativeElement.selectionEnd || 0;
      const decimalStartPosition = parts[0].length + 1;

      // Si el cursor está después del punto y ya hay maxDecimals dígitos (sin selección)
      if (selectionStart >= decimalStartPosition &&
          selectionStart === selectionEnd &&
          decimalPart.length >= this.maxDecimals) {
        event.preventDefault();
      }
    }
  }

  onPasteForNumbers(event: ClipboardEvent): void {
    if (!this.saNumbersOnly) {
      return;
    }

    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text') || '';
    let filteredText = pastedText.replace(this.numbersRegex, '');

    // Validar formato de decimales en texto pegado
    if (this.allowDecimals && filteredText.includes('.')) {
      const parts = filteredText.split('.');
      if (parts.length > 2) {
        filteredText = parts[0] + '.' + parts.slice(1).join('');
      }

      if (parts[1] && parts[1].length > this.maxDecimals) {
        filteredText = parts[0] + '.' + parts[1].substring(0, this.maxDecimals);
      }
    }

    if (filteredText) {
      const currentValue = this.textareaElement.nativeElement.value || '';
      const start = this.textareaElement.nativeElement.selectionStart || 0;
      const end = this.textareaElement.nativeElement.selectionEnd || 0;

      const newValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
      this.textareaElement.nativeElement.value = newValue;
      this.value = newValue;
      this.onChange(newValue);
      this.valueChange.emit(newValue);

      // Restaurar posición del cursor
      setTimeout(() => {
        this.textareaElement.nativeElement.setSelectionRange(start + filteredText.length, start + filteredText.length);
      });
    }
  }

  // ========== VALIDACIÓN DE LETRAS ==========
  private updateLettersRegex(): void {
    let pattern = '[^a-zA-Z';

    if (this.allowSpaces) {
      pattern += ' ';
    }

    if (this.allowAccents) {
      pattern += 'áéíóúÁÉÍÓÚñÑüÜ';
    }

    pattern += ']';
    this.lettersRegex = new RegExp(pattern, 'g');
  }

  onInputForLetters(event: any): void {
    if (!this.saLettersOnly) {
      return;
    }

    const initialValue = this.textareaElement.nativeElement.value;
    if (initialValue === undefined || initialValue === null) {
      return;
    }

    const filteredValue = String(initialValue).replace(this.lettersRegex, '');

    if (initialValue !== filteredValue) {
      this.textareaElement.nativeElement.value = filteredValue;
      this.value = filteredValue;
      this.onChange(filteredValue);
      this.valueChange.emit(filteredValue);
    }
  }

  onKeyPressForLetters(event: KeyboardEvent): void {
    if (!this.saLettersOnly) {
      return;
    }

    const char = event.key;

    // Permitir teclas de control
    if (event.ctrlKey || event.metaKey || event.key === 'Backspace' || event.key === 'Delete' ||
        event.key === 'Tab' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Enter') {
      return;
    }

    if (this.lettersRegex.test(char)) {
      event.preventDefault();
    }
  }

  onPasteForLetters(event: ClipboardEvent): void {
    if (!this.saLettersOnly) {
      return;
    }

    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text') || '';
    const filteredText = pastedText.replace(this.lettersRegex, '');

    if (filteredText) {
      const currentValue = this.textareaElement.nativeElement.value || '';
      const start = this.textareaElement.nativeElement.selectionStart || 0;
      const end = this.textareaElement.nativeElement.selectionEnd || 0;

      const newValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
      this.textareaElement.nativeElement.value = newValue;
      this.value = newValue;
      this.onChange(newValue);
      this.valueChange.emit(newValue);

      // Restaurar posición del cursor
      setTimeout(() => {
        this.textareaElement.nativeElement.setSelectionRange(start + filteredText.length, start + filteredText.length);
      });
    }
  }
}
