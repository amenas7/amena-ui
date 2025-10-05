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
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.focusin.emit(event);
    }
    onTextareaBlur(event) {
        this.isFocused = false;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
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
        ], viewQueries: [{ propertyName: "textareaElement", first: true, predicate: ["textareaElement"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    #textareaElement\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focusin)=\"onTextareaFocus($event)\"\r\n    (focusout)=\"onTextareaBlur($event)\"\r\n    (change)=\"onTextareaChange($event)\"\r\n    (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\r\n    (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : null)\"\r\n    (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaTextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-textarea', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaTextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\r\n    {{ label }}\r\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n  </label>\r\n\r\n  <textarea\r\n    #textareaElement\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    [class]=\"textareaClasses\"\r\n    [style]=\"textareaStyles\"\r\n    [(ngModel)]=\"value\"\r\n    (ngModelChange)=\"onModelChange($event)\"\r\n    [placeholder]=\"placeholder\"\r\n    [required]=\"required\"\r\n    [readonly]=\"readonly\"\r\n    [disabled]=\"disabled\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [minlength]=\"minlength\"\r\n    [maxlength]=\"maxlength\"\r\n    spellcheck=\"false\"\r\n    autocomplete=\"off\"\r\n    autocorrect=\"off\"\r\n    autocapitalize=\"off\"\r\n    data-gramm=\"false\"\r\n    data-gramm_editor=\"false\"\r\n    data-enable-grammarly=\"false\"\r\n    (focusin)=\"onTextareaFocus($event)\"\r\n    (focusout)=\"onTextareaBlur($event)\"\r\n    (change)=\"onTextareaChange($event)\"\r\n    (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\r\n    (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : null)\"\r\n    (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\r\n  ></textarea>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:13px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:13px!important}:host .form-label.label-lg{font-size:15px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:30px;padding:8px 12px;font-size:13px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:6px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;resize:vertical;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(textarea){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS10ZXh0YXJlYS9zYS10ZXh0YXJlYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXRleHRhcmVhL3NhLXRleHRhcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLElBQUksR0FBaUIsSUFBSSxDQUFDO0lBQzFCLE1BQU0sR0FBbUIsU0FBUyxDQUFDO0lBQ25DLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFNUI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxVQUFVLEdBQVksS0FBSyxDQUFDO0lBQ3BDLElBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ2hDLElBQUks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QUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFLeUMsZUFBZTtzQkFBOUQsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBYzFDLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgVGV4dGFyZWFTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBUZXh0YXJlYVN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2EtdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NhLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FUZXh0YXJlYUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBzaXplOiBUZXh0YXJlYVNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogVGV4dGFyZWFTdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlTnVtYmVyc1JlZ2V4KCk7XHJcbiAgICB0aGlzLnVwZGF0ZUxldHRlcnNSZWdleCgpO1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xyXG4gIH1cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcm93czogbnVtYmVyID0gMztcclxuICBASW5wdXQoKSBjb2xzOiBudW1iZXIgPSA1MDtcclxuICBASW5wdXQoKSBtaW5sZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgcmVzaXplOiAnbm9uZScgfCAnYm90aCcgfCAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IG51bGwgPSBudWxsOyAvLyBBbHR1cmEgZmlqYSBlbiBww614ZWxlc1xyXG5cclxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLy8gVmFsaWRhY2lvbmVzIGludGVncmFkYXNcclxuICBASW5wdXQoKSBzYU51bWJlcnNPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWxsb3dEZWNpbWFsczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhEZWNpbWFsczogbnVtYmVyID0gMjtcclxuXHJcbiAgQElucHV0KCkgc2FMZXR0ZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsbG93U3BhY2VzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBhbGxvd0FjY2VudHM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNpbiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXNvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBSZWZlcmVuY2lhIGFsIGVsZW1lbnRvIHRleHRhcmVhIG5hdGl2b1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHRleHRhcmVhRWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBuw7ptZXJvc1xyXG4gIHByaXZhdGUgbnVtYmVyc1JlZ2V4ITogUmVnRXhwO1xyXG4gIHByaXZhdGUgaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XHJcblxyXG4gIC8vIFZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpw7NuIGRlIGxldHJhc1xyXG4gIHByaXZhdGUgbGV0dGVyc1JlZ2V4ITogUmVnRXhwO1xyXG5cclxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dGFyZWFDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jb250cm9sLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tY29udHJvbC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLWNvbnRyb2wtbGcnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNvbnRyb2wnXTtcclxuICAgIFxyXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCAmJiAhdGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGAke2Jhc2VDbGFzc2VzfSBnaG9zdC1sYWJlbGA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcclxuICB9XHJcblxyXG4gIGdldCBzaG91bGRTaG93TGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXHJcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRhcmVhU3R5bGVzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5oZWlnaHQgIT09IG51bGwpIHtcclxuICAgICAgLy8gQ3VhbmRvIHNlIGVzcGVjaWZpY2EgYWx0dXJhLCB1c2FyIGFsdHVyYSBmaWphIHkgZGVzaGFiaWxpdGFyIHJlc2l6ZVxyXG4gICAgICBzdHlsZXMuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHR9cHhgO1xyXG4gICAgICBzdHlsZXMucmVzaXplID0gJ25vbmUnO1xyXG4gICAgICBzdHlsZXMub3ZlcmZsb3dZID0gJ2F1dG8nOyAvLyBIYWJpbGl0YXIgc2Nyb2xsIHZlcnRpY2FsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDb21wb3J0YW1pZW50byBub3JtYWwgY3VhbmRvIG5vIGhheSBhbHR1cmEgZXNwZWNpZmljYWRhXHJcbiAgICAgIHN0eWxlcy5yZXNpemUgPSB0aGlzLnJlc2l6ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0YXJlYUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0YXJlYUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuZm9jdXNvdXQuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblRleHRhcmVhQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snYWxsb3dEZWNpbWFscyddIHx8IGNoYW5nZXNbJ2FsbG93TmVnYXRpdmUnXSB8fCBjaGFuZ2VzWydtYXhEZWNpbWFscyddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTnVtYmVyc1JlZ2V4KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlc1snYWxsb3dTcGFjZXMnXSB8fCBjaGFuZ2VzWydhbGxvd0FjY2VudHMnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxldHRlcnNSZWdleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBOw5pNRVJPUyA9PT09PT09PT09XHJcbiAgcHJpdmF0ZSB1cGRhdGVOdW1iZXJzUmVnZXgoKTogdm9pZCB7XHJcbiAgICBsZXQgcGF0dGVybiA9ICdbXjAtOSc7XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscykge1xyXG4gICAgICBwYXR0ZXJuICs9ICcuJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hbGxvd05lZ2F0aXZlKSB7XHJcbiAgICAgIHBhdHRlcm4gKz0gJy0nO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdHRlcm4gKz0gJ10nO1xyXG4gICAgdGhpcy5udW1iZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Rm9yTnVtYmVycyhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSB8fCB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gdHJ1ZTtcclxuICAgIGxldCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgLy8gUHJpbWVybyBlbGltaW5hciB0b2RvcyBsb3MgY2FyYWN0ZXJlcyBubyB2w6FsaWRvcyBleGNlcHRvIHB1bnRvcyB5IHNpZ25vc1xyXG4gICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSh0aGlzLm51bWJlcnNSZWdleCwgJycpO1xyXG5cclxuICAgIC8vIFJlbW92ZXIgcHVudG9zIGRlY2ltYWxlcyBzaSBubyBlc3TDoW4gcGVybWl0aWRvc1xyXG4gICAgaWYgKCF0aGlzLmFsbG93RGVjaW1hbHMpIHtcclxuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvXFwuL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGZpbHRlcmVkVmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgIC8vIFNvbG8gcGVybWl0aXIgdW4gcHVudG8gZGVjaW1hbFxyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZS1zcGxpdCBkZXNwdcOpcyBkZSBsaW1waWFyXHJcbiAgICAgIGNvbnN0IGNsZWFuUGFydHMgPSBmaWx0ZXJlZFZhbHVlLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAvLyBMaW1pdGFyIGRlY2ltYWxlc1xyXG4gICAgICBpZiAoY2xlYW5QYXJ0c1sxXSAmJiBjbGVhblBhcnRzWzFdLmxlbmd0aCA+IHRoaXMubWF4RGVjaW1hbHMpIHtcclxuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gY2xlYW5QYXJ0c1swXSArICcuJyArIGNsZWFuUGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlciBzaWdubyBuZWdhdGl2byBzaSBubyBlc3TDoSBwZXJtaXRpZG8gbyBzaSBlc3TDoSBtYWwgcG9zaWNpb25hZG9cclxuICAgIGlmICghdGhpcy5hbGxvd05lZ2F0aXZlKSB7XHJcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cclxuICAgICAgY29uc3QgaGFzTmVnYXRpdmUgPSBmaWx0ZXJlZFZhbHVlLnN0YXJ0c1dpdGgoJy0nKTtcclxuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XHJcbiAgICAgIGlmIChoYXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSAnLScgKyBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcclxuICAgICAgY29uc3QgbGVuZ3RoRGlmZiA9IGluaXRpYWxWYWx1ZS5sZW5ndGggLSBmaWx0ZXJlZFZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShmaWx0ZXJlZFZhbHVlKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGZpbHRlcmVkVmFsdWUpO1xyXG5cclxuICAgICAgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gZGVsIGN1cnNvclxyXG4gICAgICBjb25zdCBuZXdDdXJzb3JQb3NpdGlvbiA9IE1hdGgubWF4KDAsIGN1cnNvclBvc2l0aW9uIC0gbGVuZ3RoRGlmZik7XHJcbiAgICAgIHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yUG9zaXRpb24sIG5ld0N1cnNvclBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25LZXlQcmVzc0Zvck51bWJlcnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xyXG5cclxuICAgIC8vIFBlcm1pdGlyIHRlY2xhcyBkZSBjb250cm9sXHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fFxyXG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fFxyXG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQZXJtaXRpciBwdW50byBkZWNpbWFsIHNvbG8gc2kgbm8gZXhpc3RlIHVubyB5YVxyXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBjaGFyID09PSAnLicpIHtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBlcm1pdGlyIHNpZ25vIG5lZ2F0aXZvIGFsIGluaWNpb1xyXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSAmJiBjaGFyID09PSAnLScpIHtcclxuICAgICAgaWYgKGN1cnNvclBvc2l0aW9uID09PSAwICYmICFjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy0nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU29sbyBwZXJtaXRpciBuw7ptZXJvc1xyXG4gICAgaWYgKCEvXlxcZCQvLnRlc3QoY2hhcikpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXIgbcOheGltbyBkZSBkZWNpbWFsZXMgc2kgeWEgZXhpc3RlIHVuIHB1bnRvXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VycmVudFZhbHVlLnNwbGl0KCcuJyk7XHJcbiAgICAgIGNvbnN0IGRlY2ltYWxQYXJ0ID0gcGFydHNbMV0gfHwgJyc7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xyXG4gICAgICBjb25zdCBkZWNpbWFsU3RhcnRQb3NpdGlvbiA9IHBhcnRzWzBdLmxlbmd0aCArIDE7XHJcblxyXG4gICAgICAvLyBTaSBlbCBjdXJzb3IgZXN0w6EgZGVzcHXDqXMgZGVsIHB1bnRvIHkgeWEgaGF5IG1heERlY2ltYWxzIGTDrWdpdG9zIChzaW4gc2VsZWNjacOzbilcclxuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID49IGRlY2ltYWxTdGFydFBvc2l0aW9uICYmXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9PT0gc2VsZWN0aW9uRW5kICYmXHJcbiAgICAgICAgICBkZWNpbWFsUGFydC5sZW5ndGggPj0gdGhpcy5tYXhEZWNpbWFscykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFzdGVGb3JOdW1iZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xyXG4gICAgbGV0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLm51bWJlcnNSZWdleCwgJycpO1xyXG5cclxuICAgIC8vIFZhbGlkYXIgZm9ybWF0byBkZSBkZWNpbWFsZXMgZW4gdGV4dG8gcGVnYWRvXHJcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGZpbHRlcmVkVGV4dC5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRUZXh0LnNwbGl0KCcuJyk7XHJcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgZmlsdGVyZWRUZXh0ID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0cy5zbGljZSgxKS5qb2luKCcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcnRzWzFdICYmIHBhcnRzWzFdLmxlbmd0aCA+IHRoaXMubWF4RGVjaW1hbHMpIHtcclxuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzWzFdLnN1YnN0cmluZygwLCB0aGlzLm1heERlY2ltYWxzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcclxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XHJcblxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgZmlsdGVyZWRUZXh0ICsgY3VycmVudFZhbHVlLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBMRVRSQVMgPT09PT09PT09PVxyXG4gIHByaXZhdGUgdXBkYXRlTGV0dGVyc1JlZ2V4KCk6IHZvaWQge1xyXG4gICAgbGV0IHBhdHRlcm4gPSAnW15hLXpBLVonO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbG93U3BhY2VzKSB7XHJcbiAgICAgIHBhdHRlcm4gKz0gJyAnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmFsbG93QWNjZW50cykge1xyXG4gICAgICBwYXR0ZXJuICs9ICfDocOpw63Ds8O6w4HDicONw5PDmsOxw5HDvMOcJztcclxuICAgIH1cclxuXHJcbiAgICBwYXR0ZXJuICs9ICddJztcclxuICAgIHRoaXMubGV0dGVyc1JlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEZvckxldHRlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSkucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xyXG5cclxuICAgIGlmIChpbml0aWFsVmFsdWUgIT09IGZpbHRlcmVkVmFsdWUpIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKGZpbHRlcmVkVmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleVByZXNzRm9yTGV0dGVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XHJcblxyXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2xcclxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdEZWxldGUnIHx8XHJcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XHJcbiAgICAgICAgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxldHRlcnNSZWdleC50ZXN0KGNoYXIpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBhc3RlRm9yTGV0dGVycyhldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcclxuICAgIGNvbnN0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xyXG5cclxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcclxuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XHJcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMudGV4dGFyZWFFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XHJcblxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgZmlsdGVyZWRUZXh0ICsgY3VycmVudFZhbHVlLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICB0aGlzLnRleHRhcmVhRWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYUVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJpZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cclxuICAgIHt7IGxhYmVsIH19XHJcbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPHRleHRhcmVhXHJcbiAgICAjdGV4dGFyZWFFbGVtZW50XHJcbiAgICBbaWRdPVwiaWRcIlxyXG4gICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICBbY2xhc3NdPVwidGV4dGFyZWFDbGFzc2VzXCJcclxuICAgIFtzdHlsZV09XCJ0ZXh0YXJlYVN0eWxlc1wiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW3Jvd3NdPVwicm93c1wiXHJcbiAgICBbY29sc109XCJjb2xzXCJcclxuICAgIFttaW5sZW5ndGhdPVwibWlubGVuZ3RoXCJcclxuICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG4gICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxyXG4gICAgZGF0YS1ncmFtbT1cImZhbHNlXCJcclxuICAgIGRhdGEtZ3JhbW1fZWRpdG9yPVwiZmFsc2VcIlxyXG4gICAgZGF0YS1lbmFibGUtZ3JhbW1hcmx5PVwiZmFsc2VcIlxyXG4gICAgKGZvY3VzaW4pPVwib25UZXh0YXJlYUZvY3VzKCRldmVudClcIlxyXG4gICAgKGZvY3Vzb3V0KT1cIm9uVGV4dGFyZWFCbHVyKCRldmVudClcIlxyXG4gICAgKGNoYW5nZSk9XCJvblRleHRhcmVhQ2hhbmdlKCRldmVudClcIlxyXG4gICAgKGlucHV0KT1cInNhTnVtYmVyc09ubHkgPyBvbklucHV0Rm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvbklucHV0Rm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxyXG4gICAgKGtleXByZXNzKT1cInNhTnVtYmVyc09ubHkgPyBvbktleVByZXNzRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvbktleVByZXNzRm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxyXG4gICAgKHBhc3RlKT1cInNhTnVtYmVyc09ubHkgPyBvblBhc3RlRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvblBhc3RlRm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxyXG4gID48L3RleHRhcmVhPlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=