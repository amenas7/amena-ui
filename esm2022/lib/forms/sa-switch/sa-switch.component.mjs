import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class SaSwitchComponent {
    value = false;
    size = 'md';
    status = 'default';
    label = '';
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
    required = false;
    disabled = false;
    id = '';
    name = '';
    // Soporte para ngClass
    class = '';
    valueChange = new EventEmitter();
    change = new EventEmitter();
    focusin = new EventEmitter();
    focusout = new EventEmitter();
    _generatedId;
    onChange = (_) => { };
    onTouched = () => { };
    // HostBinding para soporte de ngClass
    get hostClasses() {
        return this.class || '';
    }
    constructor() {
        this._generatedId = `sa-switch-${Math.random().toString(36).substr(2, 9)}`;
    }
    // Generar ID único si no se proporciona uno
    get uniqueId() {
        return this.id || this._generatedId;
    }
    get switchClasses() {
        const baseClasses = ['form-check', 'form-switch'];
        // Tamaños personalizados
        if (this.size === 'sm') {
            baseClasses.push('form-switch-sm');
        }
        else if (this.size === 'md') {
            baseClasses.push('form-switch-md');
        }
        else if (this.size === 'lg') {
            baseClasses.push('form-switch-lg');
        }
        // Estados de validación
        if (this.status === 'error' || this.errorText) {
            baseClasses.push('is-invalid');
        }
        else if (this.status === 'success') {
            baseClasses.push('is-valid');
        }
        return baseClasses.join(' ');
    }
    get inputClasses() {
        const baseClasses = ['form-check-input'];
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
            'sm': 'form-check-label label-sm',
            'md': 'form-check-label label-md',
            'lg': 'form-check-label label-lg'
        };
        const baseClasses = [sizeMap[this.size] || 'form-check-label label-md'];
        if (this.disabled) {
            baseClasses.push('text-muted');
        }
        // Si es noLabel, agregar clase para label fantasma
        if (this.noLabel && !this.hideLabel) {
            baseClasses.push('ghost-label');
        }
        return baseClasses.join(' ');
    }
    get shouldShowLabel() {
        // Si hideLabel está activo, nunca mostrar el label
        if (this.hideLabel) {
            return false;
        }
        // Comportamiento original: mostrar si hay label o si noLabel está activo (para espacio fantasma)
        return !!this.label || this.noLabel;
    }
    writeValue(value) {
        this.value = !!value;
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
    onModelChange(event) {
        const target = event.target;
        this.value = target.checked;
        this.onChange(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this.value);
    }
    onInputFocus(event) {
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.focusin.emit(event);
    }
    onInputBlur(event) {
        event.stopPropagation(); // Prevenir que el evento burbujee fuera del Shadow DOM
        this.onTouched();
        this.focusout.emit(event);
    }
    toggleSwitch() {
        if (!this.disabled) {
            this.value = !this.value;
            this.onChange(this.value);
            this.valueChange.emit(this.value);
            this.change.emit(this.value);
        }
    }
    onLabelClick(event) {
        // Prevenir el comportamiento por defecto del label
        event.preventDefault();
        // Solo cambiar el estado si no está deshabilitado
        if (!this.disabled) {
            this.value = !this.value;
            this.onChange(this.value);
            this.valueChange.emit(this.value);
            this.change.emit(this.value);
            // Marcar como touched para validaciones
            this.onTouched();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSwitchComponent, selector: "sa-switch", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", id: "id", name: "name", class: "class" }, outputs: { valueChange: "valueChange", change: "change", focusin: "focusin", focusout: "focusout" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSwitchComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focusin)=\"onInputFocus($event)\"\r\n      (focusout)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"shouldShowLabel\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"onLabelClick($event)\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:8px;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:48px;height:24px;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:1;border-radius:48px;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:20px;height:20px;background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 22px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 4px #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 4px #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 4px #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:32px;height:18px}:host .form-switch-sm .form-check-input:before{width:14px;height:14px}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 16px)}:host .form-switch-md .form-check-input{width:48px;height:24px}:host .form-switch-md .form-check-input:before{width:20px;height:20px}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 22px)}:host .form-switch-lg .form-check-input{width:64px;height:32px}:host .form-switch-lg .form-check-input:before{width:28px;height:28px}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 30px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:1;flex:1;position:relative}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px;margin-left:56px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;margin-left:56px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.CheckboxRequiredValidator, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-switch', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSwitchComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focusin)=\"onInputFocus($event)\"\r\n      (focusout)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"shouldShowLabel\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"onLabelClick($event)\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:8px;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:48px;height:24px;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:1;border-radius:48px;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:20px;height:20px;background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 22px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 4px #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 4px #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 4px #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:32px;height:18px}:host .form-switch-sm .form-check-input:before{width:14px;height:14px}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 16px)}:host .form-switch-md .form-check-input{width:48px;height:24px}:host .form-switch-md .form-check-input:before{width:20px;height:20px}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 22px)}:host .form-switch-lg .form-check-input{width:64px;height:32px}:host .form-switch-lg .form-check-input:before{width:28px;height:28px}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 30px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:1;flex:1;position:relative}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px;margin-left:56px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;margin-left:56px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"] }]
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
            }], helperText: [{
                type: Input
            }], errorText: [{
                type: Input
            }], required: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], name: [{
                type: Input
            }], class: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], change: [{
                type: Output
            }], focusin: [{
                type: Output
            }], focusout: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXN3aXRjaC9zYS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLElBQUksR0FBZSxJQUFJLENBQUM7SUFDeEIsTUFBTSxHQUFpQixTQUFTLENBQUM7SUFDakMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVwQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ2xDLElBQ0ksT0FBTyxDQUFDLEtBQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDcEMsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVB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Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBUUgsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCB0eXBlIFN3aXRjaFNpemUgPSAnc20nIHwgJ21kJyB8ICdsZyc7XHJcbmV4cG9ydCB0eXBlIFN3aXRjaFN0YXR1cyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdlcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NhLXN3aXRjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NhLXN3aXRjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2Etc3dpdGNoLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2FTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNhU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogU3dpdGNoU2l6ZSA9ICdtZCc7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBTd2l0Y2hTdGF0dXMgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIHByaXZhdGUgX25vTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBub0xhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9ub0xhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IG5vTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9MYWJlbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hpZGVMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhpZGVMYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5faGlkZUxhYmVsID0gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09ICd0cnVlJztcclxuICB9XHJcbiAgZ2V0IGhpZGVMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlTGFiZWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVycm9yVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcclxuICBcclxuICAvLyBTb3BvcnRlIHBhcmEgbmdDbGFzc1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzaW4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGZvY3Vzb3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG5cclxuICBwcml2YXRlIF9nZW5lcmF0ZWRJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICAvLyBIb3N0QmluZGluZyBwYXJhIHNvcG9ydGUgZGUgbmdDbGFzc1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBob3N0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3MgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2dlbmVyYXRlZElkID0gYHNhLXN3aXRjaC0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KX1gO1xyXG4gIH1cclxuXHJcbiAgLy8gR2VuZXJhciBJRCDDum5pY28gc2kgbm8gc2UgcHJvcG9yY2lvbmEgdW5vXHJcbiAgZ2V0IHVuaXF1ZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pZCB8fCB0aGlzLl9nZW5lcmF0ZWRJZDtcclxuICB9XHJcblxyXG4gIGdldCBzd2l0Y2hDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1jaGVjaycsICdmb3JtLXN3aXRjaCddO1xyXG4gICAgXHJcbiAgICAvLyBUYW1hw7FvcyBwZXJzb25hbGl6YWRvc1xyXG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ3NtJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdmb3JtLXN3aXRjaC1zbScpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNpemUgPT09ICdtZCcpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnZm9ybS1zd2l0Y2gtbWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSAnbGcnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2Zvcm0tc3dpdGNoLWxnJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEVzdGFkb3MgZGUgdmFsaWRhY2nDs25cclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0Q2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2staW5wdXQnXTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaXplTWFwID0ge1xyXG4gICAgICAnc20nOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1zbScsXHJcbiAgICAgICdtZCc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLW1kJyxcclxuICAgICAgJ2xnJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbGcnXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFtzaXplTWFwW3RoaXMuc2l6ZV0gfHwgJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbWQnXTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgndGV4dC1tdXRlZCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTaSBlcyBub0xhYmVsLCBhZ3JlZ2FyIGNsYXNlIHBhcmEgbGFiZWwgZmFudGFzbWFcclxuICAgIGlmICh0aGlzLm5vTGFiZWwgJiYgIXRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2dob3N0LWxhYmVsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBzaG91bGRTaG93TGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBTaSBoaWRlTGFiZWwgZXN0w6EgYWN0aXZvLCBudW5jYSBtb3N0cmFyIGVsIGxhYmVsXHJcbiAgICBpZiAodGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gQ29tcG9ydGFtaWVudG8gb3JpZ2luYWw6IG1vc3RyYXIgc2kgaGF5IGxhYmVsIG8gc2kgbm9MYWJlbCBlc3TDoSBhY3Rpdm8gKHBhcmEgZXNwYWNpbyBmYW50YXNtYSlcclxuICAgIHJldHVybiAhIXRoaXMubGFiZWwgfHwgdGhpcy5ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVsQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRGb2N1cyhldmVudDogRm9jdXNFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbmlyIHF1ZSBlbCBldmVudG8gYnVyYnVqZWUgZnVlcmEgZGVsIFNoYWRvdyBET01cclxuICAgIHRoaXMuZm9jdXNpbi5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVuaXIgcXVlIGVsIGV2ZW50byBidXJidWplZSBmdWVyYSBkZWwgU2hhZG93IERPTVxyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuZm9jdXNvdXQuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTd2l0Y2goKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxhYmVsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBQcmV2ZW5pciBlbCBjb21wb3J0YW1pZW50byBwb3IgZGVmZWN0byBkZWwgbGFiZWxcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIC8vIFNvbG8gY2FtYmlhciBlbCBlc3RhZG8gc2kgbm8gZXN0w6EgZGVzaGFiaWxpdGFkb1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgLy8gTWFyY2FyIGNvbW8gdG91Y2hlZCBwYXJhIHZhbGlkYWNpb25lc1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgPGRpdiBbY2xhc3NdPVwic3dpdGNoQ2xhc3Nlc1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJ1bmlxdWVJZFwiXHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgIChjaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGZvY3VzaW4pPVwib25JbnB1dEZvY3VzKCRldmVudClcIlxyXG4gICAgICAoZm9jdXNvdXQpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGxhYmVsIFxyXG4gICAgICAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFxyXG4gICAgICBbZm9yXT1cInVuaXF1ZUlkXCIgXHJcbiAgICAgIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIlxyXG4gICAgICAoY2xpY2spPVwib25MYWJlbENsaWNrKCRldmVudClcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19