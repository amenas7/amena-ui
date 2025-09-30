import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LettersOnlyDirective {
    el;
    allowSpaces = true;
    allowAccents = true;
    regex;
    constructor(el) {
        this.el = el;
        this.updateRegex();
    }
    ngOnChanges(changes) {
        if (changes['allowSpaces'] || changes['allowAccents']) {
            this.updateRegex();
        }
    }
    onInput(event) {
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
    onKeyPress(event) {
        const char = event.key;
        if (this.regex.test(char)) {
            event.preventDefault();
        }
    }
    onPaste(event) {
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
    updateRegex() {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LettersOnlyDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: LettersOnlyDirective, isStandalone: true, selector: "[saLettersOnly]", inputs: { allowSpaces: "allowSpaces", allowAccents: "allowAccents" }, host: { listeners: { "input": "onInput($event)", "keypress": "onKeyPress($event)", "paste": "onPaste($event)" } }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LettersOnlyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[saLettersOnly]',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { allowSpaces: [{
                type: Input
            }], allowAccents: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0dGVycy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvdmFsaWRhdG9ycy9sZXR0ZXJzLW9ubHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBTXJHLE1BQU0sT0FBTyxvQkFBb0I7SUFNWDtJQUxYLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsWUFBWSxHQUFZLElBQUksQ0FBQztJQUU5QixLQUFLLENBQVU7SUFFdkIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRWtDLE9BQU8sQ0FBQyxLQUFVO1FBQ25ELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3hELE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxh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Q0FBQztnQkFPRCxPQUFPO3NCQUF6QyxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzYUxldHRlcnNPbmx5XScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGV0dGVyc09ubHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGFsbG93U3BhY2VzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbGxvd0FjY2VudHM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIHJlZ2V4ITogUmVnRXhwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVJlZ2V4KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snYWxsb3dTcGFjZXMnXSB8fCBjaGFuZ2VzWydhbGxvd0FjY2VudHMnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVJlZ2V4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGluaXRpYWxWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSkucmVwbGFjZSh0aGlzLnJlZ2V4LCAnJyk7XHJcblxyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICAvLyBFbWl0aXIgZXZlbnRvIGRlIGlucHV0IHBhcmEgcXVlIEFuZ3VsYXIgZGV0ZWN0ZSBlbCBjYW1iaW9cclxuICAgICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XHJcbiAgICBpZiAodGhpcy5yZWdleC50ZXN0KGNoYXIpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pIG9uUGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcclxuICAgIGNvbnN0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLnJlZ2V4LCAnJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICBcclxuICAgICAgLy8gRW1pdGlyIGV2ZW50byBkZSBpbnB1dFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoLCBzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUmVnZXgoKTogdm9pZCB7XHJcbiAgICBsZXQgcGF0dGVybiA9ICdbXmEtekEtWic7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmFsbG93U3BhY2VzKSB7XHJcbiAgICAgIHBhdHRlcm4gKz0gJyAnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5hbGxvd0FjY2VudHMpIHtcclxuICAgICAgcGF0dGVybiArPSAnw6HDqcOtw7PDusOBw4nDjcOTw5rDscORw7zDnCc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBhdHRlcm4gKz0gJ10nO1xyXG4gICAgdGhpcy5yZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcclxuICB9XHJcbn1cclxuIl19