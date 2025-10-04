import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaTextareaComponent {
    value = '';
    size = 'md';
    status = 'default';
    label = '';
    constructor() {
        this.updateNumbersRegex();
        this.updateLettersRegex();
    }
    _noLabel = false;
    set noLabel(value) {
        this._noLabel = value === true || value === 'true';
    }
    get noLabel() {
        return this._noLabel;
    }
    _hideLabel = false;
    set hideLabel(value) {
        this._hideLabel = value === true || value === 'true';
    }
    get hideLabel() {
        return this._hideLabel;
    }
    placeholder = '';
    helperText = '';
    errorText = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    rows = 3;
    cols = 50;
    minlength = null;
    maxlength = null;
    resize = 'vertical';
    height = null; // Altura fija en píxeles
    // Soporte para ngClass
    class = '';
    // Validaciones integradas
    saNumbersOnly = false;
    allowDecimals = false;
    allowNegative = false;
    maxDecimals = 2;
    saLettersOnly = false;
    allowSpaces = true;
    allowAccents = true;
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focusin = new EventEmitter();
    focusout = new EventEmitter();
    isFocused = false;
    // Referencia al elemento textarea nativo
    textareaElement;
    onChange = (_) => { };
    onTouched = () => { };
    // Variables para validación de números
    numbersRegex;
    isProcessingNumbersInput = false;
    // Variables para validación de letras
    lettersRegex;
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
    get textareaClasses() {
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
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get labelClasses() {
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
    get shouldShowLabel() {
        // Si hideLabel está activo, nunca mostrar el label
        if (this.hideLabel) {
            return false;
        }
        // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
        return !!this.label || this.noLabel;
    }
    get textareaStyles() {
        const styles = {};
        if (this.height !== null) {
            // Cuando se especifica altura, usar altura fija y deshabilitar resize
            styles.height = `${this.height}px`;
            styles.resize = 'none';
            styles.overflowY = 'auto'; // Habilitar scroll vertical
        }
        else {
            // Comportamiento normal cuando no hay altura especificada
            styles.resize = this.resize;
        }
        return styles;
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onModelChange(value) {
        this.value = value;
        this.onChange(value);
        this.valueChange.emit(value);
    }
    onTextareaFocus(event) {
        this.isFocused = true;
        this.focusin.emit(event);
    }
    onTextareaBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.focusout.emit(event);
    }
    onTextareaChange(event) {
        this.change.emit(event);
    }
    ngOnChanges(changes) {
        if (changes['allowDecimals'] || changes['allowNegative'] || changes['maxDecimals']) {
            this.updateNumbersRegex();
        }
        if (changes['allowSpaces'] || changes['allowAccents']) {
            this.updateLettersRegex();
        }
    }
    // ========== VALIDACIÓN DE NÚMEROS ==========
    updateNumbersRegex() {
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
    onInputForNumbers(event) {
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
    onKeyPressForNumbers(event) {
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
    onPasteForNumbers(event) {
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
    updateLettersRegex() {
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
    onInputForLetters(event) {
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
    onKeyPressForLetters(event) {
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
    onPasteForLetters(event) {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaTextareaComponent, selector: "sa-textarea", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", placeholder: "placeholder", helperText: "helperText", errorText: "errorText", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", rows: "rows", cols: "cols", minlength: "minlength", maxlength: "maxlength", resize: "resize", height: "height", class: "class", saNumbersOnly: "saNumbersOnly", allowDecimals: "allowDecimals", allowNegative: "allowNegative", maxDecimals: "maxDecimals", saLettersOnly: "saLettersOnly", allowSpaces: "allowSpaces", allowAccents: "allowAccents" }, outputs: { valueChange: "valueChange", change: "change", focusin: "focusin", focusout: "focusout" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaTextareaComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "textareaElement", first: true, predicate: ["textareaElement"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    #textareaElement\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n    (change)=\"onTextareaChange($event)\"\r\n    (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\r\n    (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : null)\"\r\n    (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-textarea', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaTextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    #textareaElement\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focus)=\"onTextareaFocus($event)\"\r\n    (blur)=\"onTextareaBlur($event)\"\r\n    (change)=\"onTextareaChange($event)\"\r\n    (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\r\n    (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : null)\"\r\n    (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], label: [{
                type: Input
            }], noLabel: [{
                type: Input
            }], hideLabel: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], resize: [{
                type: Input
            }], height: [{
                type: Input
            }], class: [{
                type: Input
            }], saNumbersOnly: [{
                type: Input
            }], allowDecimals: [{
                type: Input
            }], allowNegative: [{
                type: Input
            }], maxDecimals: [{
                type: Input
            }], saLettersOnly: [{
                type: Input
            }], allowSpaces: [{
                type: Input
            }], allowAccents: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focusin: [{
                type: Output
            }], focusout: [{
                type: Output
            }], textareaElement: [{
                type: ViewChild,
                args: ['textareaElement', { static: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFNUI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQ3BDLElBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNRLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUN4QixTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLEVBQUUsR0FBVyxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixJQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsU0FBUyxHQUFrQixJQUFJLENBQUM7SUFDaEMsU0FBUyxHQUFrQixJQUFJLENBQUM7SUFDaEMsTUFBTSxHQUFnRCxVQUFVLENBQUM7SUFDakUsTUFBTSxHQUFrQixJQUFJLENBQUMsQ0FBQyx5QkFBeUI7SUFFaEUsdUJBQXVCO0lBQ2QsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUU1QiwwQkFBMEI7SUFDakIsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUMvQixhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLGFBQWEsR0FBWSxLQUFLLENBQUM7SUFDL0IsV0FBVyxHQUFXLENBQUMsQ0FBQztJQUV4QixhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsWUFBWSxHQUFZLElBQUksQ0FBQztJQUU1QixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUN6QyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUNuQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN6QyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVwRCxTQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHlDQUF5QztJQUNPLGVBQWUsQ0FBbUM7SUFFMUYsUUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDMUIsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUU3Qix1Q0FBdUM7SUFDL0IsWUFBWSxDQUFVO0lBQ3RCLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUV6QyxzQ0FBc0M7SUFDOUIsWUFBWSxDQUFVO0lBRTlCLHNDQUFzQztJQUN0QyxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLGlCQUFpQjtTQUN4QixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVyQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUscUJBQXFCO1lBQzNCLElBQUksRUFBRSxxQkFBcUI7WUFDM0IsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQztRQUVoRSxtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxXQUFXLGNBQWMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsaUdBQWlHO1FBQ2pHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsc0VBQXNFO1lBQ3RFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyw0QkFBNEI7UUFDekQsQ0FBQzthQUFNLENBQUM7WUFDTiwwREFBMEQ7WUFDMUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWlCO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFZO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ25GLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxrQkFBa0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXRCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUVELE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUN6RCxPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5RCxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3hELE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekMsMkVBQTJFO1FBQzNFLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN0RCxNQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXZDLGlDQUFpQztZQUNqQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFFRCw4QkFBOEI7WUFDOUIsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxvQkFBb0I7WUFDcEIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzdELGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRixDQUFDO1FBQ0gsQ0FBQztRQUVELHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO2FBQU0sQ0FBQztZQUNOLDRDQUE0QztZQUM1QyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUNoQixhQUFhLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRSxDQUFDO1lBQ25DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFDOUUsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBRTlELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVyQyxpQ0FBaUM7WUFDakMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM3RixDQUFDO1FBRUQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBb0I7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1FBRTlFLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVE7WUFDckYsS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxZQUFZO1lBQzlFLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDbEYsT0FBTztRQUNULENBQUM7UUFFRCxrREFBa0Q7UUFDbEQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixPQUFPO1lBQ1QsQ0FBQztZQUNELE9BQU87UUFDVCxDQUFDO1FBRUQsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxjQUFjLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4RCxPQUFPO1lBQ1QsQ0FBQztZQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1FBQ1QsQ0FBQztRQUVELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPO1FBQ1QsQ0FBQztRQUVELG9EQUFvRDtRQUNwRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1lBQzlFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7WUFDMUUsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVqRCxtRkFBbUY7WUFDbkYsSUFBSSxjQUFjLElBQUksb0JBQW9CO2dCQUN0QyxjQUFjLEtBQUssWUFBWTtnQkFDL0IsV0FBVyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFxQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0QsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckQsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkQsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFFLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3BFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFDckUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUVqRSxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEMsZ0NBQWdDO1lBQ2hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsNkNBQTZDO0lBQ3JDLGtCQUFrQjtRQUN4QixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsT0FBTyxJQUFJLGdCQUFnQixDQUFDO1FBQzlCLENBQUM7UUFFRCxPQUFPLElBQUksR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5RCxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3hELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQW9CO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRXZCLDZCQUE2QjtRQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVE7WUFDckYsS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxZQUFZO1lBQzlFLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDbEYsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBcUI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1QsQ0FBQztRQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUQsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksWUFBWSxFQUFFLENBQUM7WUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNwRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7WUFFakUsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhDLGdDQUFnQztZQUNoQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakgsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQzt3R0FwY1UsbUJBQW1COzRGQUFuQixtQkFBbUIsd3pCQVJuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixpTENqQkgsNGlEQXdDQTs7NEZEckJhLG1CQUFtQjtrQkFiL0IsU0FBUzsrQkFDRSxhQUFhLGlCQUdSLGlCQUFpQixDQUFDLFNBQVMsYUFDL0I7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO3dEQUdRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFTRixPQUFPO3NCQURWLEtBQUs7Z0JBVUYsU0FBUztzQkFEWixLQUFLO2dCQU9HLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBS3lDLGVBQWU7c0JBQTlELFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQWMxQyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCB0eXBlIFRleHRhcmVhU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgVGV4dGFyZWFTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS10ZXh0YXJlYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS10ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhVGV4dGFyZWFDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2l6ZTogVGV4dGFyZWFTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IFRleHRhcmVhU3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZU51bWJlcnNSZWdleCgpO1xyXG4gICAgdGhpcy51cGRhdGVMZXR0ZXJzUmVnZXgoKTtcclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5vTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbm9MYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgaGlkZUxhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgaGlkZUxhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbDtcclxuICB9XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJvd3M6IG51bWJlciA9IDM7XHJcbiAgQElucHV0KCkgY29sczogbnVtYmVyID0gNTA7XHJcbiAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZTogJ25vbmUnIHwgJ2JvdGgnIHwgJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBudWxsID0gbnVsbDsgLy8gQWx0dXJhIGZpamEgZW4gcMOteGVsZXNcclxuXHJcbiAgLy8gU29wb3J0ZSBwYXJhIG5nQ2xhc3NcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8vIFZhbGlkYWNpb25lcyBpbnRlZ3JhZGFzXHJcbiAgQElucHV0KCkgc2FOdW1iZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsbG93RGVjaW1hbHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhbGxvd05lZ2F0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbWF4RGVjaW1hbHM6IG51bWJlciA9IDI7XHJcblxyXG4gIEBJbnB1dCgpIHNhTGV0dGVyc09ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhbGxvd1NwYWNlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYWxsb3dBY2NlbnRzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzaW4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3Vzb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gUmVmZXJlbmNpYSBhbCBlbGVtZW50byB0ZXh0YXJlYSBuYXRpdm9cclxuICBAVmlld0NoaWxkKCd0ZXh0YXJlYUVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZXh0YXJlYUVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+O1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgLy8gVmFyaWFibGVzIHBhcmEgdmFsaWRhY2nDs24gZGUgbsO6bWVyb3NcclxuICBwcml2YXRlIG51bWJlcnNSZWdleCE6IFJlZ0V4cDtcclxuICBwcml2YXRlIGlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IGZhbHNlO1xyXG5cclxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBsZXRyYXNcclxuICBwcml2YXRlIGxldHRlcnNSZWdleCE6IFJlZ0V4cDtcclxuXHJcbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRhcmVhQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tY29udHJvbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWNvbnRyb2wtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1jb250cm9sLWxnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1jb250cm9sJ107XHJcbiAgICBcclxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tbGFiZWwgbGFiZWwtc20nLFxyXG4gICAgICAnbWQnOiAnZm9ybS1sYWJlbCBsYWJlbC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLWxhYmVsIGxhYmVsLWxnJ1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBzaXplTWFwW3RoaXMuc2l6ZV0gfHwgJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnO1xyXG4gICAgXHJcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcclxuICAgIGlmICh0aGlzLm5vTGFiZWwgJiYgIXRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gZ2hvc3QtbGFiZWxgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gU2kgaGlkZUxhYmVsIGVzdMOhIGFjdGl2bywgbnVuY2EgbW9zdHJhciBlbCBsYWJlbFxyXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXHJcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0YXJlYVN0eWxlcygpOiBhbnkge1xyXG4gICAgY29uc3Qgc3R5bGVzOiBhbnkgPSB7fTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuaGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIEN1YW5kbyBzZSBlc3BlY2lmaWNhIGFsdHVyYSwgdXNhciBhbHR1cmEgZmlqYSB5IGRlc2hhYmlsaXRhciByZXNpemVcclxuICAgICAgc3R5bGVzLmhlaWdodCA9IGAke3RoaXMuaGVpZ2h0fXB4YDtcclxuICAgICAgc3R5bGVzLnJlc2l6ZSA9ICdub25lJztcclxuICAgICAgc3R5bGVzLm92ZXJmbG93WSA9ICdhdXRvJzsgLy8gSGFiaWxpdGFyIHNjcm9sbCB2ZXJ0aWNhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ29tcG9ydGFtaWVudG8gbm9ybWFsIGN1YW5kbyBubyBoYXkgYWx0dXJhIGVzcGVjaWZpY2FkYVxyXG4gICAgICBzdHlsZXMucmVzaXplID0gdGhpcy5yZXNpemU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uVGV4dGFyZWFGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0YXJlYUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5mb2N1c291dC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uVGV4dGFyZWFDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzWydhbGxvd0RlY2ltYWxzJ10gfHwgY2hhbmdlc1snYWxsb3dOZWdhdGl2ZSddIHx8IGNoYW5nZXNbJ21heERlY2ltYWxzJ10pIHtcclxuICAgICAgdGhpcy51cGRhdGVOdW1iZXJzUmVnZXgoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzWydhbGxvd1NwYWNlcyddIHx8IGNoYW5nZXNbJ2FsbG93QWNjZW50cyddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGV0dGVyc1JlZ2V4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09IFZBTElEQUNJw5NOIERFIE7Dmk1FUk9TID09PT09PT09PT1cclxuICBwcml2YXRlIHVwZGF0ZU51bWJlcnNSZWdleCgpOiB2b2lkIHtcclxuICAgIGxldCBwYXR0ZXJuID0gJ1teMC05JztcclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzKSB7XHJcbiAgICAgIHBhdHRlcm4gKz0gJy4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmFsbG93TmVnYXRpdmUpIHtcclxuICAgICAgcGF0dGVybiArPSAnLSc7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0dGVybiArPSAnXSc7XHJcbiAgICB0aGlzLm51bWJlcnNSZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRGb3JOdW1iZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5IHx8IHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGluaXRpYWxWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSB0cnVlO1xyXG4gICAgbGV0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgICAvLyBQcmltZXJvIGVsaW1pbmFyIHRvZG9zIGxvcyBjYXJhY3RlcmVzIG5vIHbDoWxpZG9zIGV4Y2VwdG8gcHVudG9zIHkgc2lnbm9zXHJcbiAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XHJcblxyXG4gICAgLy8gUmVtb3ZlciBwdW50b3MgZGVjaW1hbGVzIHNpIG5vIGVzdMOhbiBwZXJtaXRpZG9zXHJcbiAgICBpZiAoIXRoaXMuYWxsb3dEZWNpbWFscykge1xyXG4gICAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXIgZm9ybWF0byBkZSBkZWNpbWFsZXNcclxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRWYWx1ZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBwdW50byBkZWNpbWFsXHJcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9IHBhcnRzWzBdICsgJy4nICsgcGFydHMuc2xpY2UoMSkuam9pbignJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlLXNwbGl0IGRlc3B1w6lzIGRlIGxpbXBpYXJcclxuICAgICAgY29uc3QgY2xlYW5QYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgIC8vIExpbWl0YXIgZGVjaW1hbGVzXHJcbiAgICAgIGlmIChjbGVhblBhcnRzWzFdICYmIGNsZWFuUGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xyXG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBjbGVhblBhcnRzWzBdICsgJy4nICsgY2xlYW5QYXJ0c1sxXS5zdWJzdHJpbmcoMCwgdGhpcy5tYXhEZWNpbWFscyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmVyIHNpZ25vIG5lZ2F0aXZvIHNpIG5vIGVzdMOhIHBlcm1pdGlkbyBvIHNpIGVzdMOhIG1hbCBwb3NpY2lvbmFkb1xyXG4gICAgaWYgKCF0aGlzLmFsbG93TmVnYXRpdmUpIHtcclxuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTb2xvIHBlcm1pdGlyIHVuIHNpZ25vIG5lZ2F0aXZvIGFsIGluaWNpb1xyXG4gICAgICBjb25zdCBoYXNOZWdhdGl2ZSA9IGZpbHRlcmVkVmFsdWUuc3RhcnRzV2l0aCgnLScpO1xyXG4gICAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKC8tL2csICcnKTtcclxuICAgICAgaWYgKGhhc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9ICctJyArIGZpbHRlcmVkVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSBmaWx0ZXJlZFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xyXG4gICAgICBjb25zdCBsZW5ndGhEaWZmID0gaW5pdGlhbFZhbHVlLmxlbmd0aCAtIGZpbHRlcmVkVmFsdWUubGVuZ3RoO1xyXG5cclxuICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKGZpbHRlcmVkVmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XHJcblxyXG4gICAgICAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBkZWwgY3Vyc29yXHJcbiAgICAgIGNvbnN0IG5ld0N1cnNvclBvc2l0aW9uID0gTWF0aC5tYXgoMCwgY3Vyc29yUG9zaXRpb24gLSBsZW5ndGhEaWZmKTtcclxuICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShuZXdDdXJzb3JQb3NpdGlvbiwgbmV3Q3Vyc29yUG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzRm9yTnVtYmVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xyXG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcblxyXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2xcclxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdEZWxldGUnIHx8XHJcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XHJcbiAgICAgICAgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBlcm1pdGlyIHB1bnRvIGRlY2ltYWwgc29sbyBzaSBubyBleGlzdGUgdW5vIHlhXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGNoYXIgPT09ICcuJykge1xyXG4gICAgICBpZiAoY3VycmVudFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGVybWl0aXIgc2lnbm8gbmVnYXRpdm8gYWwgaW5pY2lvXHJcbiAgICBpZiAodGhpcy5hbGxvd05lZ2F0aXZlICYmIGNoYXIgPT09ICctJykge1xyXG4gICAgICBpZiAoY3Vyc29yUG9zaXRpb24gPT09IDAgJiYgIWN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLScpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTb2xvIHBlcm1pdGlyIG7Dum1lcm9zXHJcbiAgICBpZiAoIS9eXFxkJC8udGVzdChjaGFyKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhciBtw6F4aW1vIGRlIGRlY2ltYWxlcyBzaSB5YSBleGlzdGUgdW4gcHVudG9cclxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgY3VycmVudFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgY29uc3QgcGFydHMgPSBjdXJyZW50VmFsdWUuc3BsaXQoJy4nKTtcclxuICAgICAgY29uc3QgZGVjaW1hbFBhcnQgPSBwYXJ0c1sxXSB8fCAnJztcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZCA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XHJcbiAgICAgIGNvbnN0IGRlY2ltYWxTdGFydFBvc2l0aW9uID0gcGFydHNbMF0ubGVuZ3RoICsgMTtcclxuXHJcbiAgICAgIC8vIFNpIGVsIGN1cnNvciBlc3TDoSBkZXNwdcOpcyBkZWwgcHVudG8geSB5YSBoYXkgbWF4RGVjaW1hbHMgZMOtZ2l0b3MgKHNpbiBzZWxlY2Npw7NuKVxyXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPj0gZGVjaW1hbFN0YXJ0UG9zaXRpb24gJiZcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQgJiZcclxuICAgICAgICAgIGRlY2ltYWxQYXJ0Lmxlbmd0aCA+PSB0aGlzLm1heERlY2ltYWxzKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QYXN0ZUZvck51bWJlcnMoZXZlbnQ6IENsaXBib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JykgfHwgJyc7XHJcbiAgICBsZXQgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XHJcblxyXG4gICAgLy8gVmFsaWRhciBmb3JtYXRvIGRlIGRlY2ltYWxlcyBlbiB0ZXh0byBwZWdhZG9cclxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRUZXh0LmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgY29uc3QgcGFydHMgPSBmaWx0ZXJlZFRleHQuc3BsaXQoJy4nKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFydHNbMV0gJiYgcGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xyXG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xyXG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XHJcbiAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCwgc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09IFZBTElEQUNJw5NOIERFIExFVFJBUyA9PT09PT09PT09XHJcbiAgcHJpdmF0ZSB1cGRhdGVMZXR0ZXJzUmVnZXgoKTogdm9pZCB7XHJcbiAgICBsZXQgcGF0dGVybiA9ICdbXmEtekEtWic7XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dTcGFjZXMpIHtcclxuICAgICAgcGF0dGVybiArPSAnICc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dBY2NlbnRzKSB7XHJcbiAgICAgIHBhdHRlcm4gKz0gJ8Ohw6nDrcOzw7rDgcOJw43Dk8Oaw7HDkcO8w5wnO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdHRlcm4gKz0gJ10nO1xyXG4gICAgdGhpcy5sZXR0ZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Rm9yTGV0dGVycyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKS5yZXBsYWNlKHRoaXMubGV0dGVyc1JlZ2V4LCAnJyk7XHJcblxyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UoZmlsdGVyZWRWYWx1ZSk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWx0ZXJlZFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5UHJlc3NGb3JMZXR0ZXJzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcclxuXHJcbiAgICAvLyBQZXJtaXRpciB0ZWNsYXMgZGUgY29udHJvbFxyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcclxuICAgICAgICBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHxcclxuICAgICAgICBldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGV0dGVyc1JlZ2V4LnRlc3QoY2hhcikpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFzdGVGb3JMZXR0ZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xyXG4gICAgY29uc3QgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMubGV0dGVyc1JlZ2V4LCAnJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xyXG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XHJcbiAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCwgc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJcIj5cclxuICA8bGFiZWwgKm5nSWY9XCJzaG91bGRTaG93TGFiZWxcIiBbZm9yXT1cImlkXCIgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiPlxyXG4gICAge3sgbGFiZWwgfX1cclxuICAgIDxzcGFuICpuZ0lmPVwicmVxdWlyZWQgJiYgbGFiZWxcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8dGV4dGFyZWFcclxuICAgICN0ZXh0YXJlYUVsZW1lbnRcclxuICAgIFtpZF09XCJpZFwiXHJcbiAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgIFtjbGFzc109XCJ0ZXh0YXJlYUNsYXNzZXNcIlxyXG4gICAgW3N0eWxlXT1cInRleHRhcmVhU3R5bGVzXCJcclxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICBbcm93c109XCJyb3dzXCJcclxuICAgIFtjb2xzXT1cImNvbHNcIlxyXG4gICAgW21pbmxlbmd0aF09XCJtaW5sZW5ndGhcIlxyXG4gICAgW21heGxlbmd0aF09XCJtYXhsZW5ndGhcIlxyXG4gICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICBhdXRvY29ycmVjdD1cIm9mZlwiXHJcbiAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcbiAgICBkYXRhLWdyYW1tPVwiZmFsc2VcIlxyXG4gICAgZGF0YS1ncmFtbV9lZGl0b3I9XCJmYWxzZVwiXHJcbiAgICBkYXRhLWVuYWJsZS1ncmFtbWFybHk9XCJmYWxzZVwiXHJcbiAgICAoZm9jdXMpPVwib25UZXh0YXJlYUZvY3VzKCRldmVudClcIlxyXG4gICAgKGJsdXIpPVwib25UZXh0YXJlYUJsdXIoJGV2ZW50KVwiXHJcbiAgICAoY2hhbmdlKT1cIm9uVGV4dGFyZWFDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAoaW5wdXQpPVwic2FOdW1iZXJzT25seSA/IG9uSW5wdXRGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uSW5wdXRGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXHJcbiAgICAoa2V5cHJlc3MpPVwic2FOdW1iZXJzT25seSA/IG9uS2V5UHJlc3NGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uS2V5UHJlc3NGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXHJcbiAgICAocGFzdGUpPVwic2FOdW1iZXJzT25seSA/IG9uUGFzdGVGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uUGFzdGVGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXHJcbiAgPjwvdGV4dGFyZWE+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0ICYmICFlcnJvclRleHRcIiBjbGFzcz1cImZvcm0tdGV4dFwiPnt7IGhlbHBlclRleHQgfX08L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrIGQtYmxvY2tcIj57eyBlcnJvclRleHQgfX08L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==