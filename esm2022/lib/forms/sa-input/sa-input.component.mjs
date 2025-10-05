import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, ViewChild, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../sa-icon/sa-icon.component";
export class SaInputComponent {
    cdr;
    value = '';
    type = 'text';
    placeholder = '';
    size = 'md';
    status = 'default';
    label = '';
    constructor(cdr) {
        this.cdr = cdr;
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
        // Detectar cambios en el status para prevenir ExpressionChangedAfterItHasBeenCheckedError
        if (changes['status']) {
            setTimeout(() => {
                this.cdr.detectChanges();
            });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaInputComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { value: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2EtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FubmEtdWkvc3JjL2xpYi9mb3Jtcy9zYS1pbnB1dC9zYS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLWlucHV0L3NhLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZMLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFtQnpFLE1BQU0sT0FBTyxnQkFBZ0I7SUFRUDtJQVBYLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsSUFBSSxHQUFjLE1BQU0sQ0FBQztJQUN6QixXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLElBQUksR0FBYyxJQUFJLENBQUM7SUFDdkIsTUFBTSxHQUFnQixTQUFTLENBQUM7SUFDaEMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUU1QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sUUFBUSxHQUFZLEtBQUssQ0FBQztJQUNsQyxJQUNJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFB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UUFBUTtzQkFBaEIsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFNc0MsWUFBWTtzQkFBeEQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQWN2QyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICdudW1iZXInIHwgJ3RlbCc7XG5leHBvcnQgdHlwZSBJbnB1dFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NhLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2EtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2FJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHR5cGU6IElucHV0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzaXplOiBJbnB1dFNpemUgPSAnbWQnO1xuICBASW5wdXQoKSBzdGF0dXM6IElucHV0U3RhdHVzID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy51cGRhdGVOdW1iZXJzUmVnZXgoKTtcbiAgICB0aGlzLnVwZGF0ZUxldHRlcnNSZWdleCgpO1xuICB9XG4gIFxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XG4gIH1cblxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gIH1cbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xuICB9XG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsZWZ0SWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJpZ2h0SWNvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ29mZic7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1pbmxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHBhdHRlcm46IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBib2xkVGV4dDogYm9vbGVhbiA9IGZhbHNlOyAvLyBIYWNlciBlbCB0ZXh0byBkZWwgaW5wdXQgYm9sZFxuXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAvLyBWYWxpZGFjaW9uZXMgaW50ZWdyYWRhc1xuICBASW5wdXQoKSBzYU51bWJlcnNPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93RGVjaW1hbHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dOZWdhdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtYXhEZWNpbWFsczogbnVtYmVyID0gMjtcblxuICBASW5wdXQoKSBzYUxldHRlcnNPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93U3BhY2VzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxsb3dBY2NlbnRzOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBmb2N1c2luID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXNvdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXl1cCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGtleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXlwcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuXG4gIHNob3dQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBSZWZlcmVuY2lhIGFsIGVsZW1lbnRvIGlucHV0IG5hdGl2b1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBuw7ptZXJvc1xuICBwcml2YXRlIG51bWJlcnNSZWdleCE6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSBmYWxzZTtcblxuICAvLyBWYXJpYWJsZXMgcGFyYSB2YWxpZGFjacOzbiBkZSBsZXRyYXNcbiAgcHJpdmF0ZSBsZXR0ZXJzUmVnZXghOiBSZWdFeHA7XG5cbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAnc20nOiAnZm9ybS1jb250cm9sLXNtJyxcbiAgICAgICdtZCc6ICdmb3JtLWNvbnRyb2wtbWQnLFxuICAgICAgJ2xnJzogJ2Zvcm0tY29udHJvbC1sZydcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY29udHJvbCddO1xuICAgIFxuICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xuICAgICAgYmFzZUNsYXNzZXMucHVzaChzaXplTWFwW3RoaXMuc2l6ZV0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZ3JlZ2FyIGNsYXNlIGJvbGQgc2kgZXN0w6EgYWN0aXZhXG4gICAgaWYgKHRoaXMuYm9sZFRleHQpIHtcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lucHV0LWJvbGQnKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICdzbSc6ICdmb3JtLWxhYmVsIGxhYmVsLXNtJyxcbiAgICAgICdtZCc6ICdmb3JtLWxhYmVsIGxhYmVsLW1kJyxcbiAgICAgICdsZyc6ICdmb3JtLWxhYmVsIGxhYmVsLWxnJ1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBzaXplTWFwW3RoaXMuc2l6ZV0gfHwgJ2Zvcm0tbGFiZWwgbGFiZWwtbWQnO1xuICAgIFxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxuICAgIGlmICh0aGlzLm5vTGFiZWwpIHtcbiAgICAgIHJldHVybiBgJHtiYXNlQ2xhc3Nlc30gZ2hvc3QtbGFiZWxgO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gIH1cblxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIC8vIFNpIGhpZGVMYWJlbCBlc3TDoSBhY3Rpdm8sIG51bmNhIG1vc3RyYXIgZWwgbGFiZWxcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcbiAgfVxuXG4gIGdldCBpbnB1dEdyb3VwQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc0ljb25zID0gdGhpcy5sZWZ0SWNvbiB8fCB0aGlzLnJpZ2h0SWNvbiB8fCB0aGlzLnR5cGUgPT09ICdwYXNzd29yZCc7XG4gICAgXG4gICAgaWYgKGhhc0ljb25zKSB7XG4gICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAnc20nOiAnaW5wdXQtZ3JvdXAtc20nLFxuICAgICAgICAnbWQnOiAnJywgLy8gQm9vdHN0cmFwIGRlZmF1bHRcbiAgICAgICAgJ2xnJzogJ2lucHV0LWdyb3VwLWxnJ1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgY2xhc3NlcyA9IFsnaW5wdXQtZ3JvdXAnXTtcbiAgICAgIGlmIChzaXplTWFwW3RoaXMuc2l6ZV0gJiYgc2l6ZU1hcFt0aGlzLnNpemVdICE9PSAnJykge1xuICAgICAgICBjbGFzc2VzLnB1c2goc2l6ZU1hcFt0aGlzLnNpemVdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IGlucHV0VHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXQgaW5wdXRTdHlsZXMoKTogYW55IHtcbiAgICBjb25zdCBzdHlsZXM6IGFueSA9IHt9O1xuICAgIFxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMudGV4dENvbG9yKSB7XG4gICAgICBzdHlsZXNbJ2NvbG9yJ10gPSB0aGlzLnRleHRDb2xvcjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIGdldCBoZWxwZXJUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLXRleHQnXTtcbiAgICBcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2hlbHBlci10ZXh0LXNtJyxcbiAgICAgICdtZCc6ICdoZWxwZXItdGV4dC1tZCcsXG4gICAgICAnbGcnOiAnaGVscGVyLXRleHQtbGcnXG4gICAgfTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICBnZXQgZXJyb3JUZXh0Q2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydpbnZhbGlkLWZlZWRiYWNrJywgJ2QtYmxvY2snXTtcbiAgICBcbiAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgJ3NtJzogJ2Vycm9yLXRleHQtc20nLFxuICAgICAgJ21kJzogJ2Vycm9yLXRleHQtbWQnLFxuICAgICAgJ2xnJzogJ2Vycm9yLXRleHQtbGcnXG4gICAgfTtcbiAgICBcbiAgICBpZiAoc2l6ZU1hcFt0aGlzLnNpemVdKSB7XG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKHNpemVNYXBbdGhpcy5zaXplXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPz8gJyc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbmlyIHF1ZSBlbCBldmVudG8gYnVyYnVqZWUgZnVlcmEgZGVsIFNoYWRvdyBET01cbiAgICB0aGlzLmZvY3VzaW4uZW1pdChldmVudCk7XG4gIH1cblxuICBvbklucHV0Qmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbmlyIHF1ZSBlbCBldmVudG8gYnVyYnVqZWUgZnVlcmEgZGVsIFNoYWRvdyBET01cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuZm9jdXNvdXQuZW1pdChldmVudCk7XG4gIH1cblxuICBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5rZXl1cC5lbWl0KGV2ZW50KTtcbiAgICAvLyBFbWl0aXIgZXZlbnRvIGVzcGVjw61maWNvIHBhcmEgRW50ZXJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmVudGVyLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMua2V5ZG93bi5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmtleXByZXNzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25JbnB1dENoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZDtcbiAgfVxuXG4gIC8vIE3DqXRvZG9zIHDDumJsaWNvcyBwYXJhIGFjY2VzbyBhbCBpbnB1dCBuYXRpdm9cbiAgLyoqXG4gICAqIEVuZm9jYSBlbCBpbnB1dFxuICAgKi9cbiAgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUXVpdGEgZWwgZm9jbyBkZWwgaW5wdXRcbiAgICovXG4gIGJsdXJJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY2Npb25hIHRvZG8gZWwgdGV4dG8gZGVsIGlucHV0XG4gICAqL1xuICBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPYnRpZW5lIGxhIHJlZmVyZW5jaWEgYWwgZWxlbWVudG8gaW5wdXQgbmF0aXZvXG4gICAqL1xuICBnZXROYXRpdmVJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Py5uYXRpdmVFbGVtZW50IHx8IG51bGw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2FsbG93RGVjaW1hbHMnXSB8fCBjaGFuZ2VzWydhbGxvd05lZ2F0aXZlJ10gfHwgY2hhbmdlc1snbWF4RGVjaW1hbHMnXSkge1xuICAgICAgdGhpcy51cGRhdGVOdW1iZXJzUmVnZXgoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2FsbG93U3BhY2VzJ10gfHwgY2hhbmdlc1snYWxsb3dBY2NlbnRzJ10pIHtcbiAgICAgIHRoaXMudXBkYXRlTGV0dGVyc1JlZ2V4KCk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0YXIgY2FtYmlvcyBlbiBlbCBzdGF0dXMgcGFyYSBwcmV2ZW5pciBFeHByZXNzaW9uQ2hhbmdlZEFmdGVySXRIYXNCZWVuQ2hlY2tlZEVycm9yXG4gICAgaWYgKGNoYW5nZXNbJ3N0YXR1cyddKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBWQUxJREFDScOTTiBERSBOw5pNRVJPUyA9PT09PT09PT09XG4gIHByaXZhdGUgdXBkYXRlTnVtYmVyc1JlZ2V4KCk6IHZvaWQge1xuICAgIGxldCBwYXR0ZXJuID0gJ1teMC05JztcblxuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMpIHtcbiAgICAgIHBhdHRlcm4gKz0gJy4nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFsbG93TmVnYXRpdmUpIHtcbiAgICAgIHBhdHRlcm4gKz0gJy0nO1xuICAgIH1cblxuICAgIHBhdHRlcm4gKz0gJ10nO1xuICAgIHRoaXMubnVtYmVyc1JlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xuICB9XG5cbiAgb25JbnB1dEZvck51bWJlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zYU51bWJlcnNPbmx5IHx8IHRoaXMuaXNQcm9jZXNzaW5nTnVtYmVyc0lucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5pdGlhbFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1Byb2Nlc3NpbmdOdW1iZXJzSW5wdXQgPSB0cnVlO1xuICAgIGxldCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSk7XG5cbiAgICAvLyBQcmltZXJvIGVsaW1pbmFyIHRvZG9zIGxvcyBjYXJhY3RlcmVzIG5vIHbDoWxpZG9zIGV4Y2VwdG8gcHVudG9zIHkgc2lnbm9zXG4gICAgZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcmVkVmFsdWUucmVwbGFjZSh0aGlzLm51bWJlcnNSZWdleCwgJycpO1xuXG4gICAgLy8gUmVtb3ZlciBwdW50b3MgZGVjaW1hbGVzIHNpIG5vIGVzdMOhbiBwZXJtaXRpZG9zXG4gICAgaWYgKCF0aGlzLmFsbG93RGVjaW1hbHMpIHtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhciBmb3JtYXRvIGRlIGRlY2ltYWxlc1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcblxuICAgICAgLy8gU29sbyBwZXJtaXRpciB1biBwdW50byBkZWNpbWFsXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gcGFydHNbMF0gKyAnLicgKyBwYXJ0cy5zbGljZSgxKS5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmUtc3BsaXQgZGVzcHXDqXMgZGUgbGltcGlhclxuICAgICAgY29uc3QgY2xlYW5QYXJ0cyA9IGZpbHRlcmVkVmFsdWUuc3BsaXQoJy4nKTtcblxuICAgICAgLy8gTGltaXRhciBkZWNpbWFsZXNcbiAgICAgIGlmIChjbGVhblBhcnRzWzFdICYmIGNsZWFuUGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBmaWx0ZXJlZFZhbHVlID0gY2xlYW5QYXJ0c1swXSArICcuJyArIGNsZWFuUGFydHNbMV0uc3Vic3RyaW5nKDAsIHRoaXMubWF4RGVjaW1hbHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZXIgc2lnbm8gbmVnYXRpdm8gc2kgbm8gZXN0w6EgcGVybWl0aWRvIG8gc2kgZXN0w6EgbWFsIHBvc2ljaW9uYWRvXG4gICAgaWYgKCF0aGlzLmFsbG93TmVnYXRpdmUpIHtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb2xvIHBlcm1pdGlyIHVuIHNpZ25vIG5lZ2F0aXZvIGFsIGluaWNpb1xuICAgICAgY29uc3QgaGFzTmVnYXRpdmUgPSBmaWx0ZXJlZFZhbHVlLnN0YXJ0c1dpdGgoJy0nKTtcbiAgICAgIGZpbHRlcmVkVmFsdWUgPSBmaWx0ZXJlZFZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuICAgICAgaWYgKGhhc05lZ2F0aXZlKSB7XG4gICAgICAgIGZpbHRlcmVkVmFsdWUgPSAnLScgKyBmaWx0ZXJlZFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0aWFsVmFsdWUgIT09IGZpbHRlcmVkVmFsdWUpIHtcbiAgICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3QgbGVuZ3RoRGlmZiA9IGluaXRpYWxWYWx1ZS5sZW5ndGggLSBmaWx0ZXJlZFZhbHVlLmxlbmd0aDtcblxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UoZmlsdGVyZWRWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XG5cbiAgICAgIC8vIEFqdXN0YXIgbGEgcG9zaWNpw7NuIGRlbCBjdXJzb3JcbiAgICAgIGNvbnN0IG5ld0N1cnNvclBvc2l0aW9uID0gTWF0aC5tYXgoMCwgY3Vyc29yUG9zaXRpb24gLSBsZW5ndGhEaWZmKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobmV3Q3Vyc29yUG9zaXRpb24sIG5ld0N1cnNvclBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzUHJvY2Vzc2luZ051bWJlcnNJbnB1dCA9IGZhbHNlO1xuICB9XG5cbiAgb25LZXlQcmVzc0Zvck51bWJlcnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcblxuICAgIC8vIFBlcm1pdGlyIHRlY2xhcyBkZSBjb250cm9sXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnIHx8IGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScgfHxcbiAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFBlcm1pdGlyIHB1bnRvIGRlY2ltYWwgc29sbyBzaSBubyBleGlzdGUgdW5vIHlhXG4gICAgaWYgKHRoaXMuYWxsb3dEZWNpbWFscyAmJiBjaGFyID09PSAnLicpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGVybWl0aXIgc2lnbm8gbmVnYXRpdm8gYWwgaW5pY2lvXG4gICAgaWYgKHRoaXMuYWxsb3dOZWdhdGl2ZSAmJiBjaGFyID09PSAnLScpIHtcbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvbiA9PT0gMCAmJiAhY3VycmVudFZhbHVlLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTb2xvIHBlcm1pdGlyIG7Dum1lcm9zXG4gICAgaWYgKCEvXlxcZCQvLnRlc3QoY2hhcikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhciBtw6F4aW1vIGRlIGRlY2ltYWxlcyBzaSB5YSBleGlzdGUgdW4gcHVudG9cbiAgICBpZiAodGhpcy5hbGxvd0RlY2ltYWxzICYmIGN1cnJlbnRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGN1cnJlbnRWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgZGVjaW1hbFBhcnQgPSBwYXJ0c1sxXSB8fCAnJztcbiAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uRW5kID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25FbmQgfHwgMDtcbiAgICAgIGNvbnN0IGRlY2ltYWxTdGFydFBvc2l0aW9uID0gcGFydHNbMF0ubGVuZ3RoICsgMTtcblxuICAgICAgLy8gU2kgZWwgY3Vyc29yIGVzdMOhIGRlc3B1w6lzIGRlbCBwdW50byB5IHlhIGhheSBtYXhEZWNpbWFscyBkw61naXRvcyAoc2luIHNlbGVjY2nDs24pXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPj0gZGVjaW1hbFN0YXJ0UG9zaXRpb24gJiZcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9PT0gc2VsZWN0aW9uRW5kICYmXG4gICAgICAgICAgZGVjaW1hbFBhcnQubGVuZ3RoID49IHRoaXMubWF4RGVjaW1hbHMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBhc3RlRm9yTnVtYmVycyhldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FOdW1iZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcbiAgICBsZXQgZmlsdGVyZWRUZXh0ID0gcGFzdGVkVGV4dC5yZXBsYWNlKHRoaXMubnVtYmVyc1JlZ2V4LCAnJyk7XG5cbiAgICAvLyBWYWxpZGFyIGZvcm1hdG8gZGUgZGVjaW1hbGVzIGVuIHRleHRvIHBlZ2Fkb1xuICAgIGlmICh0aGlzLmFsbG93RGVjaW1hbHMgJiYgZmlsdGVyZWRUZXh0LmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyZWRUZXh0LnNwbGl0KCcuJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzLnNsaWNlKDEpLmpvaW4oJycpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFydHNbMV0gJiYgcGFydHNbMV0ubGVuZ3RoID4gdGhpcy5tYXhEZWNpbWFscykge1xuICAgICAgICBmaWx0ZXJlZFRleHQgPSBwYXJ0c1swXSArICcuJyArIHBhcnRzWzFdLnN1YnN0cmluZygwLCB0aGlzLm1heERlY2ltYWxzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyZWRUZXh0KSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0IHx8IDA7XG4gICAgICBjb25zdCBlbmQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCB8fCAwO1xuXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgZmlsdGVyZWRUZXh0ICsgY3VycmVudFZhbHVlLnN1YnN0cmluZyhlbmQpO1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuXG4gICAgICAvLyBSZXN0YXVyYXIgcG9zaWNpw7NuIGRlbCBjdXJzb3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0ICsgZmlsdGVyZWRUZXh0Lmxlbmd0aCwgc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gVkFMSURBQ0nDk04gREUgTEVUUkFTID09PT09PT09PT1cbiAgcHJpdmF0ZSB1cGRhdGVMZXR0ZXJzUmVnZXgoKTogdm9pZCB7XG4gICAgbGV0IHBhdHRlcm4gPSAnW15hLXpBLVonO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dTcGFjZXMpIHtcbiAgICAgIHBhdHRlcm4gKz0gJyAnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFsbG93QWNjZW50cykge1xuICAgICAgcGF0dGVybiArPSAnw6HDqcOtw7PDusOBw4nDjcOTw5rDscORw7zDnCc7XG4gICAgfVxuXG4gICAgcGF0dGVybiArPSAnXSc7XG4gICAgdGhpcy5sZXR0ZXJzUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG4gIH1cblxuICBvbklucHV0Rm9yTGV0dGVycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNhTGV0dGVyc09ubHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpbml0aWFsVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gU3RyaW5nKGluaXRpYWxWYWx1ZSkucmVwbGFjZSh0aGlzLmxldHRlcnNSZWdleCwgJycpO1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGZpbHRlcmVkVmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsdGVyZWRWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UoZmlsdGVyZWRWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZmlsdGVyZWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlQcmVzc0ZvckxldHRlcnMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG5cbiAgICAvLyBQZXJtaXRpciB0ZWNsYXMgZGUgY29udHJvbFxuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyB8fCBldmVudC5rZXkgPT09ICdEZWxldGUnIHx8XG4gICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fFxuICAgICAgICBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZXR0ZXJzUmVnZXgudGVzdChjaGFyKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBvblBhc3RlRm9yTGV0dGVycyhldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2FMZXR0ZXJzT25seSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGFzdGVkVGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGE/LmdldERhdGEoJ3RleHQnKSB8fCAnJztcbiAgICBjb25zdCBmaWx0ZXJlZFRleHQgPSBwYXN0ZWRUZXh0LnJlcGxhY2UodGhpcy5sZXR0ZXJzUmVnZXgsICcnKTtcblxuICAgIGlmIChmaWx0ZXJlZFRleHQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJyc7XG4gICAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uRW5kIHx8IDA7XG5cbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY3VycmVudFZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyBmaWx0ZXJlZFRleHQgKyBjdXJyZW50VmFsdWUuc3Vic3RyaW5nKGVuZCk7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG5cbiAgICAgIC8vIFJlc3RhdXJhciBwb3NpY2nDs24gZGVsIGN1cnNvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyBmaWx0ZXJlZFRleHQubGVuZ3RoLCBzdGFydCArIGZpbHRlcmVkVGV4dC5sZW5ndGgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59IiwiPGRpdiBjbGFzcz1cIlwiPlxuICA8bGFiZWwgKm5nSWY9XCJzaG91bGRTaG93TGFiZWxcIiBbZm9yXT1cImlkXCIgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiPlxuICAgIHt7IGxhYmVsIH19XG4gICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxuICA8L2xhYmVsPlxuXG4gIDxkaXYgW2NsYXNzXT1cImlucHV0R3JvdXBDbGFzc2VzXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJsZWZ0SWNvblwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgPHNhLWljb24gXG4gICAgICAgICpuZ0lmPVwiIWxlZnRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbbmFtZV09XCJsZWZ0SWNvblwiIFxuICAgICAgICBzaXplPVwibWRcIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICAgIDxpIFxuICAgICAgICAqbmdJZj1cImxlZnRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbY2xhc3NdPVwibGVmdEljb25cIj5cbiAgICAgIDwvaT5cbiAgICA8L3NwYW4+XG5cbiAgICA8aW5wdXRcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFt0eXBlXT1cImlucHV0VHlwZVwiXG4gICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcbiAgICAgIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVzXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbbWlubGVuZ3RoXT1cIm1pbmxlbmd0aFwiXG4gICAgICBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXG4gICAgICBbcGF0dGVybl09XCJwYXR0ZXJuXCJcbiAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICBkYXRhLWdyYW1tPVwiZmFsc2VcIlxuICAgICAgZGF0YS1ncmFtbV9lZGl0b3I9XCJmYWxzZVwiXG4gICAgICBkYXRhLWVuYWJsZS1ncmFtbWFybHk9XCJmYWxzZVwiXG4gICAgICAoZm9jdXNpbik9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAoZm9jdXNvdXQpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAoY2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoaW5wdXQpPVwic2FOdW1iZXJzT25seSA/IG9uSW5wdXRGb3JOdW1iZXJzKCRldmVudCkgOiAoc2FMZXR0ZXJzT25seSA/IG9uSW5wdXRGb3JMZXR0ZXJzKCRldmVudCkgOiBudWxsKVwiXG4gICAgICAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChrZXlwcmVzcyk9XCJzYU51bWJlcnNPbmx5ID8gb25LZXlQcmVzc0Zvck51bWJlcnMoJGV2ZW50KSA6IChzYUxldHRlcnNPbmx5ID8gb25LZXlQcmVzc0ZvckxldHRlcnMoJGV2ZW50KSA6IG9uS2V5UHJlc3MoJGV2ZW50KSlcIlxuICAgICAgKHBhc3RlKT1cInNhTnVtYmVyc09ubHkgPyBvblBhc3RlRm9yTnVtYmVycygkZXZlbnQpIDogKHNhTGV0dGVyc09ubHkgPyBvblBhc3RlRm9yTGV0dGVycygkZXZlbnQpIDogbnVsbClcIlxuICAgIC8+XG5cbiAgICA8c3BhbiAqbmdJZj1cInJpZ2h0SWNvbiAmJiB0eXBlICE9PSAncGFzc3dvcmQnXCIgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgKm5nSWY9XCIhcmlnaHRJY29uLmluY2x1ZGVzKCdmYS0nKVwiIFxuICAgICAgICBbbmFtZV09XCJyaWdodEljb25cIiBcbiAgICAgICAgc2l6ZT1cInNtXCI+XG4gICAgICA8L3NhLWljb24+XG4gICAgICA8aSBcbiAgICAgICAgKm5nSWY9XCJyaWdodEljb24uaW5jbHVkZXMoJ2ZhLScpXCIgXG4gICAgICAgIFtjbGFzc109XCJyaWdodEljb25cIj5cbiAgICAgIDwvaT5cbiAgICA8L3NwYW4+XG5cbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cInR5cGUgPT09ICdwYXNzd29yZCdcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgKGNsaWNrKT1cInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwic2hvd1Bhc3N3b3JkID8gJ09jdWx0YXIgY29udHJhc2XDsWEnIDogJ01vc3RyYXIgY29udHJhc2XDsWEnXCJcbiAgICA+XG4gICAgICA8c2EtaWNvbiBcbiAgICAgICAgW25hbWVdPVwic2hvd1Bhc3N3b3JkID8gJ2V5ZS1zbGFzaCcgOiAnZXllJ1wiIFxuICAgICAgICBzaXplPVwic21cIj5cbiAgICAgIDwvc2EtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIFtjbGFzc109XCJoZWxwZXJUZXh0Q2xhc3Nlc1wiPnt7IGhlbHBlclRleHQgfX08L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIFtjbGFzc109XCJlcnJvclRleHRDbGFzc2VzXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XG48L2Rpdj4iXX0=