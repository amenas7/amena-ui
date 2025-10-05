import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, ViewChild, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../sa-icon/sa-icon.component";
export class SaInputComponent {
    value = '';
    type = 'text';
    placeholder = '';
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
    helperText = '';
    errorText = '';
    leftIcon = '';
    rightIcon = '';
    required = false;
    readonly = false;
    disabled = false;
    id = '';
    name = '';
    autocomplete = 'off';
    min = null;
    max = null;
    minlength = null;
    maxlength = null;
    pattern = '';
    backgroundColor = '';
    textColor = '';
    boldText = false; // Hacer el texto del input bold
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
    keyup = new EventEmitter();
    keydown = new EventEmitter();
    keypress = new EventEmitter();
    enter = new EventEmitter();
    showPassword = false;
    isFocused = false;
    // Referencia al elemento input nativo
    inputElement;
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
    get inputClasses() {
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
        if (this.noLabel) {
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
    get inputGroupClasses() {
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
    get inputType() {
        if (this.type === 'password') {
            return this.showPassword ? 'text' : 'password';
        }
        return this.type;
    }
    get inputStyles() {
        const styles = {};
        if (this.backgroundColor) {
            styles['background-color'] = this.backgroundColor;
        }
        if (this.textColor) {
            styles['color'] = this.textColor;
        }
        return styles;
    }
    get helperTextClasses() {
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
    get errorTextClasses() {
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
    writeValue(value) {
        this.value = value ?? '';
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
    onInputFocus(event) {
        this.isFocused = true;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.focusin.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.onTouched();
        this.focusout.emit(event);
    }
    onKeyUp(event) {
        this.keyup.emit(event);
        // Emitir evento específico para Enter
        if (event.key === 'Enter') {
            this.enter.emit(event);
        }
    }
    onKeyDown(event) {
        this.keydown.emit(event);
    }
    onKeyPress(event) {
        this.keypress.emit(event);
    }
    onInputChange(event) {
        this.change.emit(event);
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    // Métodos públicos para acceso al input nativo
    /**
     * Enfoca el input
     */
    focusInput() {
        if (this.inputElement?.nativeElement) {
            this.inputElement.nativeElement.focus();
        }
    }
    /**
     * Quita el foco del input
     */
    blurInput() {
        if (this.inputElement?.nativeElement) {
            this.inputElement.nativeElement.blur();
        }
    }
    /**
     * Selecciona todo el texto del input
     */
    selectAll() {
        if (this.inputElement?.nativeElement) {
            this.inputElement.nativeElement.select();
        }
    }
    /**
     * Obtiene la referencia al elemento input nativo
     */
    getNativeInput() {
        return this.inputElement?.nativeElement || null;
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
    onKeyPressForNumbers(event) {
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
    onKeyPressForLetters(event) {
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
    onPasteForLetters(event) {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { value: "value", type: "type", placeholder: "placeholder", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", leftIcon: "leftIcon", rightIcon: "rightIcon", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", autocomplete: "autocomplete", min: "min", max: "max", minlength: "minlength", maxlength: "maxlength", pattern: "pattern", backgroundColor: "backgroundColor", textColor: "textColor", boldText: "boldText", class: "class", saNumbersOnly: "saNumbersOnly", allowDecimals: "allowDecimals", allowNegative: "allowNegative", maxDecimals: "maxDecimals", saLettersOnly: "saLettersOnly", allowSpaces: "allowSpaces", allowAccents: "allowAccents" }, outputs: { valueChange: "valueChange", change: "change", focusin: "focusin", focusout: "focusout", keyup: "keyup", keydown: "keydown", keypress: "keypress", enter: "enter" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"\">\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"md\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      #inputElement\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focusin)=\"onInputFocus($event)\"\n      (focusout)=\"onInputBlur($event)\"\n      (change)=\"onInputChange($event)\"\n      (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\n      (keyup)=\"onKeyUp($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : onKeyPress($event))\"\n      (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-control.input-bold{font-weight:700!important}:host .form-control.input-bold::placeholder{font-weight:400!important}:host .form-control.input-bold::-webkit-input-placeholder{font-weight:400!important}:host .form-control.input-bold::-moz-placeholder{font-weight:400!important}:host .form-control.input-bold:-ms-input-placeholder{font-weight:400!important}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:36px;padding:7px 12px;font-size:12px;border-radius:3px}:host .input-group.input-group-md>.form-control,:host .input-group.input-group-md>.input-group-text{min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:44px;padding:10px 14px;font-size:15px;border-radius:5px}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .input-group-text{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .input-group-text{min-height:44px;padding:10px 14px;font-size:15px}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .btn-outline-secondary{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .btn-outline-secondary{min-height:44px;padding:10px 14px;font-size:15px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:14px}:host sa-icon[size=sm] svg{height:14px;width:14px}:host sa-icon[size=md]{font-size:16px}:host sa-icon[size=md] svg{height:16px;width:16px}:host sa-icon[size=lg]{font-size:20px}:host sa-icon[size=lg] svg{height:20px;width:20px}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:16px}:host .input-group-sm .input-group-text sa-icon svg{width:16px;height:16px}:host .input-group-md .input-group-text sa-icon{font-size:18px}:host .input-group-md .input-group-text sa-icon svg{width:18px;height:18px}:host .input-group-lg .input-group-text sa-icon{font-size:22px}:host .input-group-lg .input-group-text sa-icon svg{width:22px;height:22px}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:16px}:host .input-group-sm .btn sa-icon svg{width:16px;height:16px}:host .input-group-md .btn sa-icon{font-size:18px}:host .input-group-md .btn sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn sa-icon{font-size:22px}:host .input-group-lg .btn sa-icon svg{width:22px;height:22px}:host .input-group .btn-outline-secondary{min-height:40px;display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:36px}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:16px}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:16px;height:16px}:host .input-group-md .btn-outline-secondary{min-height:40px}:host .input-group-md .btn-outline-secondary sa-icon{font-size:18px}:host .input-group-md .btn-outline-secondary sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn-outline-secondary{min-height:44px}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:22px}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:22px;height:22px}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', encapsulation: ViewEncapsulation.ShadowDom, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"md\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      #inputElement\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focusin)=\"onInputFocus($event)\"\n      (focusout)=\"onInputBlur($event)\"\n      (change)=\"onInputChange($event)\"\n      (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\n      (keyup)=\"onKeyUp($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : onKeyPress($event))\"\n      (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-control.input-bold{font-weight:700!important}:host .form-control.input-bold::placeholder{font-weight:400!important}:host .form-control.input-bold::-webkit-input-placeholder{font-weight:400!important}:host .form-control.input-bold::-moz-placeholder{font-weight:400!important}:host .form-control.input-bold:-ms-input-placeholder{font-weight:400!important}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:36px;padding:7px 12px;font-size:12px;border-radius:3px}:host .input-group.input-group-md>.form-control,:host .input-group.input-group-md>.input-group-text{min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:44px;padding:10px 14px;font-size:15px;border-radius:5px}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .input-group-text{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .input-group-text{min-height:44px;padding:10px 14px;font-size:15px}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .btn-outline-secondary{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .btn-outline-secondary{min-height:44px;padding:10px 14px;font-size:15px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:14px}:host sa-icon[size=sm] svg{height:14px;width:14px}:host sa-icon[size=md]{font-size:16px}:host sa-icon[size=md] svg{height:16px;width:16px}:host sa-icon[size=lg]{font-size:20px}:host sa-icon[size=lg] svg{height:20px;width:20px}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:16px}:host .input-group-sm .input-group-text sa-icon svg{width:16px;height:16px}:host .input-group-md .input-group-text sa-icon{font-size:18px}:host .input-group-md .input-group-text sa-icon svg{width:18px;height:18px}:host .input-group-lg .input-group-text sa-icon{font-size:22px}:host .input-group-lg .input-group-text sa-icon svg{width:22px;height:22px}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:16px}:host .input-group-sm .btn sa-icon svg{width:16px;height:16px}:host .input-group-md .btn sa-icon{font-size:18px}:host .input-group-md .btn sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn sa-icon{font-size:22px}:host .input-group-lg .btn sa-icon svg{width:22px;height:22px}:host .input-group .btn-outline-secondary{min-height:40px;display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:36px}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:16px}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:16px;height:16px}:host .input-group-md .btn-outline-secondary{min-height:40px}:host .input-group-md .btn-outline-secondary sa-icon{font-size:18px}:host .input-group-md .btn-outline-secondary sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn-outline-secondary{min-height:44px}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:22px}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:22px;height:22px}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], placeholder: [{
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
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], rightIcon: [{
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
            }], autocomplete: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], pattern: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }], boldText: [{
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
            }], keyup: [{
                type: Output
            }], keydown: [{
                type: Output
            }], keypress: [{
                type: Output
            }], enter: [{
                type: Output
            }], inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdMLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFvQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixJQUFJLEdBQWMsTUFBTSxDQUFDO0lBQ3pCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRTVCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZ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QVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFNc0MsWUFBWTtzQkFBeEQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQWN2QyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3RlbCc7XG5leHBvcnQgdHlwZSBJbnB1dFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2EtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiBJbnB1dFR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2l6ZTogSW5wdXRTaXplID0gJ21kJztcbiAgQElucHV0KCkgc3RhdHVzOiBJbnB1dFN0YXR1cyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXBkYXRlTnVtYmVyc1JlZ2V4KCk7XG4gICAgdGhpcy51cGRhdGVMZXR0ZXJzUmVnZXgoKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbDtcbiAgfVxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGVmdEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSByaWdodEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZyA9ICdvZmYnO1xuICBASW5wdXQoKSBtaW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtaW5sZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBwYXR0ZXJuOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGV4dENvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYm9sZFRleHQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSGFjZXIgZWwgdGV4dG8gZGVsIGlucHV0IGJvbGRcblxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgLy8gVmFsaWRhY2lvbmVzIGludGVncmFkYXNcbiAgQElucHV0KCkgc2FOdW1iZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd0RlY2ltYWxzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbWF4RGVjaW1hbHM6IG51bWJlciA9IDI7XG5cbiAgQElucHV0KCkgc2FMZXR0ZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd1NwYWNlczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFsbG93QWNjZW50czogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXNpbiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZvY3Vzb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBzaG93UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gUmVmZXJlbmNpYSBhbCBlbGVtZW50byBpbnB1dCBuYXRpdm9cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLy8gVmFyaWFibGVzIHBhcmEgdmFsaWRhY2nDs24gZGUgbsO6bWVyb3NcbiAgcHJpdmF0ZSBudW1iZXJzUmVnZXghOiBSZWdFeHA7XG4gIHByaXZhdGUgaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XG5cbiAgLy8gVmFyaWFibGVzIHBhcmEgdmFsaWRhY2nDs24gZGUgbGV0cmFzXG4gIHByaXZhdGUgbGV0dGVyc1JlZ2V4ITogUmVnRXhwO1xuXG4gIC8vIEhvc3RCaW5kaW5nIHBhcmEgc29wb3J0ZSBkZSBuZ0NsYXNzXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBpbnB1dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Zvcm0tY29udHJvbC1zbScsXG4gICAgICAnbWQnOiAnZm9ybS1jb250cm9sLW1kJyxcbiAgICAgICdsZyc6ICdmb3JtLWNvbnRyb2wtbGcnXG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNvbnRyb2wnXTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWdyZWdhciBjbGFzZSBib2xkIHNpIGVzdMOhIGFjdGl2YVxuICAgIGlmICh0aGlzLmJvbGRUZXh0KSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpbnB1dC1ib2xkJyk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXG4gICAgICAnbWQnOiAnZm9ybS1sYWJlbCBsYWJlbC1tZCcsXG4gICAgICAnbGcnOiAnZm9ybS1sYWJlbCBsYWJlbC1sZydcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWxhYmVsIGxhYmVsLW1kJztcbiAgICBcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcbiAgICBpZiAodGhpcy5ub0xhYmVsKSB7XG4gICAgICByZXR1cm4gYCR7YmFzZUNsYXNzZXN9IGdob3N0LWxhYmVsYDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzO1xuICB9XG5cbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XG4gIH1cblxuICBnZXQgaW5wdXRHcm91cENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBoYXNJY29ucyA9IHRoaXMubGVmdEljb24gfHwgdGhpcy5yaWdodEljb24gfHwgdGhpcy50eXBlID09PSAncGFzc3dvcmQnO1xuICAgIFxuICAgIGlmIChoYXNJY29ucykge1xuICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICAgJ3NtJzogJ2lucHV0LWdyb3VwLXNtJyxcbiAgICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XG4gICAgICAgICdsZyc6ICdpbnB1dC1ncm91cC1sZydcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2lucHV0LWdyb3VwJ107XG4gICAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldCBpbnB1dFR5cGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlucHV0U3R5bGVzKCk6IGFueSB7XG4gICAgY29uc3Qgc3R5bGVzOiBhbnkgPSB7fTtcbiAgICBcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnRleHRDb2xvcikge1xuICAgICAgc3R5bGVzWydjb2xvciddID0gdGhpcy50ZXh0Q29sb3I7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBnZXQgaGVscGVyVGV4dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS10ZXh0J107XG4gICAgXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdoZWxwZXItdGV4dC1zbScsXG4gICAgICAnbWQnOiAnaGVscGVyLXRleHQtbWQnLFxuICAgICAgJ2xnJzogJ2hlbHBlci10ZXh0LWxnJ1xuICAgIH07XG4gICAgXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGVycm9yVGV4dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnaW52YWxpZC1mZWVkYmFjaycsICdkLWJsb2NrJ107XG4gICAgXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdlcnJvci10ZXh0LXNtJyxcbiAgICAgICdtZCc6ICdlcnJvci10ZXh0LW1kJyxcbiAgICAgICdsZyc6ICdlcnJvci10ZXh0LWxnJ1xuICAgIH07XG4gICAgXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8/ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW5pciBxdWUgZWwgZXZlbnRvIGJ1cmJ1amVlIGZ1ZXJhIGRlbCBTaGFkb3cgRE9NXG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW5pciBxdWUgZWwgZXZlbnRvIGJ1cmJ1amVlIGZ1ZXJhIGRlbCBTaGFkb3cgRE9NXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmZvY3Vzb3V0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5dXAuZW1pdChldmVudCk7XG4gICAgLy8gRW1pdGlyIGV2ZW50byBlc3BlY8OtZmljbyBwYXJhIEVudGVyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5lbnRlci5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmtleWRvd24uZW1pdChldmVudCk7XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5rZXlwcmVzcy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zaG93UGFzc3dvcmQgPSAhdGhpcy5zaG93UGFzc3dvcmQ7XG4gIH1cblxuICAvLyBNw6l0b2RvcyBww7pibGljb3MgcGFyYSBhY2Nlc28gYWwgaW5wdXQgbmF0aXZvXG4gIC8qKlxuICAgKiBFbmZvY2EgZWwgaW5wdXRcbiAgICovXG4gIGZvY3VzSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFF1aXRhIGVsIGZvY28gZGVsIGlucHV0XG4gICAqL1xuICBibHVySW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWNjaW9uYSB0b2RvIGVsIHRleHRvIGRlbCBpbnB1dFxuICAgKi9cbiAgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT2J0aWVuZSBsYSByZWZlcmVuY2lhIGFsIGVsZW1lbnRvIGlucHV0IG5hdGl2b1xuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCB8fCBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydhbGxvd0RlY2ltYWxzJ10gfHwgY2hhbmdlc1snYWxsb3dOZWdhdGl2ZSddIHx8IGNoYW5nZXNbJ21heERlY2ltYWxzJ10pIHtcbiAgICAgIHRoaXMudXBkYXRlTnVtYmVyc1JlZ2V4KCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhbGxvd1NwYWNlcyddIHx8IGNoYW5nZXNbJ2FsbG93QWNjZW50cyddKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxldHRlcnNSZWdleCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gVkFMSURBQ0nDk04gREUgTsOaTUVST1MgPT09PT09PT09PVxuICBwcml2YXRlIHVwZGF0ZU51bWJlcnNSZWdleCgpOiB2b2lkIHtcbiAgICBsZXQgcGF0dGVybiA9ICdbXjAtOSc7XG5cbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzKSB7XG4gICAgICBwYXR0ZXJuICs9ICcuJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbGxvd05lZ2F0aXZlKSB7XG4gICAgICBwYXR0ZXJuICs9ICctJztcbiAgICB9XG5cbiAgICBwYXR0ZXJuICs9ICddJztcbiAgICB0aGlzLm51bWJlcnNSZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcbiAgfVxuXG4gIG9uSW5wdXRGb3JOdW1iZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSB8fCB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGluaXRpYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gdHJ1ZTtcbiAgICBsZXQgZmlsdGVyZWRWYWx1ZSA9IFN0cmluZyhpbml0aWFsVmFsdWUpO1xuXG4gICAgLy8gUHJpbWVybyBlbGltaW5hciB0b2RvcyBsb3MgY2FyYWN0ZXJlcyBubyB2w6FsaWRvcyBleGNlcHRvIHB1bnRvcyB5IHNpZ25vc1xuICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UodGhpcy5udW1iZXJzUmVnZXgsICcnKTtcblxuICAgIC8vIFJlbW92ZXIgcHVudG9zIGRlY2ltYWxlcyBzaSBubyBlc3TDoW4gcGVybWl0aWRvc1xuICAgIGlmICghdGhpcy5hbGxvd0RlY2ltYWxzKSB7XG4gICAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKC9cXC4vZywgJycpO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXIgZm9ybWF0byBkZSBkZWNpbWFsZXNcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGZpbHRlcmVkVmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSBmaWx0ZXJlZFZhbHVlLnNwbGl0KCcuJyk7XG5cbiAgICAgIC8vIFNvbG8gcGVybWl0aXIgdW4gcHVudG8gZGVjaW1hbFxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9IHBhcnRzWzBdICsgJy4nICsgcGFydHMuc2xpY2UoMSkuam9pbignJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlLXNwbGl0IGRlc3B1w6lzIGRlIGxpbXBpYXJcbiAgICAgIGNvbnN0IGNsZWFuUGFydHMgPSBmaWx0ZXJlZFZhbHVlLnNwbGl0KCcuJyk7XG5cbiAgICAgIC8vIExpbWl0YXIgZGVjaW1hbGVzXG4gICAgICBpZiAoY2xlYW5QYXJ0c1sxXSAmJiBjbGVhblBhcnRzWzFdLmxlbmd0aCA+IHRoaXMubWF4RGVjaW1hbHMpIHtcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9IGNsZWFuUGFydHNbMF0gKyAnLicgKyBjbGVhblBhcnRzWzFdLnN1YnN0cmluZygwLCB0aGlzLm1heERlY2ltYWxzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmVyIHNpZ25vIG5lZ2F0aXZvIHNpIG5vIGVzdMOhIHBlcm1pdGlkbyBvIHNpIGVzdMOhIG1hbCBwb3NpY2lvbmFkb1xuICAgIGlmICghdGhpcy5hbGxvd05lZ2F0aXZlKSB7XG4gICAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKC8tL2csICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cbiAgICAgIGNvbnN0IGhhc05lZ2F0aXZlID0gZmlsdGVyZWRWYWx1ZS5zdGFydHNXaXRoKCctJyk7XG4gICAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKC8tL2csICcnKTtcbiAgICAgIGlmIChoYXNOZWdhdGl2ZSkge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gJy0nICsgZmlsdGVyZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSBmaWx0ZXJlZFZhbHVlKSB7XG4gICAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IGxlbmd0aERpZmYgPSBpbml0aWFsVmFsdWUubGVuZ3RoIC0gZmlsdGVyZWRWYWx1ZS5sZW5ndGg7XG5cbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGZpbHRlcmVkVmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGZpbHRlcmVkVmFsdWUpO1xuXG4gICAgICAvLyBBanVzdGFyIGxhIHBvc2ljacOzbiBkZWwgY3Vyc29yXG4gICAgICBjb25zdCBuZXdDdXJzb3JQb3NpdGlvbiA9IE1hdGgubWF4KDAsIGN1cnNvclBvc2l0aW9uIC0gbGVuZ3RoRGlmZik7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKG5ld0N1cnNvclBvc2l0aW9uLCBuZXdDdXJzb3JQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uS2V5UHJlc3NGb3JOdW1iZXJzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG5cbiAgICAvLyBQZXJtaXRpciB0ZWNsYXMgZGUgY29udHJvbFxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdEZWxldGUnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQZXJtaXRpciBwdW50byBkZWNpbWFsIHNvbG8gc2kgbm8gZXhpc3RlIHVubyB5YVxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgY2hhciA9PT0gJy4nKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBlcm1pdGlyIHNpZ25vIG5lZ2F0aXZvIGFsIGluaWNpb1xuICAgIGlmICh0aGlzLmFsbG93TmVnYXRpdmUgJiYgY2hhciA9PT0gJy0nKSB7XG4gICAgICBpZiAoY3Vyc29yUG9zaXRpb24gPT09IDAgJiYgIWN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU29sbyBwZXJtaXRpciBuw7ptZXJvc1xuICAgIGlmICghL15cXGQkLy50ZXN0KGNoYXIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXIgbcOheGltbyBkZSBkZWNpbWFsZXMgc2kgeWEgZXhpc3RlIHVuIHB1bnRvXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSBjdXJyZW50VmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IGRlY2ltYWxQYXJ0ID0gcGFydHNbMV0gfHwgJyc7XG4gICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XG4gICAgICBjb25zdCBkZWNpbWFsU3RhcnRQb3NpdGlvbiA9IHBhcnRzWzBdLmxlbmd0aCArIDE7XG5cbiAgICAgIC8vIFNpIGVsIGN1cnNvciBlc3TDoSBkZXNwdcOpcyBkZWwgcHVudG8geSB5YSBoYXkgbWF4RGVjaW1hbHMgZMOtZ2l0b3MgKHNpbiBzZWxlY2Npw7NuKVxuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID49IGRlY2ltYWxTdGFydFBvc2l0aW9uICYmXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCAmJlxuICAgICAgICAgIGRlY2ltYWxQYXJ0Lmxlbmd0aCA+PSB0aGlzLm1heERlY2ltYWxzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25QYXN0ZUZvck51bWJlcnMoZXZlbnQ6IENsaXBib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JykgfHwgJyc7XG4gICAgbGV0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLm51bWJlcnNSZWdleCwgJycpO1xuXG4gICAgLy8gVmFsaWRhciBmb3JtYXRvIGRlIGRlY2ltYWxlcyBlbiB0ZXh0byBwZWdhZG9cbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGZpbHRlcmVkVGV4dC5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVGV4dC5zcGxpdCgnLicpO1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgZmlsdGVyZWRUZXh0ID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0cy5zbGljZSgxKS5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnRzWzFdICYmIHBhcnRzWzFdLmxlbmd0aCA+IHRoaXMubWF4RGVjaW1hbHMpIHtcbiAgICAgICAgZmlsdGVyZWRUZXh0ID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0c1sxXS5zdWJzdHJpbmcoMCwgdGhpcy5tYXhEZWNpbWFscyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcblxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIGZpbHRlcmVkVGV4dCArIGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcblxuICAgICAgLy8gUmVzdGF1cmFyIHBvc2ljacOzbiBkZWwgY3Vyc29yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IFZBTElEQUNJw5NOIERFIExFVFJBUyA9PT09PT09PT09XG4gIHByaXZhdGUgdXBkYXRlTGV0dGVyc1JlZ2V4KCk6IHZvaWQge1xuICAgIGxldCBwYXR0ZXJuID0gJ1teYS16QS1aJztcblxuICAgIGlmICh0aGlzLmFsbG93U3BhY2VzKSB7XG4gICAgICBwYXR0ZXJuICs9ICcgJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbGxvd0FjY2VudHMpIHtcbiAgICAgIHBhdHRlcm4gKz0gJ8Ohw6nDrcOzw7rDgcOJw43Dk8Oaw7HDkcO8w5wnO1xuICAgIH1cblxuICAgIHBhdHRlcm4gKz0gJ10nO1xuICAgIHRoaXMubGV0dGVyc1JlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICB9XG5cbiAgb25JbnB1dEZvckxldHRlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZSA9IFN0cmluZyhpbml0aWFsVmFsdWUpLnJlcGxhY2UodGhpcy5sZXR0ZXJzUmVnZXgsICcnKTtcblxuICAgIGlmIChpbml0aWFsVmFsdWUgIT09IGZpbHRlcmVkVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGZpbHRlcmVkVmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGZpbHRlcmVkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5UHJlc3NGb3JMZXR0ZXJzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xuXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2xcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGV0dGVyc1JlZ2V4LnRlc3QoY2hhcikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgb25QYXN0ZUZvckxldHRlcnMoZXZlbnQ6IENsaXBib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JykgfHwgJyc7XG4gICAgY29uc3QgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMubGV0dGVyc1JlZ2V4LCAnJyk7XG5cbiAgICBpZiAoZmlsdGVyZWRUZXh0KSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xuXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgZmlsdGVyZWRUZXh0ICsgY3VycmVudFZhbHVlLnN1YnN0cmluZyhlbmQpO1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCwgc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSIsIjxkaXYgY2xhc3M9XCJcIj5cbiAgPGxhYmVsICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgW2Zvcl09XCJpZFwiIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIj5cbiAgICB7eyBsYWJlbCB9fVxuICAgIDxzcGFuICpuZ0lmPVwicmVxdWlyZWQgJiYgbGFiZWxcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cbiAgPC9sYWJlbD5cblxuICA8ZGl2IFtjbGFzc109XCJpbnB1dEdyb3VwQ2xhc3Nlc1wiPlxuICAgIDxzcGFuICpuZ0lmPVwibGVmdEljb25cIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgIDxzYS1pY29uIFxuICAgICAgICAqbmdJZj1cIiFsZWZ0SWNvbi5pbmNsdWRlcygnZmEtJylcIiBcbiAgICAgICAgW25hbWVdPVwibGVmdEljb25cIiBcbiAgICAgICAgc2l6ZT1cIm1kXCI+XG4gICAgICA8L3NhLWljb24+XG4gICAgICA8aSBcbiAgICAgICAgKm5nSWY9XCJsZWZ0SWNvbi5pbmNsdWRlcygnZmEtJylcIiBcbiAgICAgICAgW2NsYXNzXT1cImxlZnRJY29uXCI+XG4gICAgICA8L2k+XG4gICAgPC9zcGFuPlxuXG4gICAgPGlucHV0XG4gICAgICAjaW5wdXRFbGVtZW50XG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICBbdHlwZV09XCJpbnB1dFR5cGVcIlxuICAgICAgW2NsYXNzXT1cImlucHV0Q2xhc3Nlc1wiXG4gICAgICBbbmdTdHlsZV09XCJpbnB1dFN0eWxlc1wiXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW21pbmxlbmd0aF09XCJtaW5sZW5ndGhcIlxuICAgICAgW21heGxlbmd0aF09XCJtYXhsZW5ndGhcIlxuICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblwiXG4gICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgZGF0YS1ncmFtbT1cImZhbHNlXCJcbiAgICAgIGRhdGEtZ3JhbW1fZWRpdG9yPVwiZmFsc2VcIlxuICAgICAgZGF0YS1lbmFibGUtZ3JhbW1hcmx5PVwiZmFsc2VcIlxuICAgICAgKGZvY3VzaW4pPVwib25JbnB1dEZvY3VzKCRldmVudClcIlxuICAgICAgKGZvY3Vzb3V0KT1cIm9uSW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cInNhTnVtYmVyc09ubHkgPyBvbklucHV0Rm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvbklucHV0Rm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxuICAgICAgKGtleXVwKT1cIm9uS2V5VXAoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAoa2V5cHJlc3MpPVwic2FOdW1iZXJzT25seSA/IG9uS2V5UHJlc3NGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uS2V5UHJlc3NGb3JMZXR0ZXJzKCRldmVudCkgOiBvbktleVByZXNzKCRldmVudCkpXCJcbiAgICAgIChwYXN0ZSk9XCJzYU51bWJlcnNPbmx5ID8gb25QYXN0ZUZvck51bWJlcnMoJGV2ZW50KSA6IChzYUxldHRlcnNPbmx5ID8gb25QYXN0ZUZvckxldHRlcnMoJGV2ZW50KSA6IG51bGwpXCJcbiAgICAvPlxuXG4gICAgPHNwYW4gKm5nSWY9XCJyaWdodEljb24gJiYgdHlwZSAhPT0gJ3Bhc3N3b3JkJ1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgPHNhLWljb24gXG4gICAgICAgICpuZ0lmPVwiIXJpZ2h0SWNvbi5pbmNsdWRlcygnZmEtJylcIiBcbiAgICAgICAgW25hbWVdPVwicmlnaHRJY29uXCIgXG4gICAgICAgIHNpemU9XCJzbVwiPlxuICAgICAgPC9zYS1pY29uPlxuICAgICAgPGkgXG4gICAgICAgICpuZ0lmPVwicmlnaHRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbY2xhc3NdPVwicmlnaHRJY29uXCI+XG4gICAgICA8L2k+XG4gICAgPC9zcGFuPlxuXG4gICAgPGJ1dHRvblxuICAgICAgKm5nSWY9XCJ0eXBlID09PSAncGFzc3dvcmQnXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJcbiAgICAgIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInNob3dQYXNzd29yZCA/ICdPY3VsdGFyIGNvbnRyYXNlw7FhJyA6ICdNb3N0cmFyIGNvbnRyYXNlw7FhJ1wiXG4gICAgPlxuICAgICAgPHNhLWljb24gXG4gICAgICAgIFtuYW1lXT1cInNob3dQYXNzd29yZCA/ICdleWUtc2xhc2gnIDogJ2V5ZSdcIiBcbiAgICAgICAgc2l6ZT1cInNtXCI+XG4gICAgICA8L3NhLWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0ICYmICFlcnJvclRleHRcIiBbY2xhc3NdPVwiaGVscGVyVGV4dENsYXNzZXNcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBbY2xhc3NdPVwiZXJyb3JUZXh0Q2xhc3Nlc1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxuPC9kaXY+Il19