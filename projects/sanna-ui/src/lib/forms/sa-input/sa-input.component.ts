import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, ViewChild, ElementRef, HostBinding, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel';
export type InputStatus = 'default' | 'success' | 'error';

@Component({
  selector: 'sa-input',
  templateUrl: './sa-input.component.html',
  styleUrls: ['./sa-input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaInputComponent),
      multi: true
    }
  ]
})
export class SaInputComponent implements ControlValueAccessor, OnChanges {
  @Input() value: string = '';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() size: InputSize = 'md';
  @Input() status: InputStatus = 'default';
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
  @Input() backgroundColor: string = '';
  @Input() textColor: string = '';
  @Input() boldText: boolean = false; // Hacer el texto del input bold

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
  @Output() focusin = new EventEmitter<FocusEvent>();
  @Output() focusout = new EventEmitter<FocusEvent>();
  @Output() keyup = new EventEmitter<KeyboardEvent>();
  @Output() keydown = new EventEmitter<KeyboardEvent>();
  @Output() keypress = new EventEmitter<KeyboardEvent>();
  @Output() enter = new EventEmitter<KeyboardEvent>();

  showPassword: boolean = false;
  isFocused: boolean = false;

  // Referencia al elemento input nativo
  @ViewChild('inputElement', { static: true }) inputElement!: ElementRef<HTMLInputElement>;

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

  get inputClasses(): string {
    const sizeMap = {
      'sm': 'form-control-sm',
      'md': 'form-control-md',
      'lg': 'form-control-lg'
    };

    const baseClasses = ['form-control'];
    
    if (sizeMap[this.size] && sizeMap[this.size] !== '') {
      baseClasses.push(sizeMap[this.size]);
    }
    
    // Agregar clase bold si está activa
    if (this.boldText) {
      baseClasses.push('input-bold');
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
    if (this.noLabel) {
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
    event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
    this.focusin.emit(event);
  }

  onInputBlur(event: FocusEvent) {
    this.isFocused = false;
    event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
    this.onTouched();
    this.focusout.emit(event);
  }

  onKeyUp(event: KeyboardEvent) {
    this.keyup.emit(event);
    // Emitir evento específico para Enter
    if (event.key === 'Enter') {
      this.enter.emit(event);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    this.keydown.emit(event);
  }

  onKeyPress(event: KeyboardEvent) {
    this.keypress.emit(event);
  }

  onInputChange(event: Event) {
    this.change.emit(event);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Métodos públicos para acceso al input nativo
  /**
   * Enfoca el input
   */
  focusInput(): void {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.focus();
    }
  }

  /**
   * Quita el foco del input
   */
  blurInput(): void {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.blur();
    }
  }

  /**
   * Selecciona todo el texto del input
   */
  selectAll(): void {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.select();
    }
  }

  /**
   * Obtiene la referencia al elemento input nativo
   */
  getNativeInput(): HTMLInputElement | null {
    return this.inputElement?.nativeElement || null;
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

    const initialValue = this.inputElement.nativeElement.value;
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
      const cursorPosition = this.inputElement.nativeElement.selectionStart || 0;
      const lengthDiff = initialValue.length - filteredValue.length;

      this.inputElement.nativeElement.value = filteredValue;
      this.value = filteredValue;
      this.onChange(filteredValue);
      this.valueChange.emit(filteredValue);

      // Ajustar la posición del cursor
      const newCursorPosition = Math.max(0, cursorPosition - lengthDiff);
      this.inputElement.nativeElement.setSelectionRange(newCursorPosition, newCursorPosition);
    }

    this.isProcessingNumbersInput = false;
  }

  onKeyPressForNumbers(event: KeyboardEvent): void {
    if (!this.saNumbersOnly) {
      return;
    }

    const char = event.key;
    const currentValue = this.inputElement.nativeElement.value || '';
    const cursorPosition = this.inputElement.nativeElement.selectionStart || 0;

    // Permitir teclas de control
    if (event.ctrlKey || event.metaKey || event.key === 'Backspace' || event.key === 'Delete' ||
        event.key === 'Tab' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
        event.key === 'Enter') {
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
      const selectionStart = this.inputElement.nativeElement.selectionStart || 0;
      const selectionEnd = this.inputElement.nativeElement.selectionEnd || 0;
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
      const currentValue = this.inputElement.nativeElement.value || '';
      const start = this.inputElement.nativeElement.selectionStart || 0;
      const end = this.inputElement.nativeElement.selectionEnd || 0;

      const newValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
      this.inputElement.nativeElement.value = newValue;
      this.value = newValue;
      this.onChange(newValue);
      this.valueChange.emit(newValue);

      // Restaurar posición del cursor
      setTimeout(() => {
        this.inputElement.nativeElement.setSelectionRange(start + filteredText.length, start + filteredText.length);
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

    const initialValue = this.inputElement.nativeElement.value;
    if (initialValue === undefined || initialValue === null) {
      return;
    }

    const filteredValue = String(initialValue).replace(this.lettersRegex, '');

    if (initialValue !== filteredValue) {
      this.inputElement.nativeElement.value = filteredValue;
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
        event.key === 'Enter') {
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
      const currentValue = this.inputElement.nativeElement.value || '';
      const start = this.inputElement.nativeElement.selectionStart || 0;
      const end = this.inputElement.nativeElement.selectionEnd || 0;

      const newValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
      this.inputElement.nativeElement.value = newValue;
      this.value = newValue;
      this.onChange(newValue);
      this.valueChange.emit(newValue);

      // Restaurar posición del cursor
      setTimeout(() => {
        this.inputElement.nativeElement.setSelectionRange(start + filteredText.length, start + filteredText.length);
      });
    }
  }
}