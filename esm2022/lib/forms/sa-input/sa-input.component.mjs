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
    focus = new EventEmitter();
    blur = new EventEmitter();
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
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.isFocused = false;
        this.onTouched();
        this.blur.emit(event);
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaInputComponent, selector: "sa-input", inputs: { value: "value", type: "type", placeholder: "placeholder", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", leftIcon: "leftIcon", rightIcon: "rightIcon", required: "required", readonly: "readonly", disabled: "disabled", id: "id", name: "name", autocomplete: "autocomplete", min: "min", max: "max", minlength: "minlength", maxlength: "maxlength", pattern: "pattern", backgroundColor: "backgroundColor", textColor: "textColor", boldText: "boldText", class: "class", saNumbersOnly: "saNumbersOnly", allowDecimals: "allowDecimals", allowNegative: "allowNegative", maxDecimals: "maxDecimals", saLettersOnly: "saLettersOnly", allowSpaces: "allowSpaces", allowAccents: "allowAccents" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur", keyup: "keyup", keydown: "keydown", keypress: "keypress", enter: "enter" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaInputComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"\">\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"md\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      #inputElement\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (change)=\"onInputChange($event)\"\n      (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\n      (keyup)=\"onKeyUp($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : onKeyPress($event))\"\n      (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-control.input-bold{font-weight:700!important}:host .form-control.input-bold::placeholder{font-weight:400!important}:host .form-control.input-bold::-webkit-input-placeholder{font-weight:400!important}:host .form-control.input-bold::-moz-placeholder{font-weight:400!important}:host .form-control.input-bold:-ms-input-placeholder{font-weight:400!important}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:36px;padding:7px 12px;font-size:12px;border-radius:3px}:host .input-group.input-group-md>.form-control,:host .input-group.input-group-md>.input-group-text{min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:44px;padding:10px 14px;font-size:15px;border-radius:5px}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .input-group-text{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .input-group-text{min-height:44px;padding:10px 14px;font-size:15px}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .btn-outline-secondary{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .btn-outline-secondary{min-height:44px;padding:10px 14px;font-size:15px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:14px}:host sa-icon[size=sm] svg{height:14px;width:14px}:host sa-icon[size=md]{font-size:16px}:host sa-icon[size=md] svg{height:16px;width:16px}:host sa-icon[size=lg]{font-size:20px}:host sa-icon[size=lg] svg{height:20px;width:20px}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:16px}:host .input-group-sm .input-group-text sa-icon svg{width:16px;height:16px}:host .input-group-md .input-group-text sa-icon{font-size:18px}:host .input-group-md .input-group-text sa-icon svg{width:18px;height:18px}:host .input-group-lg .input-group-text sa-icon{font-size:22px}:host .input-group-lg .input-group-text sa-icon svg{width:22px;height:22px}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:16px}:host .input-group-sm .btn sa-icon svg{width:16px;height:16px}:host .input-group-md .btn sa-icon{font-size:18px}:host .input-group-md .btn sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn sa-icon{font-size:22px}:host .input-group-lg .btn sa-icon svg{width:22px;height:22px}:host .input-group .btn-outline-secondary{min-height:40px;display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:36px}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:16px}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:16px;height:16px}:host .input-group-md .btn-outline-secondary{min-height:40px}:host .input-group-md .btn-outline-secondary sa-icon{font-size:18px}:host .input-group-md .btn-outline-secondary sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn-outline-secondary{min-height:44px}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:22px}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:22px;height:22px}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.SaIconComponent, selector: "sa-icon", inputs: ["name", "color", "size"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-input', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaInputComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\n  <label *ngIf=\"shouldShowLabel\" [for]=\"id\" [class]=\"labelClasses\">\n    {{ label }}\n    <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\n  </label>\n\n  <div [class]=\"inputGroupClasses\">\n    <span *ngIf=\"leftIcon\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!leftIcon.includes('fa-')\" \n        [name]=\"leftIcon\" \n        size=\"md\">\n      </sa-icon>\n      <i \n        *ngIf=\"leftIcon.includes('fa-')\" \n        [class]=\"leftIcon\">\n      </i>\n    </span>\n\n    <input\n      #inputElement\n      [id]=\"id\"\n      [name]=\"name\"\n      [type]=\"inputType\"\n      [class]=\"inputClasses\"\n      [ngStyle]=\"inputStyles\"\n      [(ngModel)]=\"value\"\n      (ngModelChange)=\"onModelChange($event)\"\n      [placeholder]=\"placeholder\"\n      [required]=\"required\"\n      [readonly]=\"readonly\"\n      [disabled]=\"disabled\"\n      [autocomplete]=\"autocomplete\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [minlength]=\"minlength\"\n      [maxlength]=\"maxlength\"\n      [pattern]=\"pattern\"\n      spellcheck=\"false\"\n      autocorrect=\"off\"\n      autocapitalize=\"off\"\n      data-gramm=\"false\"\n      data-gramm_editor=\"false\"\n      data-enable-grammarly=\"false\"\n      (focus)=\"onInputFocus($event)\"\n      (blur)=\"onInputBlur($event)\"\n      (change)=\"onInputChange($event)\"\n      (input)=\"saNumbersOnly ? onInputForNumbers($event) : (saLettersOnly ? onInputForLetters($event) : null)\"\n      (keyup)=\"onKeyUp($event)\"\n      (keydown)=\"onKeyDown($event)\"\n      (keypress)=\"saNumbersOnly ? onKeyPressForNumbers($event) : (saLettersOnly ? onKeyPressForLetters($event) : onKeyPress($event))\"\n      (paste)=\"saNumbersOnly ? onPasteForNumbers($event) : (saLettersOnly ? onPasteForLetters($event) : null)\"\n    />\n\n    <span *ngIf=\"rightIcon && type !== 'password'\" class=\"input-group-text\">\n      <sa-icon \n        *ngIf=\"!rightIcon.includes('fa-')\" \n        [name]=\"rightIcon\" \n        size=\"sm\">\n      </sa-icon>\n      <i \n        *ngIf=\"rightIcon.includes('fa-')\" \n        [class]=\"rightIcon\">\n      </i>\n    </span>\n\n    <button\n      *ngIf=\"type === 'password'\"\n      type=\"button\"\n      class=\"btn btn-outline-secondary\"\n      (click)=\"togglePasswordVisibility()\"\n      [attr.aria-label]=\"showPassword ? 'Ocultar contrase\u00F1a' : 'Mostrar contrase\u00F1a'\"\n    >\n      <sa-icon \n        [name]=\"showPassword ? 'eye-slash' : 'eye'\" \n        size=\"sm\">\n      </sa-icon>\n    </button>\n  </div>\n\n  <div *ngIf=\"helperText && !errorText\" [class]=\"helperTextClasses\">{{ helperText }}</div>\n  <div *ngIf=\"errorText\" [class]=\"errorTextClasses\">{{ errorText }}</div>\n</div>", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host{width:100%;box-sizing:border-box}:host .form-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;margin-bottom:2px;display:inline-block}:host .form-label.label-sm{font-size:11px!important}:host .form-label.label-md{font-size:14px!important}:host .form-label.label-lg{font-size:16px!important}:host .form-label.ghost-label{visibility:hidden}:host .form-label.ghost-label:before{content:\"\\a0\"}:host .form-control{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;width:100%;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;outline:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none!important;text-decoration-line:none!important;text-decoration-style:none!important;text-decoration-color:transparent!important}:host .form-control::-webkit-grammar-error-underline{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-webkit-spell-check-decoration{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::-moz-spell-check{display:none!important;text-decoration:none!important;background:none!important}:host .form-control::part(input){text-decoration:none!important;background-image:none!important}:host .form-control:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control:disabled{background-color:#e9ecef;opacity:1}:host .form-control:read-only{background-color:#e9ecef}:host .form-control.is-valid{border-color:#36ad55}:host .form-control.is-valid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #36ad55!important;border-color:transparent!important}:host .form-control.is-invalid{border-color:#ef4444}:host .form-control.is-invalid:focus{outline:none!important;box-shadow:inset 0 0 0 1.5px #ef4444!important;border-color:transparent!important}:host .form-control.form-control-sm{min-height:23px;padding:4px 8px!important;font-size:11px!important;border-radius:5px}:host .form-control.form-control-md{min-height:30px;padding:8px 12px;font-size:13px;border-radius:6px}:host .form-control.form-control-lg{min-height:37px;padding:10px 14px;font-size:15px;border-radius:7px}:host .form-control.input-bold{font-weight:700!important}:host .form-control.input-bold::placeholder{font-weight:400!important}:host .form-control.input-bold::-webkit-input-placeholder{font-weight:400!important}:host .form-control.input-bold::-moz-placeholder{font-weight:400!important}:host .form-control.input-bold:-ms-input-placeholder{font-weight:400!important}:host .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host .input-group>.form-control{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}:host .input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group.input-group-sm>.form-control,:host .input-group.input-group-sm>.input-group-text{min-height:36px;padding:7px 12px;font-size:12px;border-radius:3px}:host .input-group.input-group-md>.form-control,:host .input-group.input-group-md>.input-group-text{min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px}:host .input-group.input-group-lg>.form-control,:host .input-group.input-group-lg>.input-group-text{min-height:44px;padding:10px 14px;font-size:15px;border-radius:5px}:host .input-group-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:40px;padding:8px 12px;font-size:14px;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;white-space:nowrap;background-color:#f8f9fa;border:1px solid #dee2e6;box-sizing:border-box;margin-bottom:0}:host .input-group-text:first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host .input-group-text:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-sm :host .input-group-text{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .input-group-text{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .input-group-text{min-height:44px;padding:10px 14px;font-size:15px}:host .btn-outline-secondary{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;justify-content:center;font-weight:400;line-height:1.5;color:#6c757d;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;user-select:none;background-color:transparent;border:1px solid #dee2e6;min-height:40px;padding:8px 12px;font-size:14px;border-radius:4px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-sizing:border-box;margin-bottom:0}.input-group :host .btn-outline-secondary:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}:host .btn-outline-secondary:hover{background-color:#f8f9fa;border-color:#dee2e6;color:#495057}:host .btn-outline-secondary:focus{outline:none!important;box-shadow:none!important;border-color:#dee2e6!important}:host .btn-outline-secondary:disabled{opacity:.65;cursor:not-allowed}.input-group-sm :host .btn-outline-secondary{min-height:36px;padding:7px 12px;font-size:12px}.input-group-md :host .btn-outline-secondary{min-height:40px;padding:8px 12px;font-size:14px}.input-group-lg :host .btn-outline-secondary{min-height:44px;padding:10px 14px;font-size:15px}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:2px}:host .form-text.helper-text-sm{font-size:12px}:host .form-text.helper-text-md{font-size:12px}:host .form-text.helper-text-lg{font-size:14px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:2px;color:#dc3545;display:block}:host .invalid-feedback.error-text-sm{font-size:12px}:host .invalid-feedback.error-text-md{font-size:12px}:host .invalid-feedback.error-text-lg{font-size:14px}:host .text-danger{color:#dc3545!important}:host :last-child{margin-bottom:0!important}:host i{font-style:normal;display:inline-block;width:1em;height:1em;vertical-align:middle}:host sa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon fa-icon{display:inline-block!important;vertical-align:middle;line-height:1}:host sa-icon svg{display:inline-block;font-size:inherit;height:1em;width:1em;overflow:visible;vertical-align:-.125em}:host sa-icon[size=sm]{font-size:14px}:host sa-icon[size=sm] svg{height:14px;width:14px}:host sa-icon[size=md]{font-size:16px}:host sa-icon[size=md] svg{height:16px;width:16px}:host sa-icon[size=lg]{font-size:20px}:host sa-icon[size=lg] svg{height:20px;width:20px}:host .input-group-text i,:host .input-group-text sa-icon{display:flex;align-items:center;justify-content:center;width:1em;height:1em}:host .input-group-text i fa-icon,:host .input-group-text sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .input-group-text i svg,:host .input-group-text sa-icon svg{width:1em;height:1em}:host .input-group-sm .input-group-text sa-icon{font-size:16px}:host .input-group-sm .input-group-text sa-icon svg{width:16px;height:16px}:host .input-group-md .input-group-text sa-icon{font-size:18px}:host .input-group-md .input-group-text sa-icon svg{width:18px;height:18px}:host .input-group-lg .input-group-text sa-icon{font-size:22px}:host .input-group-lg .input-group-text sa-icon svg{width:22px;height:22px}:host .btn sa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center}:host .btn sa-icon svg{display:block;margin:0 auto}:host .input-group-sm .btn sa-icon{font-size:16px}:host .input-group-sm .btn sa-icon svg{width:16px;height:16px}:host .input-group-md .btn sa-icon{font-size:18px}:host .input-group-md .btn sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn sa-icon{font-size:22px}:host .input-group-lg .btn sa-icon svg{width:22px;height:22px}:host .input-group .btn-outline-secondary{min-height:40px;display:flex!important;align-items:center;justify-content:center}:host .input-group .btn-outline-secondary sa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon fa-icon{display:flex!important;align-items:center;justify-content:center;line-height:1}:host .input-group .btn-outline-secondary sa-icon svg{display:block}:host .input-group-sm .btn-outline-secondary{min-height:36px}:host .input-group-sm .btn-outline-secondary sa-icon{font-size:16px}:host .input-group-sm .btn-outline-secondary sa-icon svg{width:16px;height:16px}:host .input-group-md .btn-outline-secondary{min-height:40px}:host .input-group-md .btn-outline-secondary sa-icon{font-size:18px}:host .input-group-md .btn-outline-secondary sa-icon svg{width:18px;height:18px}:host .input-group-lg .btn-outline-secondary{min-height:44px}:host .input-group-lg .btn-outline-secondary sa-icon{font-size:22px}:host .input-group-lg .btn-outline-secondary sa-icon svg{width:22px;height:22px}:host fa-icon{display:inline-block!important;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}:host .input-group-text:empty:before,:host .btn:empty:before{content:\"\\25ef\";color:#6c757d;font-size:inherit;display:inline-block;vertical-align:middle}:host .input-group-text:not(:empty):before,:host .btn:not(:empty):before{display:none}\n"] }]
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
            }], focus: [{
                type: Output
            }], blur: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3BLLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFtQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixJQUFJLEdBQWMsTUFBTSxDQUFDO0lBQ3pCLFdBQVcsR0FBVyxFQUFFLENBQUM7SUFDekIsSUFBSSxHQUFjLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQWdCLFNBQVMsQ0FBQztJQUNoQyxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBRTVCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDbEMsSUFDSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVSxHQUFZLEtBQUssQ0FBQztJ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LEtBQUs7Z0JBR0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQU1zQyxZQUFZO3NCQUF4RCxTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBY3ZDLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IHR5cGUgSW5wdXRTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xuZXhwb3J0IHR5cGUgSW5wdXRUeXBlID0gJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICd0ZWwnO1xuZXhwb3J0IHR5cGUgSW5wdXRTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNhSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlOiBJbnB1dFR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2l6ZTogSW5wdXRTaXplID0gJ21kJztcbiAgQElucHV0KCkgc3RhdHVzOiBJbnB1dFN0YXR1cyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXBkYXRlTnVtYmVyc1JlZ2V4KCk7XG4gICAgdGhpcy51cGRhdGVMZXR0ZXJzUmVnZXgoKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcbiAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xuICB9XG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbDtcbiAgfVxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGVmdEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSByaWdodEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZyA9ICdvZmYnO1xuICBASW5wdXQoKSBtaW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtaW5sZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBwYXR0ZXJuOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGV4dENvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYm9sZFRleHQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSGFjZXIgZWwgdGV4dG8gZGVsIGlucHV0IGJvbGRcblxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgLy8gVmFsaWRhY2lvbmVzIGludGVncmFkYXNcbiAgQElucHV0KCkgc2FOdW1iZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd0RlY2ltYWxzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbWF4RGVjaW1hbHM6IG51bWJlciA9IDI7XG5cbiAgQElucHV0KCkgc2FMZXR0ZXJzT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd1NwYWNlczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFsbG93QWNjZW50czogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICBzaG93UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNGb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gUmVmZXJlbmNpYSBhbCBlbGVtZW50byBpbnB1dCBuYXRpdm9cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLy8gVmFyaWFibGVzIHBhcmEgdmFsaWRhY2nDs24gZGUgbsO6bWVyb3NcbiAgcHJpdmF0ZSBudW1iZXJzUmVnZXghOiBSZWdFeHA7XG4gIHByaXZhdGUgaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0ID0gZmFsc2U7XG5cbiAgLy8gVmFyaWFibGVzIHBhcmEgdmFsaWRhY2nDs24gZGUgbGV0cmFzXG4gIHByaXZhdGUgbGV0dGVyc1JlZ2V4ITogUmVnRXhwO1xuXG4gIC8vIEhvc3RCaW5kaW5nIHBhcmEgc29wb3J0ZSBkZSBuZ0NsYXNzXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBpbnB1dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Zvcm0tY29udHJvbC1zbScsXG4gICAgICAnbWQnOiAnZm9ybS1jb250cm9sLW1kJyxcbiAgICAgICdsZyc6ICdmb3JtLWNvbnRyb2wtbGcnXG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNvbnRyb2wnXTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQWdyZWdhciBjbGFzZSBib2xkIHNpIGVzdMOhIGFjdGl2YVxuICAgIGlmICh0aGlzLmJvbGRUZXh0KSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpbnB1dC1ib2xkJyk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZm9ybS1sYWJlbCBsYWJlbC1zbScsXG4gICAgICAnbWQnOiAnZm9ybS1sYWJlbCBsYWJlbC1tZCcsXG4gICAgICAnbGcnOiAnZm9ybS1sYWJlbCBsYWJlbC1sZydcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWxhYmVsIGxhYmVsLW1kJztcbiAgICBcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcbiAgICBpZiAodGhpcy5ub0xhYmVsKSB7XG4gICAgICByZXR1cm4gYCR7YmFzZUNsYXNzZXN9IGdob3N0LWxhYmVsYDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzO1xuICB9XG5cbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XG4gIH1cblxuICBnZXQgaW5wdXRHcm91cENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBoYXNJY29ucyA9IHRoaXMubGVmdEljb24gfHwgdGhpcy5yaWdodEljb24gfHwgdGhpcy50eXBlID09PSAncGFzc3dvcmQnO1xuICAgIFxuICAgIGlmIChoYXNJY29ucykge1xuICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICAgJ3NtJzogJ2lucHV0LWdyb3VwLXNtJyxcbiAgICAgICAgJ21kJzogJycsIC8vIEJvb3RzdHJhcCBkZWZhdWx0XG4gICAgICAgICdsZyc6ICdpbnB1dC1ncm91cC1sZydcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2lucHV0LWdyb3VwJ107XG4gICAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdICYmIHNpemVNYXBbdGhpcy5zaXplXSAhPT0gJycpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldCBpbnB1dFR5cGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlucHV0U3R5bGVzKCk6IGFueSB7XG4gICAgY29uc3Qgc3R5bGVzOiBhbnkgPSB7fTtcbiAgICBcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLnRleHRDb2xvcikge1xuICAgICAgc3R5bGVzWydjb2xvciddID0gdGhpcy50ZXh0Q29sb3I7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBnZXQgaGVscGVyVGV4dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS10ZXh0J107XG4gICAgXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdoZWxwZXItdGV4dC1zbScsXG4gICAgICAnbWQnOiAnaGVscGVyLXRleHQtbWQnLFxuICAgICAgJ2xnJzogJ2hlbHBlci10ZXh0LWxnJ1xuICAgIH07XG4gICAgXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgZ2V0IGVycm9yVGV4dENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnaW52YWxpZC1mZWVkYmFjaycsICdkLWJsb2NrJ107XG4gICAgXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdlcnJvci10ZXh0LXNtJyxcbiAgICAgICdtZCc6ICdlcnJvci10ZXh0LW1kJyxcbiAgICAgICdsZyc6ICdlcnJvci10ZXh0LWxnJ1xuICAgIH07XG4gICAgXG4gICAgaWYgKHNpemVNYXBbdGhpcy5zaXplXSkge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8/ICcnO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25JbnB1dEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICBvbklucHV0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5rZXl1cC5lbWl0KGV2ZW50KTtcbiAgICAvLyBFbWl0aXIgZXZlbnRvIGVzcGVjw61maWNvIHBhcmEgRW50ZXJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmVudGVyLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5ZG93bi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmtleXByZXNzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcbiAgfVxuXG4gIC8vIE3DqXRvZG9zIHDDumJsaWNvcyBwYXJhIGFjY2VzbyBhbCBpbnB1dCBuYXRpdm9cbiAgLyoqXG4gICAqIEVuZm9jYSBlbCBpbnB1dFxuICAgKi9cbiAgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUXVpdGEgZWwgZm9jbyBkZWwgaW5wdXRcbiAgICovXG4gIGJsdXJJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY2Npb25hIHRvZG8gZWwgdGV4dG8gZGVsIGlucHV0XG4gICAqL1xuICBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRpZW5lIGxhIHJlZmVyZW5jaWEgYWwgZWxlbWVudG8gaW5wdXQgbmF0aXZvXG4gICAqL1xuICBnZXROYXRpdmVJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50IHx8IG51bGw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2FsbG93RGVjaW1hbHMnXSB8fCBjaGFuZ2VzWydhbGxvd05lZ2F0aXZlJ10gfHwgY2hhbmdlc1snbWF4RGVjaW1hbHMnXSkge1xuICAgICAgdGhpcy51cGRhdGVOdW1iZXJzUmVnZXgoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2FsbG93U3BhY2VzJ10gfHwgY2hhbmdlc1snYWxsb3dBY2NlbnRzJ10pIHtcbiAgICAgIHRoaXMudXBkYXRlTGV0dGVyc1JlZ2V4KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBOw5pNRVJPUyA9PT09PT09PT09XG4gIHByaXZhdGUgdXBkYXRlTnVtYmVyc1JlZ2V4KCk6IHZvaWQge1xuICAgIGxldCBwYXR0ZXJuID0gJ1teMC05JztcblxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMpIHtcbiAgICAgIHBhdHRlcm4gKz0gJy4nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFsbG93TmVnYXRpdmUpIHtcbiAgICAgIHBhdHRlcm4gKz0gJy0nO1xuICAgIH1cblxuICAgIHBhdHRlcm4gKz0gJ10nO1xuICAgIHRoaXMubnVtYmVyc1JlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICB9XG5cbiAgb25JbnB1dEZvck51bWJlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5IHx8IHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSB0cnVlO1xuICAgIGxldCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSk7XG5cbiAgICAvLyBQcmltZXJvIGVsaW1pbmFyIHRvZG9zIGxvcyBjYXJhY3RlcmVzIG5vIHbDoWxpZG9zIGV4Y2VwdG8gcHVudG9zIHkgc2lnbm9zXG4gICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSh0aGlzLm51bWJlcnNSZWdleCwgJycpO1xuXG4gICAgLy8gUmVtb3ZlciBwdW50b3MgZGVjaW1hbGVzIHNpIG5vIGVzdMOhbiBwZXJtaXRpZG9zXG4gICAgaWYgKCF0aGlzLmFsbG93RGVjaW1hbHMpIHtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhciBmb3JtYXRvIGRlIGRlY2ltYWxlc1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcblxuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBwdW50byBkZWNpbWFsXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0cy5zbGljZSgxKS5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmUtc3BsaXQgZGVzcHXDqXMgZGUgbGltcGlhclxuICAgICAgY29uc3QgY2xlYW5QYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcblxuICAgICAgLy8gTGltaXRhciBkZWNpbWFsZXNcbiAgICAgIGlmIChjbGVhblBhcnRzWzFdICYmIGNsZWFuUGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gY2xlYW5QYXJ0c1swXSArICcuJyArIGNsZWFuUGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZXIgc2lnbm8gbmVnYXRpdm8gc2kgbm8gZXN0w6EgcGVybWl0aWRvIG8gc2kgZXN0w6EgbWFsIHBvc2ljaW9uYWRvXG4gICAgaWYgKCF0aGlzLmFsbG93TmVnYXRpdmUpIHtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb2xvIHBlcm1pdGlyIHVuIHNpZ25vIG5lZ2F0aXZvIGFsIGluaWNpb1xuICAgICAgY29uc3QgaGFzTmVnYXRpdmUgPSBmaWx0ZXJlZFZhbHVlLnN0YXJ0c1dpdGgoJy0nKTtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuICAgICAgaWYgKGhhc05lZ2F0aXZlKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSAnLScgKyBmaWx0ZXJlZFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsVmFsdWUgIT09IGZpbHRlcmVkVmFsdWUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3QgbGVuZ3RoRGlmZiA9IGluaXRpYWxWYWx1ZS5sZW5ndGggLSBmaWx0ZXJlZFZhbHVlLmxlbmd0aDtcblxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UoZmlsdGVyZWRWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XG5cbiAgICAgIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGRlbCBjdXJzb3JcbiAgICAgIGNvbnN0IG5ld0N1cnNvclBvc2l0aW9uID0gTWF0aC5tYXgoMCwgY3Vyc29yUG9zaXRpb24gLSBsZW5ndGhEaWZmKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yUG9zaXRpb24sIG5ld0N1cnNvclBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IGZhbHNlO1xuICB9XG5cbiAgb25LZXlQcmVzc0Zvck51bWJlcnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcblxuICAgIC8vIFBlcm1pdGlyIHRlY2xhcyBkZSBjb250cm9sXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBlcm1pdGlyIHB1bnRvIGRlY2ltYWwgc29sbyBzaSBubyBleGlzdGUgdW5vIHlhXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBjaGFyID09PSAnLicpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGVybWl0aXIgc2lnbm8gbmVnYXRpdm8gYWwgaW5pY2lvXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSAmJiBjaGFyID09PSAnLScpIHtcbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvbiA9PT0gMCAmJiAhY3VycmVudFZhbHVlLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTb2xvIHBlcm1pdGlyIG7Dum1lcm9zXG4gICAgaWYgKCEvXlxcZCQvLnRlc3QoY2hhcikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhciBtw6F4aW1vIGRlIGRlY2ltYWxlcyBzaSB5YSBleGlzdGUgdW4gcHVudG9cbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgZGVjaW1hbFBhcnQgPSBwYXJ0c1sxXSB8fCAnJztcbiAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcbiAgICAgIGNvbnN0IGRlY2ltYWxTdGFydFBvc2l0aW9uID0gcGFydHNbMF0ubGVuZ3RoICsgMTtcblxuICAgICAgLy8gU2kgZWwgY3Vyc29yIGVzdMOhIGRlc3B1w6lzIGRlbCBwdW50byB5IHlhIGhheSBtYXhEZWNpbWFscyBkw61naXRvcyAoc2luIHNlbGVjY2nDs24pXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPj0gZGVjaW1hbFN0YXJ0UG9zaXRpb24gJiZcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9PT0gc2VsZWN0aW9uRW5kICYmXG4gICAgICAgICAgZGVjaW1hbFBhcnQubGVuZ3RoID49IHRoaXMubWF4RGVjaW1hbHMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBhc3RlRm9yTnVtYmVycyhldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcbiAgICBsZXQgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XG5cbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzIGVuIHRleHRvIHBlZ2Fkb1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRUZXh0LmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRUZXh0LnNwbGl0KCcuJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFydHNbMV0gJiYgcGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzWzFdLnN1YnN0cmluZygwLCB0aGlzLm1heERlY2ltYWxzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyZWRUZXh0KSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xuXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgZmlsdGVyZWRUZXh0ICsgY3VycmVudFZhbHVlLnN1YnN0cmluZyhlbmQpO1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCwgc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gVkFMSURBQ0nDk04gREUgTEVUUkFTID09PT09PT09PT1cbiAgcHJpdmF0ZSB1cGRhdGVMZXR0ZXJzUmVnZXgoKTogdm9pZCB7XG4gICAgbGV0IHBhdHRlcm4gPSAnW15hLXpBLVonO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dTcGFjZXMpIHtcbiAgICAgIHBhdHRlcm4gKz0gJyAnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFsbG93QWNjZW50cykge1xuICAgICAgcGF0dGVybiArPSAnw6HDqcOtw7PDusOBw4nDjcOTw5rDscORw7zDnCc7XG4gICAgfVxuXG4gICAgcGF0dGVybiArPSAnXSc7XG4gICAgdGhpcy5sZXR0ZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gIH1cblxuICBvbklucHV0Rm9yTGV0dGVycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSkucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UoZmlsdGVyZWRWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzc0ZvckxldHRlcnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG5cbiAgICAvLyBQZXJtaXRpciB0ZWNsYXMgZGUgY29udHJvbFxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdEZWxldGUnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXR0ZXJzUmVnZXgudGVzdChjaGFyKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvblBhc3RlRm9yTGV0dGVycyhldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcbiAgICBjb25zdCBmaWx0ZXJlZFRleHQgPSBwYXN0ZWRUZXh0LnJlcGxhY2UodGhpcy5sZXR0ZXJzUmVnZXgsICcnKTtcblxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG5cbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoLCBzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59IiwiPGRpdiBjbGFzcz1cIlwiPlxuICA8bGFiZWwgKm5nSWY9XCJzaG91bGRTaG93TGFiZWxcIiBbZm9yXT1cImlkXCIgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiPlxuICAgIHt7IGxhYmVsIH19XG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICA8L2xhYmVsPlxuXG4gIDxkaXYgW2NsYXNzXT1cImlucHV0R3JvdXBDbGFzc2VzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJsZWZ0SWNvblwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgPHNhLWljb24gXG4gICAgICAgICpuZ0lmPVwiIWxlZnRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbbmFtZV09XCJsZWZ0SWNvblwiIFxuICAgICAgICBzaXplPVwibWRcIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICAgIDxpIFxuICAgICAgICAqbmdJZj1cImxlZnRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbY2xhc3NdPVwibGVmdEljb25cIj5cbiAgICAgIDwvaT5cbiAgICA8L3NwYW4+XG5cbiAgICA8aW5wdXRcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFt0eXBlXT1cImlucHV0VHlwZVwiXG4gICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcbiAgICAgIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVzXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbbWlubGVuZ3RoXT1cIm1pbmxlbmd0aFwiXG4gICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXG4gICAgICBbcGF0dGVybl09XCJwYXR0ZXJuXCJcbiAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICBkYXRhLWdyYW1tPVwiZmFsc2VcIlxuICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9XCJmYWxzZVwiXG4gICAgICBkYXRhLWVuYWJsZS1ncmFtbWFybHk9XCJmYWxzZVwiXG4gICAgICAoZm9jdXMpPVwib25JbnB1dEZvY3VzKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAoY2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoaW5wdXQpPVwic2FOdW1iZXJzT25seSA/IG9uSW5wdXRGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uSW5wdXRGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXG4gICAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChrZXlwcmVzcyk9XCJzYU51bWJlcnNPbmx5ID8gb25LZXlQcmVzc0Zvck51bWJlcnMoJGV2ZW50KSA6IChzYUxldHRlcnNPbmx5ID8gb25LZXlQcmVzc0ZvckxldHRlcnMoJGV2ZW50KSA6IG9uS2V5UHJlc3MoJGV2ZW50KSlcIlxuICAgICAgKHBhc3RlKT1cInNhTnVtYmVyc09ubHkgPyBvblBhc3RlRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvblBhc3RlRm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxuICAgIC8+XG5cbiAgICA8c3BhbiAqbmdJZj1cInJpZ2h0SWNvbiAmJiB0eXBlICE9PSAncGFzc3dvcmQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgKm5nSWY9XCIhcmlnaHRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbbmFtZV09XCJyaWdodEljb25cIiBcbiAgICAgICAgc2l6ZT1cInNtXCI+XG4gICAgICA8L3NhLWljb24+XG4gICAgICA8aSBcbiAgICAgICAgKm5nSWY9XCJyaWdodEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtjbGFzc109XCJyaWdodEljb25cIj5cbiAgICAgIDwvaT5cbiAgICA8L3NwYW4+XG5cbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cInR5cGUgPT09ICdwYXNzd29yZCdcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgKGNsaWNrKT1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwic2hvd1Bhc3N3b3JkID8gJ09jdWx0YXIgY29udHJhc2XDsWEnIDogJ01vc3RyYXIgY29udHJhc2XDsWEnXCJcbiAgICA+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgW25hbWVdPVwic2hvd1Bhc3N3b3JkID8gJ2V5ZS1zbGFzaCcgOiAnZXllJ1wiIFxuICAgICAgICBzaXplPVwic21cIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIFtjbGFzc109XCJoZWxwZXJUZXh0Q2xhc3Nlc1wiPnt7IGhlbHBlclRleHQgfX08L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIFtjbGFzc109XCJlcnJvclRleHRDbGFzc2VzXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XG48L2Rpdj4iXX0=