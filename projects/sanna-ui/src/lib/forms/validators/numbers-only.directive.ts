import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[saNumbersOnly]',
  standalone: true
})
export class NumbersOnlyDirective implements OnChanges {
  @Input() allowDecimals: boolean = false;
  @Input() allowNegative: boolean = false;
  @Input() maxDecimals: number = 2;

  private regex!: RegExp;

  constructor(private el: ElementRef) {
    this.updateRegex();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allowDecimals'] || changes['allowNegative'] || changes['maxDecimals']) {
      this.updateRegex();
    }
  }

  private isProcessing = false;

  @HostListener('input', ['$event']) onInput(event: any) {
    if (this.isProcessing) {
      return;
    }

    const initialValue = this.el.nativeElement.value;
    if (initialValue === undefined || initialValue === null) {
      return;
    }

    this.isProcessing = true;
    let filteredValue = String(initialValue);

    // Primero eliminar todos los caracteres no válidos excepto puntos y signos
    filteredValue = filteredValue.replace(this.regex, '');

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
      const cursorPosition = this.el.nativeElement.selectionStart;
      const lengthDiff = initialValue.length - filteredValue.length;

      this.el.nativeElement.value = filteredValue;

      // Ajustar la posición del cursor
      const newCursorPosition = Math.max(0, cursorPosition - lengthDiff);
      this.el.nativeElement.setSelectionRange(newCursorPosition, newCursorPosition);
    }

    this.isProcessing = false;
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const char = event.key;
    const currentValue = this.el.nativeElement.value || '';
    const cursorPosition = this.el.nativeElement.selectionStart || 0;

    // Permitir teclas de control (backspace, delete, tab, etc.)
    if (event.ctrlKey || event.metaKey || event.key === 'Backspace' || event.key === 'Delete' ||
        event.key === 'Tab' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
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
      const selectionStart = this.el.nativeElement.selectionStart || 0;
      const selectionEnd = this.el.nativeElement.selectionEnd || 0;
      const decimalStartPosition = parts[0].length + 1;

      // Si el cursor está después del punto y ya hay maxDecimals dígitos (sin selección)
      if (selectionStart >= decimalStartPosition &&
          selectionStart === selectionEnd &&
          decimalPart.length >= this.maxDecimals) {
        event.preventDefault();
      }
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text') || '';
    let filteredText = pastedText.replace(this.regex, '');

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
      const currentValue = this.el.nativeElement.value || '';
      const start = this.el.nativeElement.selectionStart || 0;
      const end = this.el.nativeElement.selectionEnd || 0;
      
      const newValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
      this.el.nativeElement.value = newValue;
      
      // Emitir evento de input
      this.el.nativeElement.dispatchEvent(new Event('input', { bubbles: true }));
      
      // Restaurar posición del cursor
      setTimeout(() => {
        this.el.nativeElement.setSelectionRange(start + filteredText.length, start + filteredText.length);
      });
    }
  }

  private updateRegex(): void {
    let pattern = '[^0-9';
    
    if (this.allowDecimals) {
      pattern += '.';
    }
    
    if (this.allowNegative) {
      pattern += '-';
    }
    
    pattern += ']';
    this.regex = new RegExp(pattern, 'g');
  }
}
