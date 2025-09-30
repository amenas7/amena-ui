import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NumbersOnlyDirective {
    el;
    allowDecimals = false;
    allowNegative = false;
    maxDecimals = 2;
    regex;
    constructor(el) {
        this.el = el;
        this.updateRegex();
    }
    ngOnChanges(changes) {
        if (changes['allowDecimals'] || changes['allowNegative'] || changes['maxDecimals']) {
            this.updateRegex();
        }
    }
    isProcessing = false;
    onInput(event) {
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
        }
        else {
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
    onKeyPress(event) {
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
    onPaste(event) {
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
    updateRegex() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumbersOnlyDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumbersOnlyDirective, isStandalone: true, selector: "[saNumbersOnly]", inputs: { allowDecimals: "allowDecimals", allowNegative: "allowNegative", maxDecimals: "maxDecimals" }, host: { listeners: { "input": "onInput($event)", "keypress": "onKeyPress($event)", "paste": "onPaste($event)" } }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumbersOnlyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[saNumbersOnly]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { allowDecimals: [{
                type: Input
            }], allowNegative: [{
                type: Input
            }], maxDecimals: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onKeyPress: [{
                type: HostListener,
                args: ['keypress', ['$event']]
            }], onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvdmFsaWRhdG9ycy9udW1iZXJzLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBTXJHLE1BQU0sT0FBTyxvQkFBb0I7SUFPWDtJQU5YLGFBQWEsR0FBWSxLQUFLLENBQUM7SUFDL0IsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUMvQixXQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRXpCLEtBQUssQ0FBVTtJQUV2QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDbkYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRU8sWUFBWSxHQUFHLEtBQUssQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFVO1FBQ25ELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDeEQsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJ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TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NhTnVtYmVyc09ubHldJyxcclxuICBzdGFuZGFsb25lOiB0cnVlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJzT25seURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgYWxsb3dEZWNpbWFsczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhEZWNpbWFsczogbnVtYmVyID0gMjtcclxuXHJcbiAgcHJpdmF0ZSByZWdleCE6IFJlZ0V4cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy51cGRhdGVSZWdleCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbJ2FsbG93RGVjaW1hbHMnXSB8fCBjaGFuZ2VzWydhbGxvd05lZ2F0aXZlJ10gfHwgY2hhbmdlc1snbWF4RGVjaW1hbHMnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVJlZ2V4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzUHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICBsZXQgZmlsdGVyZWRWYWx1ZSA9IFN0cmluZyhpbml0aWFsVmFsdWUpO1xyXG5cclxuICAgIC8vIFByaW1lcm8gZWxpbWluYXIgdG9kb3MgbG9zIGNhcmFjdGVyZXMgbm8gdsOhbGlkb3MgZXhjZXB0byBwdW50b3MgeSBzaWdub3NcclxuICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UodGhpcy5yZWdleCwgJycpO1xyXG5cclxuICAgIC8vIFJlbW92ZXIgcHVudG9zIGRlY2ltYWxlcyBzaSBubyBlc3TDoW4gcGVybWl0aWRvc1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RGVjaW1hbHMpIHtcclxuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvXFwuL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGZpbHRlcmVkVmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgIC8vIFNvbG8gcGVybWl0aXIgdW4gcHVudG8gZGVjaW1hbFxyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZS1zcGxpdCBkZXNwdcOpcyBkZSBsaW1waWFyXHJcbiAgICAgIGNvbnN0IGNsZWFuUGFydHMgPSBmaWx0ZXJlZFZhbHVlLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAvLyBMaW1pdGFyIGRlY2ltYWxlc1xyXG4gICAgICBpZiAoY2xlYW5QYXJ0c1sxXSAmJiBjbGVhblBhcnRzWzFdLmxlbmd0aCA+IHRoaXMubWF4RGVjaW1hbHMpIHtcclxuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gY2xlYW5QYXJ0c1swXSArICcuJyArIGNsZWFuUGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlciBzaWdubyBuZWdhdGl2byBzaSBubyBlc3TDoSBwZXJtaXRpZG8gbyBzaSBlc3TDoSBtYWwgcG9zaWNpb25hZG9cclxuICAgIGlmICghdGhpcy5hbGxvd05lZ2F0aXZlKSB7XHJcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cclxuICAgICAgY29uc3QgaGFzTmVnYXRpdmUgPSBmaWx0ZXJlZFZhbHVlLnN0YXJ0c1dpdGgoJy0nKTtcclxuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XHJcbiAgICAgIGlmIChoYXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSAnLScgKyBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgY29uc3QgbGVuZ3RoRGlmZiA9IGluaXRpYWxWYWx1ZS5sZW5ndGggLSBmaWx0ZXJlZFZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XHJcblxyXG4gICAgICAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBkZWwgY3Vyc29yXHJcbiAgICAgIGNvbnN0IG5ld0N1cnNvclBvc2l0aW9uID0gTWF0aC5tYXgoMCwgY3Vyc29yUG9zaXRpb24gLSBsZW5ndGhEaWZmKTtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKG5ld0N1cnNvclBvc2l0aW9uLCBuZXdDdXJzb3JQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXByZXNzJywgWyckZXZlbnQnXSkgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcblxyXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2wgKGJhY2tzcGFjZSwgZGVsZXRlLCB0YWIsIGV0Yy4pXHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fFxyXG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGVybWl0aXIgcHVudG8gZGVjaW1hbCBzb2xvIHNpIG5vIGV4aXN0ZSB1bm8geWFcclxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgY2hhciA9PT0gJy4nKSB7XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJtaXRpciBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cclxuICAgIGlmICh0aGlzLmFsbG93TmVnYXRpdmUgJiYgY2hhciA9PT0gJy0nKSB7XHJcbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvbiA9PT0gMCAmJiAhY3VycmVudFZhbHVlLmluY2x1ZGVzKCctJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNvbG8gcGVybWl0aXIgbsO6bWVyb3NcclxuICAgIGlmICghL15cXGQkLy50ZXN0KGNoYXIpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGFyIG3DoXhpbW8gZGUgZGVjaW1hbGVzIHNpIHlhIGV4aXN0ZSB1biBwdW50b1xyXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBkZWNpbWFsUGFydCA9IHBhcnRzWzFdIHx8ICcnO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XHJcbiAgICAgIGNvbnN0IGRlY2ltYWxTdGFydFBvc2l0aW9uID0gcGFydHNbMF0ubGVuZ3RoICsgMTtcclxuXHJcbiAgICAgIC8vIFNpIGVsIGN1cnNvciBlc3TDoSBkZXNwdcOpcyBkZWwgcHVudG8geSB5YSBoYXkgbWF4RGVjaW1hbHMgZMOtZ2l0b3MgKHNpbiBzZWxlY2Npw7NuKVxyXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPj0gZGVjaW1hbFN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQgJiZcclxuICAgICAgICAgIGRlY2ltYWxQYXJ0Lmxlbmd0aCA+PSB0aGlzLm1heERlY2ltYWxzKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnLCBbJyRldmVudCddKSBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JykgfHwgJyc7XHJcbiAgICBsZXQgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMucmVnZXgsICcnKTtcclxuXHJcbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzIGVuIHRleHRvIHBlZ2Fkb1xyXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBmaWx0ZXJlZFRleHQuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVGV4dC5zcGxpdCgnLicpO1xyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHMuc2xpY2UoMSkuam9pbignJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJ0c1sxXSAmJiBwYXJ0c1sxXS5sZW5ndGggPiB0aGlzLm1heERlY2ltYWxzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRUZXh0ID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0c1sxXS5zdWJzdHJpbmcoMCwgdGhpcy5tYXhEZWNpbWFscyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVyZWRUZXh0KSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcclxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgY29uc3QgZW5kID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIGZpbHRlcmVkVGV4dCArIGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoZW5kKTtcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgIFxyXG4gICAgICAvLyBFbWl0aXIgZXZlbnRvIGRlIGlucHV0XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xyXG4gICAgICBcclxuICAgICAgLy8gUmVzdGF1cmFyIHBvc2ljacOzbiBkZWwgY3Vyc29yXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSZWdleCgpOiB2b2lkIHtcclxuICAgIGxldCBwYXR0ZXJuID0gJ1teMC05JztcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscykge1xyXG4gICAgICBwYXR0ZXJuICs9ICcuJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSkge1xyXG4gICAgICBwYXR0ZXJuICs9ICctJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGF0dGVybiArPSAnXSc7XHJcbiAgICB0aGlzLnJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xyXG4gIH1cclxufVxyXG4iXX0=