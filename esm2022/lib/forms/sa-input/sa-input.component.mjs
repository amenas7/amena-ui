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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFtQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixJQUFJLEdBQWMsTUFBTSxDQUFDO0lBQ3pCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRTVCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJ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O2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFNc0MsWUFBWTtzQkFBeEQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQWN2QyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCB0eXBlIElucHV0U2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcbmV4cG9ydCB0eXBlIElucHV0VHlwZSA9ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ251bWJlcicgfCAndGVsJztcbmV4cG9ydCB0eXBlIElucHV0U3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2EtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2EtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYS1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTYUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHNpemU6IElucHV0U2l6ZSA9ICdtZCc7XG4gIEBJbnB1dCgpIHN0YXR1czogSW5wdXRTdGF0dXMgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVwZGF0ZU51bWJlcnNSZWdleCgpO1xuICAgIHRoaXMudXBkYXRlTGV0dGVyc1JlZ2V4KCk7XG4gIH1cbiAgXG4gIHByaXZhdGUgX25vTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG5vTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9ub0xhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgbm9MYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm9MYWJlbDtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgaGlkZUxhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5faGlkZUxhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcbiAgfVxuICBnZXQgaGlkZUxhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWw7XG4gIH1cbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGxlZnRJY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcmlnaHRJY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnb2ZmJztcbiAgQElucHV0KCkgbWluOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcGF0dGVybjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRleHRDb2xvcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGJvbGRUZXh0OiBib29sZWFuID0gZmFsc2U7IC8vIEhhY2VyIGVsIHRleHRvIGRlbCBpbnB1dCBib2xkXG5cbiAgLy8gU29wb3J0ZSBwYXJhIG5nQ2xhc3NcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8vIFZhbGlkYWNpb25lcyBpbnRlZ3JhZGFzXG4gIEBJbnB1dCgpIHNhTnVtYmVyc09ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dEZWNpbWFsczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd05lZ2F0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heERlY2ltYWxzOiBudW1iZXIgPSAyO1xuXG4gIEBJbnB1dCgpIHNhTGV0dGVyc09ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dTcGFjZXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhbGxvd0FjY2VudHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZvY3VzaW4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmb2N1c291dCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIGtleXVwID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGtleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgc2hvd1Bhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIFJlZmVyZW5jaWEgYWwgZWxlbWVudG8gaW5wdXQgbmF0aXZvXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8vIFZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpw7NuIGRlIG7Dum1lcm9zXG4gIHByaXZhdGUgbnVtYmVyc1JlZ2V4ITogUmVnRXhwO1xuICBwcml2YXRlIGlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IGZhbHNlO1xuXG4gIC8vIFZhcmlhYmxlcyBwYXJhIHZhbGlkYWNpw7NuIGRlIGxldHJhc1xuICBwcml2YXRlIGxldHRlcnNSZWdleCE6IFJlZ0V4cDtcblxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgaW5wdXRDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdmb3JtLWNvbnRyb2wtc20nLFxuICAgICAgJ21kJzogJ2Zvcm0tY29udHJvbC1tZCcsXG4gICAgICAnbGcnOiAnZm9ybS1jb250cm9sLWxnJ1xuICAgIH07XG5cbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1jb250cm9sJ107XG4gICAgXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFncmVnYXIgY2xhc2UgYm9sZCBzaSBlc3TDoSBhY3RpdmFcbiAgICBpZiAodGhpcy5ib2xkVGV4dCkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaW5wdXQtYm9sZCcpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Zvcm0tbGFiZWwgbGFiZWwtc20nLFxuICAgICAgJ21kJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnLFxuICAgICAgJ2xnJzogJ2Zvcm0tbGFiZWwgbGFiZWwtbGcnXG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IHNpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1sYWJlbCBsYWJlbC1tZCc7XG4gICAgXG4gICAgLy8gU2kgZXMgbm9MYWJlbCwgYWdyZWdhciBjbGFzZSBwYXJhIGxhYmVsIGZhbnRhc21hXG4gICAgaWYgKHRoaXMubm9MYWJlbCkge1xuICAgICAgcmV0dXJuIGAke2Jhc2VDbGFzc2VzfSBnaG9zdC1sYWJlbGA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgfVxuXG4gIGdldCBzaG91bGRTaG93TGFiZWwoKTogYm9vbGVhbiB7XG4gICAgLy8gU2kgaGlkZUxhYmVsIGVzdMOhIGFjdGl2bywgbnVuY2EgbW9zdHJhciBlbCBsYWJlbFxuICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBDb21wb3J0YW1pZW50byBvcmlnaW5hbDogbW9zdHJhciBzaSBoYXkgbGFiZWwgbyBzaSBub0xhYmVsIGVzdMOhIGFjdGl2byAocGFyYSBlc3BhY2lvIGZhbnRhc21hKVxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xuICB9XG5cbiAgZ2V0IGlucHV0R3JvdXBDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgaGFzSWNvbnMgPSB0aGlzLmxlZnRJY29uIHx8IHRoaXMucmlnaHRJY29uIHx8IHRoaXMudHlwZSA9PT0gJ3Bhc3N3b3JkJztcbiAgICBcbiAgICBpZiAoaGFzSWNvbnMpIHtcbiAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICdzbSc6ICdpbnB1dC1ncm91cC1zbScsXG4gICAgICAgICdtZCc6ICcnLCAvLyBCb290c3RyYXAgZGVmYXVsdFxuICAgICAgICAnbGcnOiAnaW5wdXQtZ3JvdXAtbGcnXG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCBjbGFzc2VzID0gWydpbnB1dC1ncm91cCddO1xuICAgICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSAmJiBzaXplTWFwW3RoaXMuc2l6ZV0gIT09ICcnKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXQgaW5wdXRUeXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldCBpbnB1dFN0eWxlcygpOiBhbnkge1xuICAgIGNvbnN0IHN0eWxlczogYW55ID0ge307XG4gICAgXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy50ZXh0Q29sb3IpIHtcbiAgICAgIHN0eWxlc1snY29sb3InXSA9IHRoaXMudGV4dENvbG9yO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgZ2V0IGhlbHBlclRleHRDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tdGV4dCddO1xuICAgIFxuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnaGVscGVyLXRleHQtc20nLFxuICAgICAgJ21kJzogJ2hlbHBlci10ZXh0LW1kJyxcbiAgICAgICdsZyc6ICdoZWxwZXItdGV4dC1sZydcbiAgICB9O1xuICAgIFxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0pIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGdldCBlcnJvclRleHRDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2ludmFsaWQtZmVlZGJhY2snLCAnZC1ibG9jayddO1xuICAgIFxuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZXJyb3ItdGV4dC1zbScsXG4gICAgICAnbWQnOiAnZXJyb3ItdGV4dC1tZCcsXG4gICAgICAnbGcnOiAnZXJyb3ItdGV4dC1sZydcbiAgICB9O1xuICAgIFxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0pIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/PyAnJztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uSW5wdXRGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxuICAgIHRoaXMuZm9jdXNpbi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5mb2N1c291dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmtleXVwLmVtaXQoZXZlbnQpO1xuICAgIC8vIEVtaXRpciBldmVudG8gZXNwZWPDrWZpY28gcGFyYSBFbnRlclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuZW50ZXIuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5rZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5cHJlc3MuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICB9XG5cbiAgLy8gTcOpdG9kb3MgcMO6YmxpY29zIHBhcmEgYWNjZXNvIGFsIGlucHV0IG5hdGl2b1xuICAvKipcbiAgICogRW5mb2NhIGVsIGlucHV0XG4gICAqL1xuICBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBRdWl0YSBlbCBmb2NvIGRlbCBpbnB1dFxuICAgKi9cbiAgYmx1cklucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjY2lvbmEgdG9kbyBlbCB0ZXh0byBkZWwgaW5wdXRcbiAgICovXG4gIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9idGllbmUgbGEgcmVmZXJlbmNpYSBhbCBlbGVtZW50byBpbnB1dCBuYXRpdm9cbiAgICovXG4gIGdldE5hdGl2ZUlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgfHwgbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snYWxsb3dEZWNpbWFscyddIHx8IGNoYW5nZXNbJ2FsbG93TmVnYXRpdmUnXSB8fCBjaGFuZ2VzWydtYXhEZWNpbWFscyddKSB7XG4gICAgICB0aGlzLnVwZGF0ZU51bWJlcnNSZWdleCgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snYWxsb3dTcGFjZXMnXSB8fCBjaGFuZ2VzWydhbGxvd0FjY2VudHMnXSkge1xuICAgICAgdGhpcy51cGRhdGVMZXR0ZXJzUmVnZXgoKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IFZBTElEQUNJw5NOIERFIE7Dmk1FUk9TID09PT09PT09PT1cbiAgcHJpdmF0ZSB1cGRhdGVOdW1iZXJzUmVnZXgoKTogdm9pZCB7XG4gICAgbGV0IHBhdHRlcm4gPSAnW14wLTknO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscykge1xuICAgICAgcGF0dGVybiArPSAnLic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgcGF0dGVybiArPSAnLSc7XG4gICAgfVxuXG4gICAgcGF0dGVybiArPSAnXSc7XG4gICAgdGhpcy5udW1iZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gIH1cblxuICBvbklucHV0Rm9yTnVtYmVycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTnVtYmVyc09ubHkgfHwgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IHRydWU7XG4gICAgbGV0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKTtcblxuICAgIC8vIFByaW1lcm8gZWxpbWluYXIgdG9kb3MgbG9zIGNhcmFjdGVyZXMgbm8gdsOhbGlkb3MgZXhjZXB0byBwdW50b3MgeSBzaWdub3NcbiAgICBmaWx0ZXJlZFZhbHVlID0gZmlsdGVyZWRWYWx1ZS5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XG5cbiAgICAvLyBSZW1vdmVyIHB1bnRvcyBkZWNpbWFsZXMgc2kgbm8gZXN0w6FuIHBlcm1pdGlkb3NcbiAgICBpZiAoIXRoaXMuYWxsb3dEZWNpbWFscykge1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvXFwuL2csICcnKTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBmaWx0ZXJlZFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRWYWx1ZS5zcGxpdCgnLicpO1xuXG4gICAgICAvLyBTb2xvIHBlcm1pdGlyIHVuIHB1bnRvIGRlY2ltYWxcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS1zcGxpdCBkZXNwdcOpcyBkZSBsaW1waWFyXG4gICAgICBjb25zdCBjbGVhblBhcnRzID0gZmlsdGVyZWRWYWx1ZS5zcGxpdCgnLicpO1xuXG4gICAgICAvLyBMaW1pdGFyIGRlY2ltYWxlc1xuICAgICAgaWYgKGNsZWFuUGFydHNbMV0gJiYgY2xlYW5QYXJ0c1sxXS5sZW5ndGggPiB0aGlzLm1heERlY2ltYWxzKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSBjbGVhblBhcnRzWzBdICsgJy4nICsgY2xlYW5QYXJ0c1sxXS5zdWJzdHJpbmcoMCwgdGhpcy5tYXhEZWNpbWFscyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlciBzaWdubyBuZWdhdGl2byBzaSBubyBlc3TDoSBwZXJtaXRpZG8gbyBzaSBlc3TDoSBtYWwgcG9zaWNpb25hZG9cbiAgICBpZiAoIXRoaXMuYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbG8gcGVybWl0aXIgdW4gc2lnbm8gbmVnYXRpdm8gYWwgaW5pY2lvXG4gICAgICBjb25zdCBoYXNOZWdhdGl2ZSA9IGZpbHRlcmVkVmFsdWUuc3RhcnRzV2l0aCgnLScpO1xuICAgICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG4gICAgICBpZiAoaGFzTmVnYXRpdmUpIHtcbiAgICAgICAgZmlsdGVyZWRWYWx1ZSA9ICctJyArIGZpbHRlcmVkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBsZW5ndGhEaWZmID0gaW5pdGlhbFZhbHVlLmxlbmd0aCAtIGZpbHRlcmVkVmFsdWUubGVuZ3RoO1xuXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShmaWx0ZXJlZFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWx0ZXJlZFZhbHVlKTtcblxuICAgICAgLy8gQWp1c3RhciBsYSBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgY29uc3QgbmV3Q3Vyc29yUG9zaXRpb24gPSBNYXRoLm1heCgwLCBjdXJzb3JQb3NpdGlvbiAtIGxlbmd0aERpZmYpO1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShuZXdDdXJzb3JQb3NpdGlvbiwgbmV3Q3Vyc29yUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XG4gIH1cblxuICBvbktleVByZXNzRm9yTnVtYmVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuXG4gICAgLy8gUGVybWl0aXIgdGVjbGFzIGRlIGNvbnRyb2xcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGVybWl0aXIgcHVudG8gZGVjaW1hbCBzb2xvIHNpIG5vIGV4aXN0ZSB1bm8geWFcbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGNoYXIgPT09ICcuJykge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQZXJtaXRpciBzaWdubyBuZWdhdGl2byBhbCBpbmljaW9cbiAgICBpZiAodGhpcy5hbGxvd05lZ2F0aXZlICYmIGNoYXIgPT09ICctJykge1xuICAgICAgaWYgKGN1cnNvclBvc2l0aW9uID09PSAwICYmICFjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNvbG8gcGVybWl0aXIgbsO6bWVyb3NcbiAgICBpZiAoIS9eXFxkJC8udGVzdChjaGFyKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGFyIG3DoXhpbW8gZGUgZGVjaW1hbGVzIHNpIHlhIGV4aXN0ZSB1biBwdW50b1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgY3VycmVudFZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gY3VycmVudFZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBkZWNpbWFsUGFydCA9IHBhcnRzWzFdIHx8ICcnO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xuICAgICAgY29uc3QgZGVjaW1hbFN0YXJ0UG9zaXRpb24gPSBwYXJ0c1swXS5sZW5ndGggKyAxO1xuXG4gICAgICAvLyBTaSBlbCBjdXJzb3IgZXN0w6EgZGVzcHXDqXMgZGVsIHB1bnRvIHkgeWEgaGF5IG1heERlY2ltYWxzIGTDrWdpdG9zIChzaW4gc2VsZWNjacOzbilcbiAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA+PSBkZWNpbWFsU3RhcnRQb3NpdGlvbiAmJlxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQgJiZcbiAgICAgICAgICBkZWNpbWFsUGFydC5sZW5ndGggPj0gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUGFzdGVGb3JOdW1iZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xuICAgIGxldCBmaWx0ZXJlZFRleHQgPSBwYXN0ZWRUZXh0LnJlcGxhY2UodGhpcy5udW1iZXJzUmVnZXgsICcnKTtcblxuICAgIC8vIFZhbGlkYXIgZm9ybWF0byBkZSBkZWNpbWFsZXMgZW4gdGV4dG8gcGVnYWRvXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBmaWx0ZXJlZFRleHQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSBmaWx0ZXJlZFRleHQuc3BsaXQoJy4nKTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHMuc2xpY2UoMSkuam9pbignJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0c1sxXSAmJiBwYXJ0c1sxXS5sZW5ndGggPiB0aGlzLm1heERlY2ltYWxzKSB7XG4gICAgICAgIGZpbHRlcmVkVGV4dCA9IHBhcnRzWzBdICsgJy4nICsgcGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG5cbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoLCBzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBMRVRSQVMgPT09PT09PT09PVxuICBwcml2YXRlIHVwZGF0ZUxldHRlcnNSZWdleCgpOiB2b2lkIHtcbiAgICBsZXQgcGF0dGVybiA9ICdbXmEtekEtWic7XG5cbiAgICBpZiAodGhpcy5hbGxvd1NwYWNlcykge1xuICAgICAgcGF0dGVybiArPSAnICc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWxsb3dBY2NlbnRzKSB7XG4gICAgICBwYXR0ZXJuICs9ICfDocOpw63Ds8O6w4HDicONw5PDmsOxw5HDvMOcJztcbiAgICB9XG5cbiAgICBwYXR0ZXJuICs9ICddJztcbiAgICB0aGlzLmxldHRlcnNSZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcbiAgfVxuXG4gIG9uSW5wdXRGb3JMZXR0ZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGluaXRpYWxWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSBTdHJpbmcoaW5pdGlhbFZhbHVlKS5yZXBsYWNlKHRoaXMubGV0dGVyc1JlZ2V4LCAnJyk7XG5cbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSBmaWx0ZXJlZFZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWx0ZXJlZFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShmaWx0ZXJlZFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChmaWx0ZXJlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbktleVByZXNzRm9yTGV0dGVycyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcblxuICAgIC8vIFBlcm1pdGlyIHRlY2xhcyBkZSBjb250cm9sXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxldHRlcnNSZWdleC50ZXN0KGNoYXIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFzdGVGb3JMZXR0ZXJzKGV2ZW50OiBDbGlwYm9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYUxldHRlcnNPbmx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXN0ZWRUZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgndGV4dCcpIHx8ICcnO1xuICAgIGNvbnN0IGZpbHRlcmVkVGV4dCA9IHBhc3RlZFRleHQucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xuXG4gICAgaWYgKGZpbHRlcmVkVGV4dCkge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcblxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIGZpbHRlcmVkVGV4dCArIGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcblxuICAgICAgLy8gUmVzdGF1cmFyIHBvc2ljacOzbiBkZWwgY3Vyc29yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgsIHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwiXCI+XG4gIDxsYWJlbCAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFtmb3JdPVwiaWRcIiBbY2xhc3NdPVwibGFiZWxDbGFzc2VzXCI+XG4gICAge3sgbGFiZWwgfX1cbiAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XG4gIDwvbGFiZWw+XG5cbiAgPGRpdiBbY2xhc3NdPVwiaW5wdXRHcm91cENsYXNzZXNcIj5cbiAgICA8c3BhbiAqbmdJZj1cImxlZnRJY29uXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgKm5nSWY9XCIhbGVmdEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtuYW1lXT1cImxlZnRJY29uXCIgXG4gICAgICAgIHNpemU9XCJtZFwiPlxuICAgICAgPC9zYS1pY29uPlxuICAgICAgPGkgXG4gICAgICAgICpuZ0lmPVwibGVmdEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtjbGFzc109XCJsZWZ0SWNvblwiPlxuICAgICAgPC9pPlxuICAgIDwvc3Bhbj5cblxuICAgIDxpbnB1dFxuICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgW3R5cGVdPVwiaW5wdXRUeXBlXCJcbiAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzZXNcIlxuICAgICAgW25nU3R5bGVdPVwiaW5wdXRTdHlsZXNcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFttaW5sZW5ndGhdPVwibWlubGVuZ3RoXCJcbiAgICAgIFttYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcbiAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxuICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcbiAgICAgIGRhdGEtZ3JhbW09XCJmYWxzZVwiXG4gICAgICBkYXRhLWdyYW1tX2VkaXRvcj1cImZhbHNlXCJcbiAgICAgIGRhdGEtZW5hYmxlLWdyYW1tYXJseT1cImZhbHNlXCJcbiAgICAgIChmb2N1c2luKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcbiAgICAgIChmb2N1c291dCk9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChpbnB1dCk9XCJzYU51bWJlcnNPbmx5ID8gb25JbnB1dEZvck51bWJlcnMoJGV2ZW50KSA6IChzYUxldHRlcnNPbmx5ID8gb25JbnB1dEZvckxldHRlcnMoJGV2ZW50KSA6IG51bGwpXCJcbiAgICAgIChrZXl1cCk9XCJvbktleVVwKCRldmVudClcIlxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgKGtleXByZXNzKT1cInNhTnVtYmVyc09ubHkgPyBvbktleVByZXNzRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvbktleVByZXNzRm9yTGV0dGVycygkZXZlbnQpIDogb25LZXlQcmVzcygkZXZlbnQpKVwiXG4gICAgICAocGFzdGUpPVwic2FOdW1iZXJzT25seSA/IG9uUGFzdGVGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uUGFzdGVGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXG4gICAgLz5cblxuICAgIDxzcGFuICpuZ0lmPVwicmlnaHRJY29uICYmIHR5cGUgIT09ICdwYXNzd29yZCdcIiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cbiAgICAgIDxzYS1pY29uIFxuICAgICAgICAqbmdJZj1cIiFyaWdodEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtuYW1lXT1cInJpZ2h0SWNvblwiIFxuICAgICAgICBzaXplPVwic21cIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICAgIDxpIFxuICAgICAgICAqbmdJZj1cInJpZ2h0SWNvbi5pbmNsdWRlcygnZmEtJylcIiBcbiAgICAgICAgW2NsYXNzXT1cInJpZ2h0SWNvblwiPlxuICAgICAgPC9pPlxuICAgIDwvc3Bhbj5cblxuICAgIDxidXR0b25cbiAgICAgICpuZ0lmPVwidHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiXG4gICAgICAoY2xpY2spPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5KClcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJzaG93UGFzc3dvcmQgPyAnT2N1bHRhciBjb250cmFzZcOxYScgOiAnTW9zdHJhciBjb250cmFzZcOxYSdcIlxuICAgID5cbiAgICAgIDxzYS1pY29uIFxuICAgICAgICBbbmFtZV09XCJzaG93UGFzc3dvcmQgPyAnZXllLXNsYXNoJyA6ICdleWUnXCIgXG4gICAgICAgIHNpemU9XCJzbVwiPlxuICAgICAgPC9zYS1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgW2NsYXNzXT1cImhlbHBlclRleHRDbGFzc2VzXCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZXh0XCIgW2NsYXNzXT1cImVycm9yVGV4dENsYXNzZXNcIj57eyBlcnJvclRleHQgfX08L2Rpdj5cbjwvZGl2PiJdfQ==