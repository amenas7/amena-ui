import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[saLettersOnly]',
  standalone: true
})
export class LettersOnlyDirective implements OnChanges {
  @Input() allowSpaces: boolean = true;
  @Input() allowAccents: boolean = true;

  private regex!: RegExp;

  constructor(private el: ElementRef) {
    this.updateRegex();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allowSpaces'] || changes['allowAccents']) {
      this.updateRegex();
    }
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    const initialValue = this.el.nativeElement.value;
    if (initialValue === undefined || initialValue === null) {
      return;
    }
    const filteredValue = String(initialValue).replace(this.regex, '');

    if (initialValue !== filteredValue) {
      this.el.nativeElement.value = filteredValue;
      // Emitir evento de input para que Angular detecte el cambio
      event.target.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const char = event.key;
    if (this.regex.test(char)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedText = event.clipboardData?.getData('text') || '';
    const filteredText = pastedText.replace(this.regex, '');

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
    let pattern = '[^a-zA-Z';
    
    if (this.allowSpaces) {
      pattern += ' ';
    }
    
    if (this.allowAccents) {
      pattern += 'áéíóúÁÉÍÓÚñÑüÜ';
    }
    
    pattern += ']';
    this.regex = new RegExp(pattern, 'g');
  }
}
