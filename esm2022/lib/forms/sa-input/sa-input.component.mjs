import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, ViewChild, HostBinding } from '@angular/core';
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
        this.focusin.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
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
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"\">\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"md\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      #inputElement\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focusin)=\"onInputFocus($event)\"\n      (focusout)=\"onInputBlur($event)\"\n      (change)=\"onInputChange($event)\"\n      (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\n      (keyup)=\"onKeyUp($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : onKeyPress($event))\"\n      (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-control.input-bold{font-weight:700!important}:host .form-control.input-bold::placeholder{font-weight:400!important}:host .form-control.input-bold::-webkit-input-placeholder{font-weight:400!important}:host .form-control.input-bold::-moz-placeholder{font-weight:400!important}:host .form-control.input-bold:-ms-input-placeholder{font-weight:400!important}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:36px;padding:7px 12px;font-size:12px;border-radius:3px}:host .input-group.input-group-md>.form-control,:host .input-group.input-group-md>.input-group-text{min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:44px;padding:10px 14px;font-size:15px;border-radius:5px}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .input-group-text{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .input-group-text{min-height:44px;padding:10px 14px;font-size:15px}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .btn-outline-secondary{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .btn-outline-secondary{min-height:44px;padding:10px 14px;font-size:15px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:14px}:host sa-icon[size=sm] svg{height:14px;width:14px}:host sa-icon[size=md]{font-size:16px}:host sa-icon[size=md] svg{height:16px;width:16px}:host sa-icon[size=lg]{font-size:20px}:host sa-icon[size=lg] svg{height:20px;width:20px}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:16px}:host .input-group-sm .input-group-text sa-icon svg{width:16px;height:16px}:host .input-group-md .input-group-text sa-icon{font-size:18px}:host .input-group-md .input-group-text sa-icon svg{width:18px;height:18px}:host .input-group-lg .input-group-text sa-icon{font-size:22px}:host .input-group-lg .input-group-text sa-icon svg{width:22px;height:22px}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:16px}:host .input-group-sm .btn sa-icon svg{width:16px;height:16px}:host .input-group-md .btn sa-icon{font-size:18px}:host .input-group-md .btn sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn sa-icon{font-size:22px}:host .input-group-lg .btn sa-icon svg{width:22px;height:22px}:host .input-group .btn-outline-secondary{min-height:40px;display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:36px}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:16px}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:16px;height:16px}:host .input-group-md .btn-outline-secondary{min-height:40px}:host .input-group-md .btn-outline-secondary sa-icon{font-size:18px}:host .input-group-md .btn-outline-secondary sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn-outline-secondary{min-height:44px}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:22px}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:22px;height:22px}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', encapsulation: ViewEncapsulation.ShadowDom, providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFtQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixJQUFJLEdBQWMsTUFBTSxDQUFDO0lBQ3pCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRTVCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJQUNwQyxJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDUSxVQUFVLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUN0QixTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLEVBQUUsR0FBVyxFQUFFLENBQUM7SUFDaEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUNsQixZQUFZLEdBQVcsS0FBSyxDQUFDO0lBQzdCLEdBQUcsR0FBa0IsSUFBSSxDQUFDO0lBQzFCLEdBQUcsR0FBa0IsSUFBSSxDQUFDO0lBQzFCLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0lBQ2hDLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0lBQ2hDLE9BQU8sR0FBVyxFQUFFLENBQUM7SUFDckIsZUFBZSxHQUFXLEVBQUUsQ0FBQztJQUM3QixTQUFTLEdBQVcsRUFBRSxDQUFDO0lBQ3ZCLFFBQVEsR0FBWSxLQUFLLENBQUMsQ0FBQyxnQ0FBZ0M7SUFFcEUsdUJBQXVCO0lBQ2QsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUU1QiwwQkFBMEI7SUFDakIsYUFBYSxHQUFZLEtBQUssQ0FBQztJQUMvQixhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLGFBQWEsR0FBWSxLQUFLLENBQUM7SUFDL0IsV0FBVyxHQUFXLENBQUMsQ0FBQztJQUV4QixhQUFhLEdBQVksS0FBSyxDQUFDO0lBQy9CLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsWUFBWSxHQUFZLElBQUksQ0FBQztJQUU1QixXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUN6QyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUNuQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN6QyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUMxQyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFDMUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBQzVDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztJQUM3QyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFFcEQsWUFBWSxHQUFZLEtBQUssQ0FBQztJQUM5QixTQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHNDQUFzQztJQUNPLFlBQVksQ0FBZ0M7SUFFakYsUUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDMUIsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUU3Qix1Q0FBdUM7SUFDL0IsWUFBWSxDQUFVO0lBQ3RCLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUV6QyxzQ0FBc0M7SUFDOUIsWUFBWSxDQUFVO0lBRTlCLHNDQUFzQztJQUN0QyxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3BELFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUscUJBQXFCO1lBQzNCLElBQUksRUFBRSxxQkFBcUI7WUFDM0IsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQztRQUVoRSxtREFBbUQ7UUFDbkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsT0FBTyxHQUFHLFdBQVcsY0FBYyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxpR0FBaUc7UUFDakcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7UUFFN0UsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLE1BQU0sT0FBTyxHQUFHO2dCQUNkLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxFQUFFLEVBQUUsb0JBQW9CO2dCQUM5QixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCLENBQUM7WUFFRixNQUFNLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2dCQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLElBQUksRUFBRSxnQkFBZ0I7U0FDdkIsQ0FBQztRQUVGLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE1BQU0sV0FBVyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFcEQsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsZUFBZTtZQUNyQixJQUFJLEVBQUUsZUFBZTtZQUNyQixJQUFJLEVBQUUsZUFBZTtTQUN0QixDQUFDO1FBRUYsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsc0NBQXNDO1FBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0M7O09BRUc7SUFDSCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDbkYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsOENBQThDO0lBQ3RDLGtCQUFrQjtRQUN4QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBRUQsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3pELE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDeEQsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QywyRUFBMkU7UUFDM0UsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixhQUFhLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3RELE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdkMsaUNBQWlDO1lBQ2pDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUVELDhCQUE4QjtZQUM5QixNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLG9CQUFvQjtZQUNwQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0QsYUFBYSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JGLENBQUM7UUFDSCxDQUFDO1FBRUQsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7YUFBTSxDQUFDO1lBQ04sNENBQTRDO1lBQzVDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ2hCLGFBQWEsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxZQUFZLEtBQUssYUFBYSxFQUFFLENBQUM7WUFDbkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztZQUMzRSxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFFOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXJDLGlDQUFpQztZQUNqQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFFRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxLQUFvQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFFM0UsNkJBQTZCO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUTtZQUNyRixLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFlBQVk7WUFDOUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUMxQixPQUFPO1FBQ1QsQ0FBQztRQUVELGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU87WUFDVCxDQUFDO1lBQ0QsT0FBTztRQUNULENBQUM7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLGNBQWMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hELE9BQU87WUFDVCxDQUFDO1lBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBRUQsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBRUQsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckQsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFDM0UsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUN2RSxNQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWpELG1GQUFtRjtZQUNuRixJQUFJLGNBQWMsSUFBSSxvQkFBb0I7Z0JBQ3RDLGNBQWMsS0FBSyxZQUFZO2dCQUMvQixXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQXFCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTztRQUNULENBQUM7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlELElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RCwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuRCxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDakUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQztZQUNsRSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1lBRTlELE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVoQyxnQ0FBZ0M7WUFDaEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlHLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCw2Q0FBNkM7SUFDckMsa0JBQWtCO1FBQ3hCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksR0FBRyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksZ0JBQWdCLENBQUM7UUFDOUIsQ0FBQztRQUVELE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDeEQsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUUsSUFBSSxZQUFZLEtBQUssYUFBYSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBb0I7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFdkIsNkJBQTZCO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUTtZQUNyRixLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFlBQVk7WUFDOUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUMxQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFxQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFDbEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUU5RCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxZQUFZLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEMsZ0NBQWdDO1lBQ2hDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO3dHQXBrQlUsZ0JBQWdCOzRGQUFoQixnQkFBZ0IsdWhDQVJoQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9DLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwyS0NsQkgsdXRGQWtGTTs7NEZEOURPLGdCQUFnQjtrQkFiNUIsU0FBUzsrQkFDRSxVQUFVLGlCQUdMLGlCQUFpQixDQUFDLFNBQVMsYUFDL0I7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO3dEQUdRLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFTRixPQUFPO3NCQURWLEtBQUs7Z0JBVUYsU0FBUztzQkFEWixLQUFLO2dCQU9HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBTXNDLFlBQVk7c0JBQXhELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFjdkMsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3RlbCc7XG5leHBvcnQgdHlwZSBJbnB1dFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2EtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2FJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6IElucHV0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzaXplOiBJbnB1dFNpemUgPSAnbWQnO1xuICBASW5wdXQoKSBzdGF0dXM6IElucHV0U3RhdHVzID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cGRhdGVOdW1iZXJzUmVnZXgoKTtcbiAgICB0aGlzLnVwZGF0ZUxldHRlcnNSZWdleCgpO1xuICB9XG4gIFxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XG4gIH1cblxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xuICB9XG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsZWZ0SWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJpZ2h0SWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ29mZic7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1pbmxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHBhdHRlcm46IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBib2xkVGV4dDogYm9vbGVhbiA9IGZhbHNlOyAvLyBIYWNlciBlbCB0ZXh0byBkZWwgaW5wdXQgYm9sZFxuXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAvLyBWYWxpZGFjaW9uZXMgaW50ZWdyYWRhc1xuICBASW5wdXQoKSBzYU51bWJlcnNPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93RGVjaW1hbHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dOZWdhdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtYXhEZWNpbWFsczogbnVtYmVyID0gMjtcblxuICBASW5wdXQoKSBzYUxldHRlcnNPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93U3BhY2VzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxsb3dBY2NlbnRzOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmb2N1c2luID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXNvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXl1cCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGtleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXlwcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuXG4gIHNob3dQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBSZWZlcmVuY2lhIGFsIGVsZW1lbnRvIGlucHV0IG5hdGl2b1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBuw7ptZXJvc1xuICBwcml2YXRlIG51bWJlcnNSZWdleCE6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSBmYWxzZTtcblxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBsZXRyYXNcbiAgcHJpdmF0ZSBsZXR0ZXJzUmVnZXghOiBSZWdFeHA7XG5cbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZm9ybS1jb250cm9sLXNtJyxcbiAgICAgICdtZCc6ICdmb3JtLWNvbnRyb2wtbWQnLFxuICAgICAgJ2xnJzogJ2Zvcm0tY29udHJvbC1sZydcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY29udHJvbCddO1xuICAgIFxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZ3JlZ2FyIGNsYXNlIGJvbGQgc2kgZXN0w6EgYWN0aXZhXG4gICAgaWYgKHRoaXMuYm9sZFRleHQpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lucHV0LWJvbGQnKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdmb3JtLWxhYmVsIGxhYmVsLXNtJyxcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcbiAgICAgICdsZyc6ICdmb3JtLWxhYmVsIGxhYmVsLWxnJ1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBzaXplTWFwW3RoaXMuc2l6ZV0gfHwgJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnO1xuICAgIFxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxuICAgIGlmICh0aGlzLm5vTGFiZWwpIHtcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gZ2hvc3QtbGFiZWxgO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gIH1cblxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIC8vIFNpIGhpZGVMYWJlbCBlc3TDoSBhY3Rpdm8sIG51bmNhIG1vc3RyYXIgZWwgbGFiZWxcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcbiAgfVxuXG4gIGdldCBpbnB1dEdyb3VwQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc0ljb25zID0gdGhpcy5sZWZ0SWNvbiB8fCB0aGlzLnJpZ2h0SWNvbiB8fCB0aGlzLnR5cGUgPT09ICdwYXNzd29yZCc7XG4gICAgXG4gICAgaWYgKGhhc0ljb25zKSB7XG4gICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAnc20nOiAnaW5wdXQtZ3JvdXAtc20nLFxuICAgICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcbiAgICAgICAgJ2xnJzogJ2lucHV0LWdyb3VwLWxnJ1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgY2xhc3NlcyA9IFsnaW5wdXQtZ3JvdXAnXTtcbiAgICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xuICAgICAgICBjbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IGlucHV0VHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXQgaW5wdXRTdHlsZXMoKTogYW55IHtcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xuICAgIFxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMudGV4dENvbG9yKSB7XG4gICAgICBzdHlsZXNbJ2NvbG9yJ10gPSB0aGlzLnRleHRDb2xvcjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIGdldCBoZWxwZXJUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLXRleHQnXTtcbiAgICBcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2hlbHBlci10ZXh0LXNtJyxcbiAgICAgICdtZCc6ICdoZWxwZXItdGV4dC1tZCcsXG4gICAgICAnbGcnOiAnaGVscGVyLXRleHQtbGcnXG4gICAgfTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgZXJyb3JUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydpbnZhbGlkLWZlZWRiYWNrJywgJ2QtYmxvY2snXTtcbiAgICBcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Vycm9yLXRleHQtc20nLFxuICAgICAgJ21kJzogJ2Vycm9yLXRleHQtbWQnLFxuICAgICAgJ2xnJzogJ2Vycm9yLXRleHQtbGcnXG4gICAgfTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPz8gJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2luLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5mb2N1c291dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmtleXVwLmVtaXQoZXZlbnQpO1xuICAgIC8vIEVtaXRpciBldmVudG8gZXNwZWPDrWZpY28gcGFyYSBFbnRlclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZW50ZXIuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5rZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5cHJlc3MuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICB9XG5cbiAgLy8gTcOpdG9kb3MgcMO6YmxpY29zIHBhcmEgYWNjZXNvIGFsIGlucHV0IG5hdGl2b1xuICAvKipcbiAgICogRW5mb2NhIGVsIGlucHV0XG4gICAqL1xuICBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBRdWl0YSBlbCBmb2NvIGRlbCBpbnB1dFxuICAgKi9cbiAgYmx1cklucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjY2lvbmEgdG9kbyBlbCB0ZXh0byBkZWwgaW5wdXRcbiAgICovXG4gIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9idGllbmUgbGEgcmVmZXJlbmNpYSBhbCBlbGVtZW50byBpbnB1dCBuYXRpdm9cbiAgICovXG4gIGdldE5hdGl2ZUlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgfHwgbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snYWxsb3dEZWNpbWFscyddIHx8IGNoYW5nZXNbJ2FsbG93TmVnYXRpdmUnXSB8fCBjaGFuZ2VzWydtYXhEZWNpbWFscyddKSB7XG4gICAgICB0aGlzLnVwZGF0ZU51bWJlcnNSZWdleCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWxsb3dTcGFjZXMnXSB8fCBjaGFuZ2VzWydhbGxvd0FjY2VudHMnXSkge1xuICAgICAgdGhpcy51cGRhdGVMZXR0ZXJzUmVnZXgoKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IFZBTElEQUNJw5NOIERFIE7Dmk1FUk9TID09PT09PT09PT1cbiAgcHJpdmF0ZSB1cGRhdGVOdW1iZXJzUmVnZXgoKTogdm9pZCB7XG4gICAgbGV0IHBhdHRlcm4gPSAnW14wLTknO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscykge1xuICAgICAgcGF0dGVybiArPSAnLic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgcGF0dGVybiArPSAnLSc7XG4gICAgfVxuXG4gICAgcGF0dGVybiArPSAnXSc7XG4gICAgdGhpcy5udW1iZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gIH1cblxuICBvbklucHV0Rm9yTnVtYmVycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkgfHwgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IHRydWU7XG4gICAgbGV0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKTtcblxuICAgIC8vIFByaW1lcm8gZWxpbWluYXIgdG9kb3MgbG9zIGNhcmFjdGVyZXMgbm8gdsOhbGlkb3MgZXhjZXB0byBwdW50b3MgeSBzaWdub3NcbiAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XG5cbiAgICAvLyBSZW1vdmVyIHB1bnRvcyBkZWNpbWFsZXMgc2kgbm8gZXN0w6FuIHBlcm1pdGlkb3NcbiAgICBpZiAoIXRoaXMuYWxsb3dEZWNpbWFscykge1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvXFwuL2csICcnKTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBmaWx0ZXJlZFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRWYWx1ZS5zcGxpdCgnLicpO1xuXG4gICAgICAvLyBTb2xvIHBlcm1pdGlyIHVuIHB1bnRvIGRlY2ltYWxcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS1zcGxpdCBkZXNwdcOpcyBkZSBsaW1waWFyXG4gICAgICBjb25zdCBjbGVhblBhcnRzID0gZmlsdGVyZWRWYWx1ZS5zcGxpdCgnLicpO1xuXG4gICAgICAvLyBMaW1pdGFyIGRlY2ltYWxlc1xuICAgICAgaWYgKGNsZWFuUGFydHNbMV0gJiYgY2xlYW5QYXJ0c1sxXS5sZW5ndGggPiB0aGlzLm1heERlY2ltYWxzKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBjbGVhblBhcnRzWzBdICsgJy4nICsgY2xlYW5QYXJ0c1sxXS5zdWJzdHJpbmcoMCwgdGhpcy5tYXhEZWNpbWFscyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlciBzaWdubyBuZWdhdGl2byBzaSBubyBlc3TDoSBwZXJtaXRpZG8gbyBzaSBlc3TDoSBtYWwgcG9zaWNpb25hZG9cbiAgICBpZiAoIXRoaXMuYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbG8gcGVybWl0aXIgdW4gc2lnbm8gbmVnYXRpdm8gYWwgaW5pY2lvXG4gICAgICBjb25zdCBoYXNOZWdhdGl2ZSA9IGZpbHRlcmVkVmFsdWUuc3RhcnRzV2l0aCgnLScpO1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgICBpZiAoaGFzTmVnYXRpdmUpIHtcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9ICctJyArIGZpbHRlcmVkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBsZW5ndGhEaWZmID0gaW5pdGlhbFZhbHVlLmxlbmd0aCAtIGZpbHRlcmVkVmFsdWUubGVuZ3RoO1xuXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShmaWx0ZXJlZFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWx0ZXJlZFZhbHVlKTtcblxuICAgICAgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgY29uc3QgbmV3Q3Vyc29yUG9zaXRpb24gPSBNYXRoLm1heCgwLCBjdXJzb3JQb3NpdGlvbiAtIGxlbmd0aERpZmYpO1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShuZXdDdXJzb3JQb3NpdGlvbiwgbmV3Q3Vyc29yUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XG4gIH1cblxuICBvbktleVByZXNzRm9yTnVtYmVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2xcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGVybWl0aXIgcHVudG8gZGVjaW1hbCBzb2xvIHNpIG5vIGV4aXN0ZSB1bm8geWFcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGNoYXIgPT09ICcuJykge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQZXJtaXRpciBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cbiAgICBpZiAodGhpcy5hbGxvd05lZ2F0aXZlICYmIGNoYXIgPT09ICctJykge1xuICAgICAgaWYgKGN1cnNvclBvc2l0aW9uID09PSAwICYmICFjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNvbG8gcGVybWl0aXIgbsO6bWVyb3NcbiAgICBpZiAoIS9eXFxkJC8udGVzdChjaGFyKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGFyIG3DoXhpbW8gZGUgZGVjaW1hbGVzIHNpIHlhIGV4aXN0ZSB1biBwdW50b1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgY3VycmVudFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VycmVudFZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBkZWNpbWFsUGFydCA9IHBhcnRzWzFdIHx8ICcnO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xuICAgICAgY29uc3QgZGVjaW1hbFN0YXJ0UG9zaXRpb24gPSBwYXJ0c1swXS5sZW5ndGggKyAxO1xuXG4gICAgICAvLyBTaSBlbCBjdXJzb3IgZXN0w6EgZGVzcHXDqXMgZGVsIHB1bnRvIHkgeWEgaGF5IG1heERlY2ltYWxzIGTDrWdpdG9zIChzaW4gc2VsZWNjacOzbilcbiAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA+PSBkZWNpbWFsU3RhcnRQb3NpdGlvbiAmJlxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQgJiZcbiAgICAgICAgICBkZWNpbWFsUGFydC5sZW5ndGggPj0gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUGFzdGVGb3JOdW1iZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xuICAgIGxldCBmaWx0ZXJlZFRleHQgPSBwYXN0ZWRUZXh0LnJlcGxhY2UodGhpcy5udW1iZXJzUmVnZXgsICcnKTtcblxuICAgIC8vIFZhbGlkYXIgZm9ybWF0byBkZSBkZWNpbWFsZXMgZW4gdGV4dG8gcGVnYWRvXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBmaWx0ZXJlZFRleHQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSBmaWx0ZXJlZFRleHQuc3BsaXQoJy4nKTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHMuc2xpY2UoMSkuam9pbignJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0c1sxXSAmJiBwYXJ0c1sxXS5sZW5ndGggPiB0aGlzLm1heERlY2ltYWxzKSB7XG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG5cbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoLCBzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBMRVRSQVMgPT09PT09PT09PVxuICBwcml2YXRlIHVwZGF0ZUxldHRlcnNSZWdleCgpOiB2b2lkIHtcbiAgICBsZXQgcGF0dGVybiA9ICdbXmEtekEtWic7XG5cbiAgICBpZiAodGhpcy5hbGxvd1NwYWNlcykge1xuICAgICAgcGF0dGVybiArPSAnICc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWxsb3dBY2NlbnRzKSB7XG4gICAgICBwYXR0ZXJuICs9ICfDocOpw63Ds8O6w4HDicONw5PDmsOxw5HDvMOcJztcbiAgICB9XG5cbiAgICBwYXR0ZXJuICs9ICddJztcbiAgICB0aGlzLmxldHRlcnNSZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcbiAgfVxuXG4gIG9uSW5wdXRGb3JMZXR0ZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGluaXRpYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKS5yZXBsYWNlKHRoaXMubGV0dGVyc1JlZ2V4LCAnJyk7XG5cbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSBmaWx0ZXJlZFZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShmaWx0ZXJlZFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWx0ZXJlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzRm9yTGV0dGVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcblxuICAgIC8vIFBlcm1pdGlyIHRlY2xhcyBkZSBjb250cm9sXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldHRlcnNSZWdleC50ZXN0KGNoYXIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFzdGVGb3JMZXR0ZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xuICAgIGNvbnN0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xuXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcblxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIGZpbHRlcmVkVGV4dCArIGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcblxuICAgICAgLy8gUmVzdGF1cmFyIHBvc2ljacOzbiBkZWwgY3Vyc29yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwiXCI+XG4gIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XG4gICAge3sgbGFiZWwgfX1cbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XG4gIDwvbGFiZWw+XG5cbiAgPGRpdiBbY2xhc3NdPVwiaW5wdXRHcm91cENsYXNzZXNcIj5cbiAgICA8c3BhbiAqbmdJZj1cImxlZnRJY29uXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgKm5nSWY9XCIhbGVmdEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtuYW1lXT1cImxlZnRJY29uXCIgXG4gICAgICAgIHNpemU9XCJtZFwiPlxuICAgICAgPC9zYS1pY29uPlxuICAgICAgPGkgXG4gICAgICAgICpuZ0lmPVwibGVmdEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtjbGFzc109XCJsZWZ0SWNvblwiPlxuICAgICAgPC9pPlxuICAgIDwvc3Bhbj5cblxuICAgIDxpbnB1dFxuICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgW3R5cGVdPVwiaW5wdXRUeXBlXCJcbiAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzZXNcIlxuICAgICAgW25nU3R5bGVdPVwiaW5wdXRTdHlsZXNcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFttaW5sZW5ndGhdPVwibWlubGVuZ3RoXCJcbiAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcbiAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcbiAgICAgIGRhdGEtZ3JhbW09XCJmYWxzZVwiXG4gICAgICBkYXRhLWdyYW1tX2VkaXRvcj1cImZhbHNlXCJcbiAgICAgIGRhdGEtZW5hYmxlLWdyYW1tYXJseT1cImZhbHNlXCJcbiAgICAgIChmb2N1c2luKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcbiAgICAgIChmb2N1c291dCk9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChpbnB1dCk9XCJzYU51bWJlcnNPbmx5ID8gb25JbnB1dEZvck51bWJlcnMoJGV2ZW50KSA6IChzYUxldHRlcnNPbmx5ID8gb25JbnB1dEZvckxldHRlcnMoJGV2ZW50KSA6IG51bGwpXCJcbiAgICAgIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIlxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgKGtleXByZXNzKT1cInNhTnVtYmVyc09ubHkgPyBvbktleVByZXNzRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvbktleVByZXNzRm9yTGV0dGVycygkZXZlbnQpIDogb25LZXlQcmVzcygkZXZlbnQpKVwiXG4gICAgICAocGFzdGUpPVwic2FOdW1iZXJzT25seSA/IG9uUGFzdGVGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uUGFzdGVGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXG4gICAgLz5cblxuICAgIDxzcGFuICpuZ0lmPVwicmlnaHRJY29uICYmIHR5cGUgIT09ICdwYXNzd29yZCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgIDxzYS1pY29uIFxuICAgICAgICAqbmdJZj1cIiFyaWdodEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtuYW1lXT1cInJpZ2h0SWNvblwiIFxuICAgICAgICBzaXplPVwic21cIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICAgIDxpIFxuICAgICAgICAqbmdJZj1cInJpZ2h0SWNvbi5pbmNsdWRlcygnZmEtJylcIiBcbiAgICAgICAgW2NsYXNzXT1cInJpZ2h0SWNvblwiPlxuICAgICAgPC9pPlxuICAgIDwvc3Bhbj5cblxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwidHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJzaG93UGFzc3dvcmQgPyAnT2N1bHRhciBjb250cmFzZcOxYScgOiAnTW9zdHJhciBjb250cmFzZcOxYSdcIlxuICAgID5cbiAgICAgIDxzYS1pY29uIFxuICAgICAgICBbbmFtZV09XCJzaG93UGFzc3dvcmQgPyAnZXllLXNsYXNoJyA6ICdleWUnXCIgXG4gICAgICAgIHNpemU9XCJzbVwiPlxuICAgICAgPC9zYS1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgW2NsYXNzXT1cImhlbHBlclRleHRDbGFzc2VzXCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgW2NsYXNzXT1cImVycm9yVGV4dENsYXNzZXNcIj57eyBlcnJvclRleHQgfX08L2Rpdj5cbjwvZGl2PiJdfQ==