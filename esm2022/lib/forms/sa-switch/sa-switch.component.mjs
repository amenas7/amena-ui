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
        this.focusin.emit(event);
    }
    onInputBlur(event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXN3aXRjaC9zYS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLElBQUksR0FBZSxJQUFJLENBQUM7SUFDeEIsTUFBTSxHQUFpQixTQUFTLENBQUM7SUFDakMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVwQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ2xDLElBQ0ksT0FBTyxDQUFDLEtBQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDcEMsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVB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QUs7Z0JBRUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQVFILFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTd2l0Y2hTaXplID0gJ3NtJyB8ICdtZCcgfCAnbGcnO1xyXG5leHBvcnQgdHlwZSBTd2l0Y2hTdGF0dXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzYS1zd2l0Y2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zYS1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NhLXN3aXRjaC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNhU3dpdGNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYVN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSB2YWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IFN3aXRjaFNpemUgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1czogU3dpdGNoU3RhdHVzID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBcclxuICBwcml2YXRlIF9ub0xhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgbm9MYWJlbCh2YWx1ZTogYm9vbGVhbiB8IGFueSkge1xyXG4gICAgdGhpcy5fbm9MYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBub0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vTGFiZWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBoaWRlTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX2hpZGVMYWJlbCA9IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgfVxyXG4gIGdldCBoaWRlTGFiZWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGlkZUxhYmVsO1xyXG4gIH1cclxuICBASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlcnJvclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgLy8gU29wb3J0ZSBwYXJhIG5nQ2xhc3NcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c2luID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBmb2N1c291dCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfZ2VuZXJhdGVkSWQ6IHN0cmluZztcclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgLy8gSG9zdEJpbmRpbmcgcGFyYSBzb3BvcnRlIGRlIG5nQ2xhc3NcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nZW5lcmF0ZWRJZCA9IGBzYS1zd2l0Y2gtJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSl9YDtcclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXIgSUQgw7puaWNvIHNpIG5vIHNlIHByb3BvcmNpb25hIHVub1xyXG4gIGdldCB1bmlxdWVJZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQgfHwgdGhpcy5fZ2VuZXJhdGVkSWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc3dpdGNoQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbJ2Zvcm0tY2hlY2snLCAnZm9ybS1zd2l0Y2gnXTtcclxuICAgIFxyXG4gICAgLy8gVGFtYcOxb3MgcGVyc29uYWxpemFkb3NcclxuICAgIGlmICh0aGlzLnNpemUgPT09ICdzbScpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnZm9ybS1zd2l0Y2gtc20nKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSAnbWQnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2Zvcm0tc3dpdGNoLW1kJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PT0gJ2xnJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdmb3JtLXN3aXRjaC1sZycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFc3RhZG9zIGRlIHZhbGlkYWNpw7NuXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBpbnB1dENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNoZWNrLWlucHV0J107XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmVycm9yVGV4dCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtdmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsQ2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2l6ZU1hcCA9IHtcclxuICAgICAgJ3NtJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtc20nLFxyXG4gICAgICAnbWQnOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1tZCcsXHJcbiAgICAgICdsZyc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLWxnJ1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgYmFzZUNsYXNzZXMgPSBbc2l6ZU1hcFt0aGlzLnNpemVdIHx8ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLW1kJ107XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ3RleHQtbXV0ZWQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2kgZXMgbm9MYWJlbCwgYWdyZWdhciBjbGFzZSBwYXJhIGxhYmVsIGZhbnRhc21hXHJcbiAgICBpZiAodGhpcy5ub0xhYmVsICYmICF0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdnaG9zdC1sYWJlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvdWxkU2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gU2kgaGlkZUxhYmVsIGVzdMOhIGFjdGl2bywgbnVuY2EgbW9zdHJhciBlbCBsYWJlbFxyXG4gICAgaWYgKHRoaXMuaGlkZUxhYmVsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIENvbXBvcnRhbWllbnRvIG9yaWdpbmFsOiBtb3N0cmFyIHNpIGhheSBsYWJlbCBvIHNpIG5vTGFiZWwgZXN0w6EgYWN0aXZvIChwYXJhIGVzcGFjaW8gZmFudGFzbWEpXHJcbiAgICByZXR1cm4gISF0aGlzLmxhYmVsIHx8IHRoaXMubm9MYWJlbDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlbENoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy52YWx1ZSA9IHRhcmdldC5jaGVja2VkO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Rm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMuZm9jdXNpbi5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5mb2N1c291dC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVN3aXRjaCgpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTGFiZWxDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIC8vIFByZXZlbmlyIGVsIGNvbXBvcnRhbWllbnRvIHBvciBkZWZlY3RvIGRlbCBsYWJlbFxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgLy8gU29sbyBjYW1iaWFyIGVsIGVzdGFkbyBzaSBubyBlc3TDoSBkZXNoYWJpbGl0YWRvXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBNYXJjYXIgY29tbyB0b3VjaGVkIHBhcmEgdmFsaWRhY2lvbmVzXHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJcIj5cclxuICA8ZGl2IFtjbGFzc109XCJzd2l0Y2hDbGFzc2VzXCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgW2lkXT1cInVuaXF1ZUlkXCJcclxuICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzZXNcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgKGNoYW5nZSk9XCJvbk1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAoZm9jdXNpbik9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgIChmb2N1c291dCk9XCJvbklucHV0Qmx1cigkZXZlbnQpXCJcclxuICAgIC8+XHJcbiAgICA8bGFiZWwgXHJcbiAgICAgICpuZ0lmPVwic2hvdWxkU2hvd0xhYmVsXCIgXHJcbiAgICAgIFtmb3JdPVwidW5pcXVlSWRcIiBcclxuICAgICAgW2NsYXNzXT1cImxhYmVsQ2xhc3Nlc1wiXHJcbiAgICAgIChjbGljayk9XCJvbkxhYmVsQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICA8c3BhbiAqbmdJZj1cInJlcXVpcmVkICYmIGxhYmVsXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICpuZ0lmPVwiaGVscGVyVGV4dCAmJiAhZXJyb3JUZXh0XCIgY2xhc3M9XCJmb3JtLXRleHRcIj57eyBoZWxwZXJUZXh0IH19PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImVycm9yVGV4dFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+e3sgZXJyb3JUZXh0IH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=