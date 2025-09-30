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
    focus = new EventEmitter();
    blur = new EventEmitter();
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
        this.focus.emit(event);
    }
    onInputBlur(event) {
        this.onTouched();
        this.blur.emit(event);
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SaSwitchComponent, selector: "sa-switch", inputs: { value: "value", size: "size", status: "status", label: "label", noLabel: "noLabel", hideLabel: "hideLabel", helperText: "helperText", errorText: "errorText", required: "required", disabled: "disabled", id: "id", name: "name", class: "class" }, outputs: { valueChange: "valueChange", change: "change", focus: "focus", blur: "blur" }, host: { properties: { "class": "this.hostClasses" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SaSwitchComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focus)=\"onInputFocus($event)\"\r\n      (blur)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"shouldShowLabel\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"onLabelClick($event)\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:8px;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:48px;height:24px;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:1;border-radius:48px;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:20px;height:20px;background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 22px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 4px #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 4px #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 4px #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:32px;height:18px}:host .form-switch-sm .form-check-input:before{width:14px;height:14px}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 16px)}:host .form-switch-md .form-check-input{width:48px;height:24px}:host .form-switch-md .form-check-input:before{width:20px;height:20px}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 22px)}:host .form-switch-lg .form-check-input{width:64px;height:32px}:host .form-switch-lg .form-check-input:before{width:28px;height:28px}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 30px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:1;flex:1;position:relative}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px;margin-left:56px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;margin-left:56px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.CheckboxRequiredValidator, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sa-switch', encapsulation: ViewEncapsulation.ShadowDom, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SaSwitchComponent),
                            multi: true
                        }
                    ], template: "<div class=\"\">\r\n  <div [class]=\"switchClasses\">\r\n    <input\r\n      [id]=\"uniqueId\"\r\n      [name]=\"name\"\r\n      type=\"checkbox\"\r\n      [class]=\"inputClasses\"\r\n      [(ngModel)]=\"value\"\r\n      (change)=\"onModelChange($event)\"\r\n      [required]=\"required\"\r\n      [disabled]=\"disabled\"\r\n      (focus)=\"onInputFocus($event)\"\r\n      (blur)=\"onInputBlur($event)\"\r\n    />\r\n    <label \r\n      *ngIf=\"shouldShowLabel\" \r\n      [for]=\"uniqueId\" \r\n      [class]=\"labelClasses\"\r\n      (click)=\"onLabelClick($event)\">\r\n      {{ label }}\r\n      <span *ngIf=\"required && label\" class=\"text-danger\">*</span>\r\n    </label>\r\n  </div>\r\n\r\n  <div *ngIf=\"helperText && !errorText\" class=\"form-text\">{{ helperText }}</div>\r\n  <div *ngIf=\"errorText\" class=\"invalid-feedback d-block\">{{ errorText }}</div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";@import\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap\";:root{--sanna-font-family: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-light: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-regular: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-medium: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-semibold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--sanna-font-bold: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif}.sanna-component{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-light{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:300!important}.sanna-font-regular{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}.sanna-font-medium,.sanna-font-semibold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:500!important}.sanna-font-bold{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:700!important}[class*=sa-],[class^=sanna-]{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif!important;font-optical-sizing:auto;font-style:normal;font-weight:400!important}:host{display:block;width:100%;font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;box-sizing:border-box}:host .mb-3{width:100%;box-sizing:border-box}:host .form-switch{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:flex;align-items:center;gap:8px;padding-left:0!important;margin-bottom:0;min-height:auto}:host .form-switch .form-check-input{cursor:pointer!important;width:48px;height:24px;background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important;margin:0;flex-shrink:0;background-image:none!important;position:relative;z-index:1;border-radius:48px;transition:all .3s cubic-bezier(.4,0,.2,1);appearance:none}:host .form-switch .form-check-input:before{content:\"\";position:absolute;top:50%;width:20px;height:20px;background-color:#a4a8ac;border-radius:50%;transition:all .3s cubic-bezier(.4,0,.2,1);z-index:1;transform:translateY(-50%);pointer-events:none}:host .form-switch .form-check-input:checked{background-color:#32a047!important;border-color:#32a047!important}:host .form-switch .form-check-input:checked:before{left:calc(100% - 22px);background-color:#fff}:host .form-switch .form-check-input:not(:checked){background-color:#fff!important;border:1px solid #c9c9c9!important;border-color:#c9c9c9!important}:host .form-switch .form-check-input:not(:checked):before{left:2px;background-color:#a4a8ac}:host .form-switch .form-check-input:focus:not(:focus-visible){outline:none!important;box-shadow:none!important}:host .form-switch .form-check-input:focus-visible{outline:none!important;box-shadow:0 0 0 4px #32a04740!important;border-color:#32a047!important}:host .form-switch .form-check-input:disabled{background-color:#e9ecef!important;border-color:#e9ecef!important;cursor:not-allowed!important}:host .form-switch .form-check-input:disabled:checked{background-color:#e9ecef!important;border-color:#e9ecef!important}:host .form-switch .form-check-input:disabled:before{background-color:#a4a8ac}:host .form-switch.is-valid .form-check-input{border-color:#32a047}:host .form-switch.is-valid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-valid .form-check-input:focus-visible{box-shadow:0 0 0 4px #10b98140!important}:host .form-switch.is-valid .form-check-input:checked{background-color:#32a047!important}:host .form-switch.is-invalid .form-check-input{border-color:#ef4444}:host .form-switch.is-invalid .form-check-input:focus:not(:focus-visible){box-shadow:none!important}:host .form-switch.is-invalid .form-check-input:focus-visible{box-shadow:0 0 0 4px #ef444440!important}:host .form-switch.is-invalid .form-check-input:checked{background-color:#32a047!important}:host .form-switch-sm .form-check-input{width:32px;height:18px}:host .form-switch-sm .form-check-input:before{width:14px;height:14px}:host .form-switch-sm .form-check-input:checked:before{left:calc(100% - 16px)}:host .form-switch-md .form-check-input{width:48px;height:24px}:host .form-switch-md .form-check-input:before{width:20px;height:20px}:host .form-switch-md .form-check-input:checked:before{left:calc(100% - 22px)}:host .form-switch-lg .form-check-input{width:64px;height:32px}:host .form-switch-lg .form-check-input:before{width:28px;height:28px}:host .form-switch-lg .form-check-input:checked:before{left:calc(100% - 30px)}:host .form-check-label{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;color:#212529;font-size:14px;font-weight:400!important;cursor:pointer!important;margin:0;line-height:1.2;display:flex;align-items:center;-webkit-user-select:none;user-select:none;z-index:1;flex:1;position:relative}:host .form-check-label.label-sm{font-size:11px!important}:host .form-check-label.label-md{font-size:14px!important}:host .form-check-label.label-lg{font-size:16px!important}:host .form-check-label.ghost-label{visibility:hidden}:host .form-check-label.ghost-label:before{content:\"\\a0\"}:host .form-check-label:hover{color:#1a1a1a}:host .form-check-label.text-muted{cursor:not-allowed!important;opacity:.65}:host .form-check-label.text-muted:hover{color:#212529}:host .form-text{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:4px;margin-left:56px}:host .invalid-feedback{font-family:Plus Jakarta Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:12px;margin-top:4px;margin-left:56px;color:#dc3545;display:block}:host .text-danger{color:#dc3545!important;margin-left:2px}:host .mb-3:last-child{margin-bottom:0!important}:host .form-check-input:disabled+.form-check-label{opacity:.65;cursor:not-allowed}\n"] }]
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
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Etc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Nhbm5hLXVpL3NyYy9saWIvZm9ybXMvc2Etc3dpdGNoL3NhLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zYW5uYS11aS9zcmMvbGliL2Zvcm1zL3NhLXN3aXRjaC9zYS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWtCekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixLQUFLLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLElBQUksR0FBZSxJQUFJLENBQUM7SUFDeEIsTUFBTSxHQUFpQixTQUFTLENBQUM7SUFDakMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUVwQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQ2xDLElBQ0ksT0FBTyxDQUFDLEtBQW9CO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVPLFVBQVUsR0FBWSxLQUFLLENBQUM7SUFDcEMsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVB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QUs7Z0JBRUksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFRSCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgU3dpdGNoU2l6ZSA9ICdzbScgfCAnbWQnIHwgJ2xnJztcclxuZXhwb3J0IHR5cGUgU3dpdGNoU3RhdHVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2Etc3dpdGNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2Etc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zYS1zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb20sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTYVN3aXRjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2FTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgdmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBTd2l0Y2hTaXplID0gJ21kJztcclxuICBASW5wdXQoKSBzdGF0dXM6IFN3aXRjaFN0YXR1cyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5vTGFiZWwodmFsdWU6IGJvb2xlYW4gfCBhbnkpIHtcclxuICAgIHRoaXMuX25vTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgbm9MYWJlbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0xhYmVsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZUxhYmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgaGlkZUxhYmVsKHZhbHVlOiBib29sZWFuIHwgYW55KSB7XHJcbiAgICB0aGlzLl9oaWRlTGFiZWwgPSB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnO1xyXG4gIH1cclxuICBnZXQgaGlkZUxhYmVsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hpZGVMYWJlbDtcclxuICB9XHJcbiAgQElucHV0KCkgaGVscGVyVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZXJyb3JUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIFxyXG4gIC8vIFNvcG9ydGUgcGFyYSBuZ0NsYXNzXHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX2dlbmVyYXRlZElkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIC8vIEhvc3RCaW5kaW5nIHBhcmEgc29wb3J0ZSBkZSBuZ0NsYXNzXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzcyB8fCAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZ2VuZXJhdGVkSWQgPSBgc2Etc3dpdGNoLSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfWA7XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmFyIElEIMO6bmljbyBzaSBubyBzZSBwcm9wb3JjaW9uYSB1bm9cclxuICBnZXQgdW5pcXVlSWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlkIHx8IHRoaXMuX2dlbmVyYXRlZElkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN3aXRjaENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gWydmb3JtLWNoZWNrJywgJ2Zvcm0tc3dpdGNoJ107XHJcbiAgICBcclxuICAgIC8vIFRhbWHDsW9zIHBlcnNvbmFsaXphZG9zXHJcbiAgICBpZiAodGhpcy5zaXplID09PSAnc20nKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2Zvcm0tc3dpdGNoLXNtJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSA9PT0gJ21kJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdmb3JtLXN3aXRjaC1tZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNpemUgPT09ICdsZycpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnZm9ybS1zd2l0Y2gtbGcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRXN0YWRvcyBkZSB2YWxpZGFjacOzblxyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuZXJyb3JUZXh0KSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCdpcy12YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXNlQ2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IFsnZm9ybS1jaGVjay1pbnB1dCddO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5lcnJvclRleHQpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnaXMtaW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGJhc2VDbGFzc2VzLnB1c2goJ2lzLXZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhc2VDbGFzc2VzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbENsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHNpemVNYXAgPSB7XHJcbiAgICAgICdzbSc6ICdmb3JtLWNoZWNrLWxhYmVsIGxhYmVsLXNtJyxcclxuICAgICAgJ21kJzogJ2Zvcm0tY2hlY2stbGFiZWwgbGFiZWwtbWQnLFxyXG4gICAgICAnbGcnOiAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1sZydcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGJhc2VDbGFzc2VzID0gW3NpemVNYXBbdGhpcy5zaXplXSB8fCAnZm9ybS1jaGVjay1sYWJlbCBsYWJlbC1tZCddO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBiYXNlQ2xhc3Nlcy5wdXNoKCd0ZXh0LW11dGVkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNpIGVzIG5vTGFiZWwsIGFncmVnYXIgY2xhc2UgcGFyYSBsYWJlbCBmYW50YXNtYVxyXG4gICAgaWYgKHRoaXMubm9MYWJlbCAmJiAhdGhpcy5oaWRlTGFiZWwpIHtcclxuICAgICAgYmFzZUNsYXNzZXMucHVzaCgnZ2hvc3QtbGFiZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmFzZUNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3VsZFNob3dMYWJlbCgpOiBib29sZWFuIHtcclxuICAgIC8vIFNpIGhpZGVMYWJlbCBlc3TDoSBhY3Rpdm8sIG51bmNhIG1vc3RyYXIgZWwgbGFiZWxcclxuICAgIGlmICh0aGlzLmhpZGVMYWJlbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBDb21wb3J0YW1pZW50byBvcmlnaW5hbDogbW9zdHJhciBzaSBoYXkgbGFiZWwgbyBzaSBub0xhYmVsIGVzdMOhIGFjdGl2byAocGFyYSBlc3BhY2lvIGZhbnRhc21hKVxyXG4gICAgcmV0dXJuICEhdGhpcy5sYWJlbCB8fCB0aGlzLm5vTGFiZWw7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uTW9kZWxDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMudmFsdWUgPSB0YXJnZXQuY2hlY2tlZDtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTd2l0Y2goKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxhYmVsQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBQcmV2ZW5pciBlbCBjb21wb3J0YW1pZW50byBwb3IgZGVmZWN0byBkZWwgbGFiZWxcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIC8vIFNvbG8gY2FtYmlhciBlbCBlc3RhZG8gc2kgbm8gZXN0w6EgZGVzaGFiaWxpdGFkb1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgLy8gTWFyY2FyIGNvbW8gdG91Y2hlZCBwYXJhIHZhbGlkYWNpb25lc1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgPGRpdiBbY2xhc3NdPVwic3dpdGNoQ2xhc3Nlc1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIFtpZF09XCJ1bmlxdWVJZFwiXHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc2VzXCJcclxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgIChjaGFuZ2UpPVwib25Nb2RlbENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcclxuICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGxhYmVsIFxyXG4gICAgICAqbmdJZj1cInNob3VsZFNob3dMYWJlbFwiIFxyXG4gICAgICBbZm9yXT1cInVuaXF1ZUlkXCIgXHJcbiAgICAgIFtjbGFzc109XCJsYWJlbENsYXNzZXNcIlxyXG4gICAgICAoY2xpY2spPVwib25MYWJlbENsaWNrKCRldmVudClcIj5cclxuICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgPHNwYW4gKm5nSWY9XCJyZXF1aXJlZCAmJiBsYWJlbFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAqbmdJZj1cImhlbHBlclRleHQgJiYgIWVycm9yVGV4dFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+e3sgaGVscGVyVGV4dCB9fTwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJlcnJvclRleHRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPnt7IGVycm9yVGV4dCB9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19